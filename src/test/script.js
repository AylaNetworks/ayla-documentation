const server = 'https://icc-dev.aylanetworks.com'

$(function () {
  //$('label.custom-file-label').html('')

  $("#upload-img-btn").click(function (event) {
    let accessToken = $('#access-token').val()
    let model = $('#upload-img-model').val()
    let version = $('#upload-img-version').val()
    let image = $('#upload-img-input')[0].files[0]

    AYLA2.postOtaServiceV1HostImages(server, accessToken, model, version, image, function (response) {
      console.log(JSON.stringify(response, null, 2))
    }, function (response) {
      console.log(JSON.stringify(response, null, 2))
    })
  })

  // https://www.4codev.com/javascript/download-save-json-content-to-local-file-in-javascript-idpx473668115863369846.html
  $("#download-img-btn").click(function (event) {
    let accessToken = $('#access-token').val()
    let model = $('#download-img-model').val()
    let version = $('#download-img-version').val()

    AYLA2.getOtaServiceV1HostImages(server, accessToken, model, version, function (response) {
      console.log(JSON.stringify(response, replacer, 2))
      const file = new Blob([response.data], { type: 'application/octet-stream' })
      const a = document.createElement('a')
      a.href = URL.createObjectURL(file)
      a.download = 'myfile'
      a.click()
    }, function (response) {
      console.log(JSON.stringify(response, null, 2))
    })
  })

  $(".custom-file-input").on("change", function () {
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
  })
})

var AYLA2 = {
  postOtaServiceV1HostImages: function (server, accessToken, model, version, image, successCb = null, errorCb = null) {
    var form = new FormData()
    form.append("file", image)
    axios({
      method: 'post',
      url: server + '/otaservice/v1/host_images/' + model + '/image/upload?version=' + version,
      headers: {
        'Authorization': 'auth_token ' + accessToken,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      processData: false,
      mimeType: "multipart/form-data",
      contentType: false,
      data: form
    })
      .then(function (response) { AYLA2.callSuccessCb(response, successCb) })
      .catch(function (error) { AYLA2.callErrorCb(error.response, errorCb) })
  },

  getOtaServiceV1HostImages: function (server, accessToken, model, version, successCb = null, errorCb = null) {
    axios({
      method: 'get',
      url: server + '/otaservice/v1/host_images/' + model + '/image/download?version=' + version,
      headers: {
        'Authorization': 'auth_token ' + accessToken,
        'Accept': 'application/json' // should be *
      }
    })
      .then(function (response) { AYLA2.callSuccessCb(response, successCb) })
      .catch(function (error) { AYLA2.callErrorCb(error.response, errorCb) })
  },

  callSuccessCb: function (response, successCb) { if (successCb) { successCb(response) } },
  callErrorCb: function (response, errorCb) { if (errorCb) { errorCb(response) } }
}

function replacer(key,value) {
  if (key=='data') {return undefined}
  else return value;
}