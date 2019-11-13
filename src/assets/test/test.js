/*------------------------------------------------------
On Load
------------------------------------------------------*/

$(function() {
  writeRegionUrls()
  displayAccounts()
})

/*------------------------------------------------------
Axios Functions
------------------------------------------------------*/

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
    .catch(function (error) {AYLA.callErrorCb(error.response, errorCb)})
  },

  getApiv1DevicesDeviceId: function(server, token, devId, successCb=null, errorCb=null) {
    axios({
      method: 'get',
      url: server + '/apiv1/devices/' + devId,
      headers: {
        'Authorization': 'auth_token ' + token,
        'Accept': 'application/json'
      }
    })
    .then(function (response) {AYLA.callSuccessCb(response, successCb)})
    .catch(function (error) {AYLA.callErrorCb(error.response, errorCb)})
  },

  getApiv1DevicesDeviceIdProperties: function(server, token, devId, successCb=null, errorCb=null) {
    axios({
      method: 'get',
      url: server + '/apiv1/devices/' + devId + '/properties',
      headers: {
        'Authorization': 'auth_token ' + token,
        'Accept': 'application/json'
      }
    })
    .then(function (response) {AYLA.callSuccessCb(response, successCb)})
    .catch(function (error) {AYLA.callErrorCb(error.response, errorCb)})
  },

  postApiv1DevicesDeviceIdPropertiesPropertyNameDatapoints: function(server, token, devId, propName, requestData, successCb=null, errorCb=null) {
    axios({
      method: 'post',
      url: server + '/apiv1/devices/' + devId + '/properties/' + propName + '/datapoints',
      headers: {
        'Authorization': 'auth_token ' + token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(requestData)
    })
    .then(function (response) {AYLA.callSuccessCb(response, successCb)})
    .catch(function (error) {AYLA.callErrorCb(error.response, errorCb)})
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
    .catch(function (error) {AYLA.callErrorCb(error.response, errorCb)})
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
    .catch(function (error) {AYLA.callErrorCb(error.response, errorCb)})
  },

  postUsersSignIn: function(server, requestData, successCb=null, errorCb=null) {
    axios({
      method: 'post',
      url: server + '/users/sign_in',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(requestData)
    })
    .then(function (response) {AYLA.callSuccessCb(response, successCb)})
    .catch(function (error) {AYLA.callErrorCb(error.response, errorCb)})
  },

  postUsersSignOut: function(server, requestData, successCb=null, errorCb=null) {
    axios({
      method: 'post',
      url: server + '/users/sign_out',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(requestData)
    })
    .then(function (response) {AYLA.callSuccessCb(response, successCb)})
    .catch(function (error) {AYLA.callErrorCb(error.response, errorCb)})
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
    .catch(function (error) {AYLA.callErrorCb(error.response, errorCb)})
  },

  callSuccessCb: function(response, successCb) {if(successCb) {successCb(response)}},
  callErrorCb: function(response, errorCb) {if(errorCb) {errorCb(response)}}
}

/*------------------------------------------------------
API Run
------------------------------------------------------*/

