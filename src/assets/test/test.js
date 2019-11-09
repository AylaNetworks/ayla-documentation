var AYLA = {
  getApiv1Devices: function(server, token, successCb=null, errorCb=null) {
    axios({
      method: 'get',
      url: server + '/apiv1/devices',
      headers: {
        'Authorization': 'auth_token ' + token,
        'Accept': 'application/json'
      }
    })
    .then(function (response) {AYLA.callSuccessCb(response, successCb)})
    .catch(function (error) {AYLA.callErrorCb(error, errorCb)})
  },

  getApiv1DevicesDeviceId: function(server, token, deviceId, successCb=null, errorCb=null) {
    axios({
      method: 'get',
      url: server + '/apiv1/devices/' + deviceId,
      headers: {
        'Authorization': 'auth_token ' + token,
        'Accept': 'application/json'
      }
    })
    .then(function (response) {AYLA.callSuccessCb(response, successCb)})
    .catch(function (error) {AYLA.callErrorCb(error, errorCb)})
  },

  getApiv1DevicesDeviceIdProperties: function(server, token, deviceId, successCb=null, errorCb=null) {
    axios({
      method: 'get',
      url: server + '/apiv1/devices/' + deviceId + '/properties',
      headers: {
        'Authorization': 'auth_token ' + token,
        'Accept': 'application/json'
      }
    })
    .then(function (response) {AYLA.callSuccessCb(response, successCb)})
    .catch(function (error) {AYLA.callErrorCb(error, errorCb)})
  },

  postApiv1DevicesDeviceIdPropertiesPropertyNameDatapoints: function(server, token, deviceId, propertyName, requestBody, successCb=null, errorCb=null) {
    axios({
      method: 'post',
      url: server + '/apiv1/devices/' + deviceId + '/properties/' + propertyName + '/datapoints',
      headers: {
        'Authorization': 'auth_token ' + token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(requestBody)
    })
    .then(function (response) {AYLA.callSuccessCb(response, successCb)})
    .catch(function (error) {AYLA.callErrorCb(error, errorCb)})
  },

  getApiv1DsnsDsn: function(server, token, dsn, successCb=null, errorCb=null) {
    axios({
      method: 'get',
      url: server + '/apiv1/dsns/' + dsn,
      headers: {
        'Authorization': 'auth_token ' + token,
        'Accept': 'application/json'
      }
    })
    .then(function (response) {AYLA.callSuccessCb(response, successCb)})
    .catch(function (error) {AYLA.callErrorCb(error, errorCb)})
  },

  getUsersGetUserProfile: function(server, token, successCb=null, errorCb=null) {
    axios({
      method: 'get',
      url: server + '/users/get_user_profile',
      headers: {
        'Authorization': 'auth_token ' + token,
        'Accept': 'application/json'
      }
    })
    .then(function (response) {AYLA.callSuccessCb(response, successCb)})
    .catch(function (error) {AYLA.callErrorCb(error, errorCb)})
  },

  postUsersSignIn: function(server, requestBody, successCb=null, errorCb=null) {
    axios({
      method: 'post',
      url: server + '/users/sign_in',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(requestBody)
    })
    .then(function (response) {AYLA.callSuccessCb(response, successCb)})
    .catch(function (error) {AYLA.callErrorCb(error, errorCb)})
  },

  postUsersSignOut: function(server, requestBody, successCb=null, errorCb=null) {
    axios({
      method: 'post',
      url: server + '/users/sign_out',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(requestBody)
    })
    .then(function (response) {AYLA.callSuccessCb(response, successCb)})
    .catch(function (error) {AYLA.callErrorCb(error, errorCb)})
  },

  getUsersUuid: function(server, token, uuid, successCb=null, errorCb=null) {
    axios({
      method: 'get',
      url: server + '/users/' + uuid,
      headers: {
        'Authorization': 'auth_token ' + token,
        'Accept': 'application/json'
      }
    })
    .then(function (response) {AYLA.callSuccessCb(response, successCb)})
    .catch(function (error) {AYLA.callErrorCb(error, errorCb)})
  },

  callSuccessCb: function(response, successCb) {if(successCb) {successCb(response)}},
  callErrorCb: function(error, errorCb) {if(errorCb) {errorCb(error)}}
}

/*------------------------------------------------------
Run Functions
------------------------------------------------------*/

$(function() {
  $('#get-apiv1-devices button.api-run').click(function(event) {
    let api = $(this).closest('div.api')
    let regionName = $("select.ayla-region option:selected").val()
    let service = $(api).find('span.api-service').text().toLowerCase()
    let server = serviceUrls[regionName][service]
    let token = getAylaRegion(regionName).access_token
    let responseBody = $(api).find('pre.api-response-body')
    AYLA.getApiv1Devices(server, token, function(response) {
      $(responseBody).text(JSON.stringify(response, null, 2))
    }, function(error) {
      $(responseBody).text(JSON.stringify(error, null, 2))
    })
  })
})

$(function() {
  $('#get-apiv1-devices-deviceid button.api-run').click(function(event) {
    let api = $(this).closest('div.api')
    let regionName = $("select.ayla-region option:selected").val()
    let service = $(api).find('span.api-service').text().toLowerCase()
    let server = serviceUrls[regionName][service]
    let token = getAylaRegion(regionName).access_token
    let pathParameters = $(api).find('input.api-path-parameter')
    let responseBody = $(api).find('pre.api-response-body')
    AYLA.getApiv1DevicesDeviceId(server, token, $(pathParameters.eq(0)).val(), function(response) {
      $(responseBody).text(JSON.stringify(response, null, 2))
    }, function(error) {
      $(responseBody).text(JSON.stringify(error, null, 2))
    })
  })
})

$(function() {
  $('#get-apiv1-devices-deviceid-properties button.api-run').click(function(event) {
    let api = $(this).closest('div.api')
    let regionName = $("select.ayla-region option:selected").val()
    let service = $(api).find('span.api-service').text().toLowerCase()
    let server = serviceUrls[regionName][service]
    let token = getAylaRegion(regionName).access_token
    let pathParameters = $(api).find('input.api-path-parameter')
    let responseBody = $(api).find('pre.api-response-body')
    AYLA.getApiv1DevicesDeviceIdProperties(server, token, $(pathParameters.eq(0)).val(), function(response) {
      $(responseBody).text(JSON.stringify(response, null, 2))
    }, function(error) {
      $(responseBody).text(JSON.stringify(error, null, 2))
    })
  })
})

$(function() {
  $('#post-apiv1-devices-deviceId-properties-propertyName-datapoints button.api-run').click(function(event) {
    let api = $(this).closest('div.api')
    let regionName = $("select.ayla-region option:selected").val()
    let service = $(api).find('span.api-service').text().toLowerCase()
    let server = serviceUrls[regionName][service]
    let token = getAylaRegion(regionName).access_token
    let pathParameters = $(api).find('input.api-path-parameter')
    let requestBody = $(api).find('pre.api-request-body')
    let responseBody = $(api).find('pre.api-response-body')
    AYLA.postApiv1DevicesDeviceIdPropertiesPropertyNameDatapoints(server, token, $(pathParameters.eq(0)).val(), $(inputs.eq(1)).val(), JSON.parse($(requestBody).text()), function(response) {
      $(responseBody).text(JSON.stringify(response, null, 2))
    }, function(error) {
      $(responseBody).text(JSON.stringify(error, null, 2))
    })
  })
})

$(function() {
  $('#get-apiv1-dsns-dsn button.api-run').click(function(event) {
    let api = $(this).closest('div.api')
    let regionName = $("select.ayla-region option:selected").val()
    let service = $(api).find('span.api-service').text().toLowerCase()
    let server = serviceUrls[regionName][service]
    let token = getAylaRegion(regionName).access_token
    let pathParameters = $(api).find('input.api-path-parameter')
    let responseBody = $(api).find('pre.api-response-body')
    AYLA.getApiv1DsnsDsn(server, token, $(pathParameters.eq(0)).val(), function(response) {
      $(responseBody).text(JSON.stringify(response, null, 2))
    }, function(error) {
      $(responseBody).text(JSON.stringify(error, null, 2))
    })
  })
})

$(function() {
  $('#get-users-get-user-profile button.api-run').click(function(event) {
    let api = $(this).closest('div.api')
    let regionName = $("select.ayla-region option:selected").val()
    let service = $(api).find('span.api-service').text().toLowerCase()
    let server = serviceUrls[regionName][service]
    let token = getAylaRegion(regionName).access_token
    let responseBody = $(api).find('pre.api-response-body')
    AYLA.getUsersGetUserProfile(server, token, function(response) {
      $(responseBody).text(JSON.stringify(response, null, 2))
    }, function(error) {
      $(responseBody).text(JSON.stringify(error, null, 2))
    })
  })
})

$(function() {
  $('#post-users-sign-in button.api-run').click(function(event) {
    let api = $(this).closest('div.api')
    let regionName = $("select.ayla-region option:selected").val()
    let service = $(api).find('span.api-service').text().toLowerCase()
    let server = serviceUrls[regionName][service]
    let requestBody = $(api).find('pre.api-request-body')
    let responseBody = $(api).find('pre.api-response-body')
    AYLA.postUsersSignIn(server, JSON.parse($(requestBody).text()), function(response) {
      $(responseBody).text(JSON.stringify(response, null, 2))
    }, function(error) {
      $(responseBody).text(JSON.stringify(error, null, 2))
    })
  })
})

$(function() {
  $('#post-users-sign-out button.api-run').click(function(event) {
    let api = $(this).closest('div.api')
    let regionName = $("select.ayla-region option:selected").val()
    let service = $(api).find('span.api-service').text().toLowerCase()
    let server = serviceUrls[regionName][service]
    let requestBody = $(api).find('pre.api-request-body')
    let responseBody = $(api).find('pre.api-response-body')
    AYLA.postUsersSignOut(server, JSON.parse($(requestBody).text()), function(response) {
      $(responseBody).text(JSON.stringify(response, null, 2))
    }, function(error) {
      $(responseBody).text(JSON.stringify(error, null, 2))
    })
  })
})

$(function() {
  $('#get-users-uuid button.api-run').click(function(event) {
    let api = $(this).closest('div.api')
    let regionName = $("select.ayla-region option:selected").val()
    let service = $(api).find('span.api-service').text().toLowerCase()
    let server = serviceUrls[regionName][service]
    let token = getAylaRegion(regionName).access_token
    let pathParameters = $(api).find('input.api-path-parameter')
    let responseBody = $(api).find('pre.api-response-body')
    AYLA.getUsersUuid(server, token, $(pathParameters.eq(0)).val(), function(response) {
      $(responseBody).text(JSON.stringify(response, null, 2))
    }, function(error) {
      $(responseBody).text(JSON.stringify(error, null, 2))
    })
  })
})

/*------------------------------------------------------
Utilities
------------------------------------------------------*/

$(function() {
  $('button.api-clear').click(function(event) {
    let content = $(this).closest('div.api-content')
    $(content).find('pre.api-response-body').empty()
  })
})

/*------------------------------------------------------
Login/Logout
------------------------------------------------------*/

function getAylaRegion(name) {return JSON.parse(localStorage.getItem(name))}
function createAylaRegion(name, email, password, appId, appSecret, accessToken, refreshToken) {
  let region = {}
  region.name = name
  region.email = email
  region.password = password
  region.app_id = appId
  region.app_secret = appSecret
  region.access_token = accessToken
  region.refresh_token = refreshToken
  setAylaRegion(region)
}
function setAylaRegion(region) {localStorage.setItem(region.name, JSON.stringify(region))}
function deleteAylaRegion(name) {localStorage.removeItem(name)}

$(function() {
  $('#region-tokens-btn').click(function(event) {
    let regionName = $("select.ayla-region option:selected").val()
    let server = serviceUrls[regionName]['user']
    let region = getAylaRegion(regionName)
    if(region && region.access_token) { // logout
      let user = {}
      user.access_token = region.access_token
      let data = {}
      data.user = user
      AYLA.postUsersSignOut(server, data, function(response) {
        region.access_token = ''
        region.refresh_token = ''
        setAylaRegion(region)
        $('#region-access-token').val('')
        $('#region-refresh-token').val('')
        $('#region-tokens-btn').text('Get Tokens')
        $('#region-tokens-btn').removeClass('btn-warning').addClass('btn-success')  
      }, function(error) {
        console.log(JSON.stringify(error, null, 2))
      })
    } else { // login
      let application = {}
      application.app_id = $('#region-app-id').val()
      application.app_secret = $('#region-app-secret').val()
      let user = {}
      user.email = $('#region-email').val()
      user.password = $('#region-password').val()
      user.application = application
      let data = {}
      data.user = user
      AYLA.postUsersSignIn(server, data, function(response) {
        region = {}
        region.name = $('select.ayla-region option:selected').val()
        region.email = $('#region-email').val()
        region.password = $('#region-password').val()
        region.app_id = $('#region-app-id').val()
        region.app_secret = $('#region-app-secret').val()
        region.access_token = response.data.access_token
        region.refresh_token = response.data.refresh_token
        setAylaRegion(region)
        $('#region-access-token').val(response.data.access_token)
        $('#region-refresh-token').val(response.data.refresh_token)
        $('#region-tokens-btn').text('Expire Tokens')
        $('#region-tokens-btn').removeClass('btn-success').addClass('btn-warning')
      }, function(error) {
        console.log(JSON.stringify(error, null, 2))
      })
    }
  })
})

$(function() {
  $('#region-forget-btn').click(function(event) {
    var regionName = $("select.ayla-region option:selected").val()
    deleteAylaRegion(regionName)
    $('#region-email').val('')
    $('#region-password').val('')
    $('#region-app-id').val('')
    $('#region-app-secret').val('')
    $('#region-access-token').val('')
    $('#region-refresh-token').val('')
    $('#region-tokens-btn').text('Get Tokens')
    $('#region-tokens-btn').removeClass('btn-warning').addClass('btn-success')  
  })
})

/*------------------------------------------------------
Servers
------------------------------------------------------*/

var serviceUrls = new Array()
serviceUrls['cndev'] = new Array()
serviceUrls['cndev']['application'] = "https://application.ayla.com.cn"
serviceUrls['cndev']['datastream'] = "https://stream.ayla.com.cn"
serviceUrls['cndev']['device'] = "https://ads-dev.ayla.com.cn"
serviceUrls['cndev']['factory-proxy'] = "https://api-dev.ayla.com.cn"
serviceUrls['cndev']['image'] = "https://ais.ayla.com.cn"
serviceUrls['cndev']['log'] = "https://log.ayla.com.cn"
serviceUrls['cndev']['notification'] = "https://ans.ayla.com.cn"
serviceUrls['cndev']['rules'] = "https://rulesservice-dev.ayla.com.cn"
serviceUrls['cndev']['user'] = "https://user-dev.ayla.com.cn"
serviceUrls['cndev']['zigbee'] = "https://zigbee.ayla.com.cn"
serviceUrls['cnfield'] = new Array()
serviceUrls['cnfield']['application'] = "https://app-field.ayla.com.cn"
serviceUrls['cnfield']['datastream'] = "https://stream-field.ayla.com.cn"
serviceUrls['cnfield']['device'] = "https://ads-field.ayla.com.cn"
serviceUrls['cnfield']['factory-proxy'] = "https://api-field.ayla.com.cn"
serviceUrls['cnfield']['image'] = "https://ais-field.ayla.com.cn"
serviceUrls['cnfield']['log'] = "https://log-field.ayla.com.cn"
serviceUrls['cnfield']['notification'] = "https://ans-field.ayla.com.cn"
serviceUrls['cnfield']['rules'] = "https://rulesservice-field.ayla.com.cn"
serviceUrls['cnfield']['user'] = "https://user-field.ayla.com.cn"
serviceUrls['cnfield']['zigbee'] = "https://zigbee-field.ayla.com.cn"
serviceUrls['eufield'] = new Array()
serviceUrls['eufield']['application'] = "https://app-field-eu.aylanetworks.com"
serviceUrls['eufield']['datastream'] = "https://stream-field-eu.aylanetworks.com"
serviceUrls['eufield']['device'] = "https://ads-field-eu.aylanetworks.com"
serviceUrls['eufield']['factory-proxy'] = "https://api-field-eu.aylanetworks.com"
serviceUrls['eufield']['image'] = "https://ais-field-eu.aylanetworks.com"
serviceUrls['eufield']['log'] = "https://log-field-eu.aylanetworks.com"
serviceUrls['eufield']['notification'] = "https://ans-field-eu.aylanetworks.com"
serviceUrls['eufield']['rules'] = "https://rulesservice-field-eu.aylanetworks.com"
serviceUrls['eufield']['user'] = "https://user-field-eu.aylanetworks.com"
serviceUrls['eufield']['zigbee'] = "https://zigbee-field-eu.aylanetworks.com"
serviceUrls['usdev'] = new Array()
serviceUrls['usdev']['application'] = "https://application.aylanetworks.com"
serviceUrls['usdev']['datastream'] = "https://stream.aylanetworks.com"
serviceUrls['usdev']['device'] = "https://ads-dev.aylanetworks.com"
serviceUrls['usdev']['factory-proxy'] = "https://api-dev.aylanetworks.com"
serviceUrls['usdev']['image'] = "https://ais.aylanetworks.com"
serviceUrls['usdev']['log'] = "https://log.aylanetworks.com"
serviceUrls['usdev']['notification'] = "https://ans.aylanetworks.com"
serviceUrls['usdev']['rules'] = "https://rulesservice-dev.aylanetworks.com"
serviceUrls['usdev']['user'] = "https://user-dev.aylanetworks.com"
serviceUrls['usdev']['zigbee'] = "https://zigbee.aylanetworks.com"
serviceUrls['usfield'] = new Array()
serviceUrls['usfield']['application'] = "https://app-field.aylanetworks.com"
serviceUrls['usfield']['datastream'] = "https://stream-field.aylanetworks.com"
serviceUrls['usfield']['device'] = "https://ads-field.aylanetworks.com"
serviceUrls['usfield']['factory-proxy'] = "https://api-field.aylanetworks.com"
serviceUrls['usfield']['image'] = "https://ais-field.aylanetworks.com"
serviceUrls['usfield']['log'] = "https://log-field.aylanetworks.com"
serviceUrls['usfield']['notification'] = "https://ans-field.aylanetworks.com"
serviceUrls['usfield']['rules'] = "https://rulesservice-field.aylanetworks.com"
serviceUrls['usfield']['user'] = "https://user-field.aylanetworks.com"
serviceUrls['usfield']['zigbee'] = "https://zigbee-field.aylanetworks.com"

$(function() {
  writeRegionUrls()
  writeSessionInfo()
})

$(function() {
  $("select.ayla-region").change(function () {
    writeRegionUrls()
    writeSessionInfo()
  })
})

function writeRegionUrls() {
  var regionName = $("select.ayla-region option:selected").val()
  $('#application-service-url').text(serviceUrls[regionName]['application'])
  $('#datastream-service-url').text(serviceUrls[regionName]['datastream'])
  $('#device-service-url').text(serviceUrls[regionName]['device'])
  $('#factory-proxy-service-url').text(serviceUrls[regionName]['factory-proxy'])
  $('#image-service-url').text(serviceUrls[regionName]['image'])
  $('#log-service-url').text(serviceUrls[regionName]['log'])
  $('#notification-service-url').text(serviceUrls[regionName]['notification'])
  $('#rules-service-url').text(serviceUrls[regionName]['rules'])
  $('#user-service-url').text(serviceUrls[regionName]['user'])
  $('#zigbee-service-url').text(serviceUrls[regionName]['zigbee'])
}

function writeSessionInfo() {
  let regionName = $("select.ayla-region option:selected").val()
  let region = getAylaRegion(regionName)
  if(region) {
    $('#region-email').val(region.email)
    $('#region-password').val(region.password)
    $('#region-app-id').val(region.app_id)
    $('#region-app-secret').val(region.app_secret)
    $('#region-access-token').val(region.access_token)
    $('#region-refresh-token').val(region.refresh_token)
    if(region.access_token) {
      $('#region-tokens-btn').text('Expire Tokens')
      $('#region-tokens-btn').removeClass('btn-success').addClass('btn-warning')
    } else {
      $('#region-tokens-btn').text('Get Tokens')
      $('#region-tokens-btn').removeClass('btn-warning').addClass('btn-success')
    }
  } else {
    $('#region-email').val('')
    $('#region-password').val('')
    $('#region-app-id').val('')
    $('#region-app-secret').val('')
    $('#region-access-token').val('')
    $('#region-refresh-token').val('')
    $('#region-tokens-btn').text('Get Tokens')
    $('#region-tokens-btn').removeClass('btn-warning').addClass('btn-success')
}
}
