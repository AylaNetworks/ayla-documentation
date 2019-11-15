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
    .then(function(response) {AYLA.callSuccessCb(response, successCb)})
    .catch(function(error) {AYLA.callErrorCb(error.response, errorCb)})
  },

  getApiv1DevicesDevId: function(server, token, devId, successCb=null, errorCb=null) {
    axios({
      method: 'get',
      url: server + '/apiv1/devices/' + devId,
      headers: {
        'Authorization': 'auth_token ' + token,
        'Accept': 'application/json'
      }
    })
    .then(function(response) {AYLA.callSuccessCb(response, successCb)})
    .catch(function(error) {AYLA.callErrorCb(error.response, errorCb)})
  },

  getApiv1DevicesDevIdProperties: function(server, token, devId, successCb=null, errorCb=null) {
    axios({
      method: 'get',
      url: server + '/apiv1/devices/' + devId + '/properties',
      headers: {
        'Authorization': 'auth_token ' + token,
        'Accept': 'application/json'
      }
    })
    .then(function(response) {AYLA.callSuccessCb(response, successCb)})
    .catch(function(error) {AYLA.callErrorCb(error.response, errorCb)})
  },

  getApiv1DevicesDevIdPropertiesPropName: function(server, token, devId, propName, successCb=null, errorCb=null) {
    axios({
      method: 'get',
      url: server + '/apiv1/devices/' + devId + '/properties/' + propName,
      headers: {
        'Authorization': 'auth_token ' + token,
        'Accept': 'application/json'
      }
    })
    .then(function(response) {AYLA.callSuccessCb(response, successCb)})
    .catch(function(error) {AYLA.callErrorCb(error.response, errorCb)})
  },

  postApiv1DevicesDevIdPropertiesPropertyNameDatapoints: function(server, token, devId, propName, requestData, successCb=null, errorCb=null) {
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
    .then(function(response) {AYLA.callSuccessCb(response, successCb)})
    .catch(function(error) {AYLA.callErrorCb(error.response, errorCb)})
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
    .then(function(response) {AYLA.callSuccessCb(response, successCb)})
    .catch(function(error) {AYLA.callErrorCb(error.response, errorCb)})
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
    .then(function(response) {AYLA.callSuccessCb(response, successCb)})
    .catch(function(error) {AYLA.callErrorCb(error.response, errorCb)})
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
    .then(function(response) {AYLA.callSuccessCb(response, successCb)})
    .catch(function(error) {AYLA.callErrorCb(error.response, errorCb)})
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
    .then(function(response) {AYLA.callSuccessCb(response, successCb)})
    .catch(function(error) {AYLA.callErrorCb(error.response, errorCb)})
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
    .then(function(response) {AYLA.callSuccessCb(response, successCb)})
    .catch(function(error) {AYLA.callErrorCb(error.response, errorCb)})
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
    .then(function(response) {
      $(responseElement).text(JSON.stringify(response, null, 2))
      setStatus(statusCodes, response.status)
    })
    .catch(function(error) {
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
  $('div.api div.content button.clear').click(function(event) {
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

    // Return tokens.
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
        clearAuthUserFields()
        clearDevicesPropertiesValue()
      }, function(error) {
        console.log(JSON.stringify(error, null, 2))
      })

    // Get tokens.
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
              setUserFields(account)
              $('#ayla-account-uuid').val(account.uuid)
              $('#ayla-account-user-id').val(account.user_id)
            }            
            setRegions(regions)
   
            $('#ayla-account-access-token').val(account.access_token)
            $('#ayla-account-refresh-token').val(account.refresh_token)
            $('#ayla-account-tokens-btn').text('Return Tokens')
            $('#ayla-account-tokens-btn').removeClass('btn-success').addClass('btn-warning')
            setAuthUserFields(account)
            populateDevices()

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
    //$('#ayla-account-details').collapse('show')    
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
  $("select.ayla-regions").change(function() {
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
  $("select.ayla-accounts").change(function() {
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
  $('#ayla-account-uuid').val(account.uuid)
  $('#ayla-account-user-id').val(account.user_id)
  setUserFields(account)
  if(account.access_token) {
    $('#ayla-account-tokens-btn').text('Return Tokens')
    $('#ayla-account-tokens-btn').removeClass('btn-success').addClass('btn-warning')
    setAuthUserFields(account)
    populateDevices()
  } else {
    $('#ayla-account-tokens-btn').text('Get Tokens')
    $('#ayla-account-tokens-btn').removeClass('btn-warning').addClass('btn-success')
    clearAuthUserFields()
  }
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

/*------------------------------------------------------
setUserFields / clearUserFields
------------------------------------------------------*/

function setUserFields(account) {
  let emailSpans = $('pre.request-data-element span.email')
  for(let i=0; i < emailSpans.length; i++) { 
    $(emailSpans.eq(i)).text(account.email)
  }
  let appIdSpans = $('pre.request-data-element span.app-id')
  for(let i=0; i < appIdSpans.length; i++) { 
    $(appIdSpans.eq(i)).text(account.app_id)
  }
  let appSecretSpans = $('pre.request-data-element span.app-secret')
  for(let i=0; i < appSecretSpans.length; i++) { 
    $(appSecretSpans.eq(i)).text(account.app_secret)
  }
}

function clearUserFields() {
  let emailSpans = $('pre.request-data-element span.email')
  for(let i=0; i < emailSpans.length; i++) { 
    $(emailSpans.eq(i)).text('')
  }
  let appIdSpans = $('pre.request-data-element span.app-id')
  for(let i=0; i < appIdSpans.length; i++) { 
    $(appIdSpans.eq(i)).text('')
  }
  let appSecretSpans = $('pre.request-data-element span.app-secret')
  for(let i=0; i < appSecretSpans.length; i++) { 
    $(appSecretSpans.eq(i)).text('')
  }
}

/*------------------------------------------------------
setAuthUserFields / clearAuthUserFields
------------------------------------------------------*/

function setAuthUserFields(account) {
  let uuidInputs = $('div.path-parameter input[placeholder = "uuid"]')
  for(let i=0; i < uuidInputs.length; i++) { 
    $(uuidInputs.eq(i)).val(account.uuid)
  }
  let accessTokenSpans = $('pre.request-data-element span.access-token')
  for(let i=0; i < accessTokenSpans.length; i++) { 
    $(accessTokenSpans.eq(i)).text(account.access_token)
  }
}

function clearAuthUserFields() {
  let uuidInputs = $('div.path-parameter input[placeholder = "uuid"]')
  for(let i=0; i < uuidInputs.length; i++) { 
    $(uuidInputs.eq(i)).val('')
  }
  let accessTokenSpans = $('pre.request-data-element span.access-token')
  for(let i=0; i < accessTokenSpans.length; i++) { 
    $(accessTokenSpans.eq(i)).text('')
  }
}

/*------------------------------------------------------
setDeviceFields / clearDeviceFields
------------------------------------------------------*/

function setDeviceFields(device) {
  let devIdInputs = $('div.path-parameter input[placeholder = "devId"]')
  for(let i=0; i < devIdInputs.length; i++) { 
    $(devIdInputs.eq(i)).val(device.key)
  }
  let dsnInputs = $('div.path-parameter input[placeholder = "dsn"]')
  for(let i=0; i < dsnInputs.length; i++) { 
    $(dsnInputs.eq(i)).val(device.dsn)
  }
}

function clearDeviceFields() {
  let devIdInputs = $('div.path-parameter input[placeholder = "devId"]')
  for(let i=0; i < devIdInputs.length; i++) { 
    $(devIdInputs.eq(i)).val('')
  }
  let dsnInputs = $('div.path-parameter input[placeholder = "dsn"]')
  for(let i=0; i < dsnInputs.length; i++) { 
    $(dsnInputs.eq(i)).val('')
  }
}

/*------------------------------------------------------
setPropertyFields / clearPropertyFields
------------------------------------------------------*/

function setPropertyFields(property) {
  let propNameInputs = $('div.path-parameter input[placeholder = "propName"]')
  for(let i=0; i < propNameInputs.length; i++) { 
    $(propNameInputs.eq(i)).val(property.name)
  }
}

function clearPropertyFields() {
  let propNameInputs = $('div.path-parameter input[placeholder = "propName"]')
  for(let i=0; i < propNameInputs.length; i++) { 
    $(propNameInputs.eq(i)).val('')
  }
}

/*------------------------------------------------------
Functions related to collapse
------------------------------------------------------*/

$(function() {
  $('#ayla-region-urls').on('show.bs.collapse', function() {
    $('#ayla-account-details').collapse('hide')
  })
})

$(function() {
  $('#ayla-account-details').on('show.bs.collapse', function() {
    $('#ayla-region-urls').collapse('hide')
  })
})

$(function() {
  $('#dt-device-details').on('show.bs.collapse', function() {
    $('#dt-property-details').collapse('hide')
  })
})

$(function() {
  $('#dt-property-details').on('show.bs.collapse', function() {
    $('#dt-device-details').collapse('hide')
  })
})

/*------------------------------------------------------
clearDevicesPropertiesValue
------------------------------------------------------*/

function clearDevicesPropertiesValue() {
  removeDevices()
  removeProperties()
  removeValue()
}

/*------------------------------------------------------
populateDevices
------------------------------------------------------*/

function populateDevices() {
  let regionId = $("select.ayla-regions option:selected").val()
  let server = serviceUrls[regionId]['device']
  let token = getCurrentAccount(getRegions()).access_token
  AYLA.getApiv1Devices(server, token, function(response) {
    removeDevices()
    if(response.data.length) {
      addDevices(response.data)
      populateDevice(response.data[0].device.key)
    }
  }, function(response) {
    console.log(JSON.stringify(response, null, 2))
  })
}

/*------------------------------------------------------
addDevices
------------------------------------------------------*/

function addDevices(devices) {
  devices.forEach(function(data) {
    addDevice(data.device)
  })
}

/*------------------------------------------------------
addDevice
------------------------------------------------------*/

function addDevice(device) {
  var option = $('<option/>')
  option.text(device.product_name)
  option.val(device.key)
  $('#dt-device-selector').append(option)
}

/*------------------------------------------------------
removeDevices
------------------------------------------------------*/

function removeDevices() {
  $('#dt-device-selector').empty()
  $('#dt-device-details').text('')
  clearDeviceFields()
}

/*------------------------------------------------------
On Change Device
------------------------------------------------------*/

$(function() {
  $( "#dt-device-selector" ).change(function() {
    let devId = $('#dt-device-selector option:selected').val()
    populateDevice(devId)
  })
})

/*------------------------------------------------------
populateDevice
------------------------------------------------------*/

function populateDevice(devId) {
  let regionId = $("select.ayla-regions option:selected").val()
  let server = serviceUrls[regionId]['device']
  let token = getCurrentAccount(getRegions()).access_token
  AYLA.getApiv1DevicesDevId(server, token, devId, function(response) {
    let option = $('#dt-device-selector option:selected')
    $(option).text(response.data.device.product_name)
    $(option).data('details', response.data.device)
    $('#dt-device-details').text(JSON.stringify(response.data.device, null, 2))
    setDeviceFields(response.data.device)
  }, function(response) {
    console.log(JSON.stringify(response, null, 2))
  })
  populateProperties(devId)
}

/*------------------------------------------------------
populateProperties
------------------------------------------------------*/

function populateProperties(devId) {
  let regionId = $("select.ayla-regions option:selected").val()
  let server = serviceUrls[regionId]['device']
  let token = getCurrentAccount(getRegions()).access_token
  AYLA.getApiv1DevicesDevIdProperties(server, token, devId, function(response) {
    removeProperties()
    if(response.data.length) {
      addProperties(response.data)
      populateProperty(devId, response.data[0].property.name)
    }
  }, function(response) {
    console.log(JSON.stringify(response, null, 2))
  })
}

/*------------------------------------------------------
addProperties
------------------------------------------------------*/

function addProperties(properties) {
  properties.forEach(function(wrapper) {
    addProperty(wrapper.property)
  })
}

/*------------------------------------------------------
addProperty
------------------------------------------------------*/

function addProperty(property) {
  var option = $('<option/>')
  option.text(property.display_name)
  option.val(property.name)
  $('#dt-property-selector').append(option)
}

/*------------------------------------------------------
removeProperties
------------------------------------------------------*/

function removeProperties() {
  $('#dt-property-selector').empty()
  $('#dt-property-details').text('')
  clearPropertyFields()
}

/*------------------------------------------------------
On Change Property
------------------------------------------------------*/

$(function() {
  $( "#dt-property-selector" ).change(function() {
    let devId = $('#dt-device-selector option:selected').val()
    let propName = $('#dt-property-selector option:selected').val()
    populateProperty(devId, propName)
  })
})

/*------------------------------------------------------
populateProperty
------------------------------------------------------*/

function populateProperty(devId, propName) {
  let regionId = $("select.ayla-regions option:selected").val()
  let server = serviceUrls[regionId]['device']
  let token = getCurrentAccount(getRegions()).access_token
  AYLA.getApiv1DevicesDevIdPropertiesPropName(server, token, devId, propName, function(response) {
    let option = $('#dt-property-selector option:selected')
    $(option).text(response.data.property.name)
    $(option).data('details', response.data.property)
    $('#dt-property-details').text(JSON.stringify(response.data.property, null, 2))
    displayPropertyValue(
      response.data.property.base_type, 
      response.data.property.value, 
      response.data.property.direction)
      setPropertyFields(response.data.property)
    }, function(response) {
    console.log(JSON.stringify(response, null, 2))
  })
}

/*------------------------------------------------------
displayPropertyValue
------------------------------------------------------*/

function displayPropertyValue(type, value, direction) {
  let status = (direction==='input') ? '>' : ' disabled>'

  switch(type) {
    case 'boolean':
    $('#dt-value-button-wrapper').hide()

    let checked = (value===1) ? ' checked' : ''

    $('#dt-value-wrapper').empty().append(''
      + '<label class="switch" style="margin-bottom:0;">'
      + '<input id="property-value" type="checkbox" value="' + value + '"' + checked + status
      + '<span class="slider round"></span>'
      + '</label>')
    break

    default:
    $('#dt-value-wrapper').empty().append('<input id="property-value" type="text" class="form-control form-control-sm" value="' + value + '"' + status)
    if(direction==='input') {
      $('#dt-value-button-wrapper').show()
    } else {
      $('#dt-value-button-wrapper').hide()
    }
    break
  }
}

/*------------------------------------------------------
On Change Datapoint (for boolean properties)
On Click Datapoint (for non-boolean properties)
------------------------------------------------------*/

$(function() {
  $('#dt-value-wrapper').delegate('input:checkbox', "change", function(event) {
    let regionId = $("select.ayla-regions option:selected").val()
    let server = serviceUrls[regionId]['device']
    let token = getCurrentAccount(getRegions()).access_token
    let devId = $('#dt-device-selector option:selected').val()
    let propName = $('#dt-property-selector option:selected').val()
    let value = $(this).prop('checked') + 0
    let datapoint = {}
    datapoint.value = value
    let requestData = {}
    requestData.datapoint = datapoint
    AYLA.postApiv1DevicesDevIdPropertiesPropertyNameDatapoints(server, token, devId, propName, requestData, function(response) {
      console.log(JSON.stringify(response.data, null, 2))
    }, function(response) {
      console.log(JSON.stringify(response, null, 2))
    })
  })
})

$(function() {
  $('#dt-save-value-btn').click(function(event) {
    let regionId = $("select.ayla-regions option:selected").val()
    let server = serviceUrls[regionId]['device']
    let token = getCurrentAccount(getRegions()).access_token
    let devId = $('#dt-device-selector option:selected').val()
    let propName = $('#dt-property-selector option:selected').val()
    let value = $('#dt-value-wrapper input').val()
    let datapoint = {}
    datapoint.value = value
    let requestData = {}
    requestData.datapoint = datapoint
    AYLA.postApiv1DevicesDevIdPropertiesPropertyNameDatapoints(server, token, devId, propName, requestData, function(response) {
      console.log(JSON.stringify(response.data, null, 2))
    }, function(response) {
      console.log(JSON.stringify(response, null, 2))
    })
  })
})

/*------------------------------------------------------
removeValue
------------------------------------------------------*/

function removeValue() {
  $('#dt-value-wrapper').empty().append('<input type="text" class="form-control form-control-sm" disabled>')
  $('#dt-value-button-wrapper').hide()
}

/*------------------------------------------------------
On Click test-btn
------------------------------------------------------*/

$(function() {
  $('#test-btn').click(function(event) {
  })
})