$(function() {
  $('div.api div.content button.run').click(function(event) {
    let api = $(this).closest('div.api')
    let regionId = $("select.ayla-regions option:selected").val()
    let service = $(api).find('div.content div.service').text().toLowerCase().split(' ')[0]
    let server = serviceUrls[regionId][service]
    let method = $(api).find('div.header div.method').text()
    let url = formatUrl(api)
    let token = getCurrentAccount(getRegions()).access_token
    let requestData = ''
    let requestElement = $(api).find('pre.request-data-element')
    if(requestElement.length) {
      requestData = $(requestElement).text()
    }
    let responseElement = $(api).find('pre.response-data-element')
    let statusCodes = $(api).find('div.status-codes')
    axios({
      method: method,
      url: server + url,
      headers: {
        'Authorization': 'auth_token ' + token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      data: requestData
    })
    .then(function (response) {
      $(responseElement).text(JSON.stringify(response, null, 2))
      setStatus(statusCodes, response.status)
    })
    .catch(function (error) {
      $(responseElement).text(JSON.stringify(error.response, null, 2))
      setStatus(statusCodes, error.response.status)
    })
  })
})

/*------------------------------------------------------
formatUrl
------------------------------------------------------*/

function formatUrl(api) {
  var url = $(api).find('div.header div.url').text()
  let pathParameters = $(api).find('div.path-parameter input.value')
  if(pathParameters) {
    let re = /\{[a-z|A-Z]+\}/g;
    let urlParts = url.split(re).filter(Boolean)
    let i = 0
    url = ''
    for(; i < pathParameters.length; i++) { 
      url = url + urlParts[i] + $(pathParameters.eq(i)).val()
    }
    if((i+1) == urlParts.length) {
      url = url + urlParts[i]
    }
  }
  return url
}

/*------------------------------------------------------
setStatus
------------------------------------------------------*/

function setStatus(statusCodes, status) {
  clearStatus(statusCodes)
  let statusCode = $(statusCodes).children('div.status-code.sc' + status)
  $(statusCode).children('div.code').css('background', 'black').css('color', 'white')
}

/*------------------------------------------------------
clearStatus
------------------------------------------------------*/

function clearStatus(statusCodes) {
  $(statusCodes).find('div.code').css('background', 'transparent').css('color', '#212529')
}

/*------------------------------------------------------
Toggle Request Data Element
------------------------------------------------------*/

$(function() {
  $('div.api button.toggle-request-data-element').click(function(event) {
    let content = $(this).closest('div.content')
    let el = $(content).find('pre.request-data-element')
    if($(el).is(':visible')) {
      $(el).hide()
      $(this).text('Show')
    } else {
      $(el).show()
      $(this).text('Hide')
    }    
  })
})

/*------------------------------------------------------
Toggle Response Data Element
------------------------------------------------------*/

$(function() {
  $('div.api button.toggle-response-data-element').click(function(event) {
    let content = $(this).closest('div.content')
    let el = $(content).find('pre.response-data-element')
    if($(el).is(':visible')) {
      $(el).hide()
      $(this).text('Show')
    } else {
      $(el).show()
      $(this).text('Hide')
    }    
  })
})

/*------------------------------------------------------
Clear Response Element
------------------------------------------------------*/

$(function() {
  $('div.api button.api-clear').click(function(event) {
    let content = $(this).closest('div.content')
    $(content).find('pre.response-data-element').empty()
    clearStatus($(content).find('div.status-codes'))
  })
})

/*------------------------------------------------------
Local Storage
------------------------------------------------------*/

function getRegions() {
  let str = localStorage.getItem('regions')
  if(str) {
    return JSON.parse(str)
  } else {
    let regions = {}
    regions.cndev = []
    regions.cnfield = []
    regions.eufield = []
    regions.usdev = []
    regions.usfield = []
    return regions
  }
}

function setRegions(regions) {localStorage.setItem('regions', JSON.stringify(regions))}

function deleteRegions() {localStorage.removeItem('regions')}

function getCurrentAccount(regions) {
  let regionId = $("select.ayla-regions option:selected").val()
  let region = regions[regionId]
  let accountId = $("select.ayla-accounts option:selected").val()
  if(accountId) {
    for(let i = 0; i < region.length; i++) { 
      if(region[i].uuid == accountId) {
        return region[i]
      }
    }
  }
  let account = {}
  account.account_name = ''
  account.email = ''
  account.password = ''
  account.app_id = ''
  account.app_secret = ''
  account.access_token = ''
  account.refresh_token = ''
  account.uuid = ''
  account.user_id = ''
  return account
}

/*------------------------------------------------------
Create new account with tokens or get/return tokens
------------------------------------------------------*/

$(function() {
  $('#ayla-account-tokens-btn').click(function(event) {
    let regions = getRegions()
    let regionId = $("select.ayla-regions option:selected").val()
    let accountId = $("select.ayla-accounts option:selected").val()
    let server = serviceUrls[regionId]['user']
    let account = {}
    if(accountId != 'add') {account = getCurrentAccount(regions)}
    if(account.access_token) {
      let user = {}
      user.access_token = account.access_token
      let data = {}
      data.user = user
      AYLA.postUsersSignOut(server, data, function(response) {
        account.access_token = ''
        account.refresh_token = ''
        setRegions(regions)
        $('#ayla-account-access-token').val('')
        $('#ayla-account-refresh-token').val('')
        $('#ayla-account-tokens-btn').text('Get Tokens')
        $('#ayla-account-tokens-btn').removeClass('btn-warning').addClass('btn-success')  
      }, function(error) {
        console.log(JSON.stringify(error, null, 2))
      })
    } else {
      account.email = $('#ayla-account-email').val()
      account.password = $('#ayla-account-password').val()
      account.app_id = $('#ayla-account-app-id').val()
      account.app_secret = $('#ayla-account-app-secret').val()

      let application = {}
      application.app_id = account.app_id
      application.app_secret = account.app_secret
      let user = {}
      user.email = account.email
      user.password = account.password
      user.application = application
      let data = {}
      data.user = user

      AYLA.postUsersSignIn(server, data, function(response) {
        account.access_token = response.data.access_token
        account.refresh_token = response.data.refresh_token

        AYLA.getUsersGetUserProfile(server, account.access_token, function(response) {
          account.uuid = response.data.uuid

          AYLA.getUsersUuid(server, account.access_token, account.uuid, function(response) {
            account.user_id = response.data.id
            account.account_name = response.data.origin_oem_name
            if(accountId == 'add') {
              regions[regionId].push(account)
              let option = $('<option/>')
              option.text(account.account_name)
              option.val(account.uuid)
              $("select.ayla-accounts option[value='add']").remove()
              $('select.ayla-accounts').append(option)
              $(option).prop('selected', true)
            }            
            setRegions(regions)
   
            $('#ayla-account-access-token').val(account.access_token)
            $('#ayla-account-refresh-token').val(account.refresh_token)
            $('#ayla-account-uuid').val(account.uuid)
            $('#ayla-account-user-id').val(account.user_id)
            $('#ayla-account-tokens-btn').text('Return Tokens')
            $('#ayla-account-tokens-btn').removeClass('btn-success').addClass('btn-warning')

          }, function(error) {
            console.log(JSON.stringify(error, null, 2))
          })
        }, function(error) {
          console.log(JSON.stringify(error, null, 2))
        })
      }, function(error) {
        console.log(JSON.stringify(error, null, 2))
      })
    }
  })
})

/*------------------------------------------------------
Add Account
------------------------------------------------------*/

$(function() {
  $('#ayla-add-account-btn').click(function(event) {
    if($("select.ayla-accounts option:selected").val() != 'add') {
      addAddAccountOption()
    }
    $('#ayla-account-details').collapse('show')    
  })
})

/*------------------------------------------------------
Add Add Account Option
------------------------------------------------------*/

function addAddAccountOption() {
  var option = $('<option/>')
  option.text('')
  option.val('add')
  $('select.ayla-accounts').append(option)
  $(option).prop('selected', true)
  $(option).hide()
  initAccountForm()
}

/*------------------------------------------------------
Remove Add Account Option
------------------------------------------------------*/

function removeAddAccountOption() {
  $("select.ayla-accounts option[value='add']").remove()
}

/*------------------------------------------------------
Remove Account
------------------------------------------------------*/

$(function() {
  $('#ayla-remove-account-btn').click(function(event) {
    let regions = getRegions()
    let regionId = $("select.ayla-regions option:selected").val()
    let region = regions[regionId]
    let accountId = $("select.ayla-accounts option:selected").val()
    let i = 0
    for(; i < region.length; i++) { 
      if(region[i].uuid == accountId) {
        break;
      }
    }
    region.splice(i, 1)
    setRegions(regions)
    $("select.ayla-accounts option:selected").remove()
    if($("select.ayla-accounts option:selected").val()) {
      let account = getCurrentAccount(getRegions())
      fillAccountForm(account)  
    } else {
      initAccountForm()
    }
  })
})

/*------------------------------------------------------
Region/Service/URL array
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

/*------------------------------------------------------
On Change Region
------------------------------------------------------*/

$(function() {
  $("select.ayla-regions").change(function () {
    writeRegionUrls()
    displayAccounts()
  })
})

/*------------------------------------------------------
writeRegionUrls
------------------------------------------------------*/

function writeRegionUrls() {
  let regionId = $("select.ayla-regions option:selected").val()
  $('#application-service-url').val(serviceUrls[regionId]['application'])
  $('#datastream-service-url').val(serviceUrls[regionId]['datastream'])
  $('#device-service-url').val(serviceUrls[regionId]['device'])
  $('#factory-proxy-service-url').val(serviceUrls[regionId]['factory-proxy'])
  $('#image-service-url').val(serviceUrls[regionId]['image'])
  $('#log-service-url').val(serviceUrls[regionId]['log'])
  $('#notification-service-url').val(serviceUrls[regionId]['notification'])
  $('#rules-service-url').val(serviceUrls[regionId]['rules'])
  $('#user-service-url').val(serviceUrls[regionId]['user'])
  $('#zigbee-service-url').val(serviceUrls[regionId]['zigbee'])
}

/*------------------------------------------------------
displayAccounts
------------------------------------------------------*/

function displayAccounts() {
  let regions = getRegions()
  let regionId = $("select.ayla-regions option:selected").val()
  let region = regions[regionId]
  $('select.ayla-accounts').empty()
  region.forEach(account => {
    var option = $('<option/>')
    option.text(account.account_name)
    option.val(account.uuid)
    $('select.ayla-accounts').append(option)
  })
  if($('select.ayla-accounts option').length) {
    fillAccountForm(region[0])
  } else {
    addAddAccountOption()
    initAccountForm()
  }
}

/*------------------------------------------------------
On Change Account
------------------------------------------------------*/

$(function() {
  $("select.ayla-accounts").change(function () {
    removeAddAccountOption()
    let account = getCurrentAccount(getRegions())
    fillAccountForm(account)
  })
})

/*------------------------------------------------------
fillAccountForm
------------------------------------------------------*/

function fillAccountForm(account) {
  $('#ayla-account-email').val(account.email)
  $('#ayla-account-password').val(account.password)
  $('#ayla-account-app-id').val(account.app_id)
  $('#ayla-account-app-secret').val(account.app_secret)
  $('#ayla-account-access-token').val(account.access_token)
  $('#ayla-account-refresh-token').val(account.refresh_token)
  if(account.access_token) {
    $('#ayla-account-tokens-btn').text('Return Tokens')
    $('#ayla-account-tokens-btn').removeClass('btn-success').addClass('btn-warning')
  } else {
    $('#ayla-account-tokens-btn').text('Get Tokens')
    $('#ayla-account-tokens-btn').removeClass('btn-warning').addClass('btn-success')
  }
  $('#ayla-account-uuid').val(account.uuid)
  $('#ayla-account-user-id').val(account.user_id)
}

/*------------------------------------------------------
initAccountForm
------------------------------------------------------*/

function initAccountForm() {
  $('#ayla-account-email').val('')
  $('#ayla-account-password').val('')
  $('#ayla-account-app-id').val('')
  $('#ayla-account-app-secret').val('')
  $('#ayla-account-access-token').val('')
  $('#ayla-account-refresh-token').val('')
  $('#ayla-account-user-id').val('')
  $('#ayla-account-uuid').val('')
  $('#ayla-account-tokens-btn').text('Get Tokens')
  $('#ayla-account-tokens-btn').removeClass('btn-warning').addClass('btn-success')
}

$(function() {
  $('#test-btn').click(function(event) {
    let url = 'https://ads-dev.aylanetworks.com/apiv1/devices/{devId}/properties/{propName}/datapoints'
    //let arr = url.split('/{(.*?)}/')

    //var re = /\s*(\{[0-9]+\})\s*/g;
    //var splt = "{0} Hello World {1}".split(re).filter(Boolean);
  
    //var re = /\s*(\{[a-z|A-Z]+\})\s*/g;
    //var splt = url.split(re).filter(Boolean);
    //console.log(JSON.stringify(splt, null, 2))

    var re = /\{[a-z|A-Z]+\}/g;
    var urlParts = url.split(re).filter(Boolean);
    console.log(JSON.stringify(urlParts, null, 2))

  })
})

