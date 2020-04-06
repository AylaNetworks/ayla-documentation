/*------------------------------------------------------
Regions / Accounts and Local Storage
------------------------------------------------------*/

var _regions = {}
_regions.cndev = []
_regions.cnfield = []
_regions.eufield = []
_regions.qaalpha = []
_regions.usdev = []
_regions.usfield = []

// On Load
$(function() {
  let s = localStorage.getItem('regions')
  if(s) {
    let tmp = JSON.parse(s)
    if(tmp.hasOwnProperty('cndev')) {_regions.cndev = Array.from(tmp.cndev)}
    if(tmp.hasOwnProperty('cnfield')) {_regions.cnfield = Array.from(tmp.cnfield)}
    if(tmp.hasOwnProperty('eufield')) {_regions.eufield = Array.from(tmp.eufield)}
    if(tmp.hasOwnProperty('qaalpha')) {_regions.qaalpha = Array.from(tmp.qaalpha)}
    if(tmp.hasOwnProperty('usdev')) {_regions.usdev = Array.from(tmp.usdev)}
    if(tmp.hasOwnProperty('usfield')) {_regions.usfield = Array.from(tmp.usfield)}
    _regions = JSON.parse(s)
    $('#persist').val(1)
  }
})

// On Click Persist Yes/No
$(function () {
  $('#persist').click(function (event) {
    if($('#persist option:selected').val()==1) {
      localStorage.setItem('regions', JSON.stringify(_regions))
    } else {
      localStorage.removeItem('regions')
    }
  })
})

function getRegions() {
  return _regions
}

function setRegions(regions) {
  if($('#persist option:selected').val()==1) {
    localStorage.setItem('regions', JSON.stringify(regions))
  }
}

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
On Click button-run
------------------------------------------------------*/

$(function() {
  $("#core-content").delegate("div.api div.content button.run", "click", function(event) {
    let api = $(this).closest('div.api')
    let regionId = $("select.ayla-regions option:selected").val()
    let server = serviceUrls[regionId][$(api).data('service')]
    let method = $(api).find('div.header div.method').text()
    let url = formatUrl(api)
    let accessToken = $('#ayla-account-access-token').val()
    let refreshToken = $('#ayla-account-refresh-token').val()
    let requestData = ''
    let requestElement = $(api).find('pre.request-data-element')
    if(requestElement.length) {
      $(requestElement).find('span.field-text').html('')
      requestData = $(requestElement).text()
      //if(testJson(requestData)) {
      //  let o = JSON.parse(requestData)
      //  requestData = JSON.stringify(o)
      //}
    }
    let responseElement = $(api).find('pre.response-data-element')
    let statusCodes = $(api).find('div.status-codes')
    runApi(method, server, url, accessToken, refreshToken, requestData, responseElement, statusCodes)
  })
})

/*------------------------------------------------------
testJson
------------------------------------------------------*/

function testJson(text) {
  if (typeof text !== "string") {
    return false
  }
  try {
    JSON.parse(text)
    return true
  } catch (error) {
    return false
  }
}

/*------------------------------------------------------
runApi
------------------------------------------------------*/

function runApi(method, server, url, accessToken, refreshToken, requestData, responseElement, statusCodes) {
  axios({
    method: method,
    url: server + url,
    headers: {
      'Authorization': 'auth_token ' + accessToken,
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

    if(error.response.status == '401') {
      let regions = getRegions()
      let account = getCurrentAccount(regions)
      let responseBody = error.response

      if(refreshToken) {
        AYLA.postUsersRefreshToken(server, refreshToken, function(response) {
          $('#ayla-account-access-token').val(response.data.access_token)
          $('#ayla-account-refresh-token').val(response.data.refresh_token)
          account.access_token = response.data.access_token
          account.refresh_token = response.data.refresh_token
          setRegions(regions)
          setAuthUserFields(account)
          runApi(method, server, url, account.access_token, null, requestData, responseElement, statusCodes)
      
        }, function(error) {
          account.access_token = ''
          account.refresh_token = ''
          setRegions(regions)
          displayTokenState()
          let s = JSON.stringify(responseBody, null, 2)
          let t = JSON.stringify(error, null, 2)
          $(responseElement).text(s + '\n'  + t)
          setStatus(statusCodes, responseBody.status)
        })
      } else {
        account.access_token = ''
        account.refresh_token = ''
        setRegions(regions)
        displayTokenState()
        $(responseElement).text(JSON.stringify(responseBody, null, 2))
        setStatus(statusCodes, responseBody.status)
      }

    } else {
      $(responseElement).text(JSON.stringify(error.response, null, 2))
      setStatus(statusCodes, error.response.status)
    }
  })
}

/*------------------------------------------------------
process401
------------------------------------------------------*/

function process401() {
  Console.log('Processing 401')
}

/*------------------------------------------------------
formatUrl
------------------------------------------------------*/

function formatUrl(api) {
  var url = $(api).find('div.header div.url').text()

  let ppInputElements = $(api).find('div.path-parameter input.value')
  if(ppInputElements.length) {
    let re = /\{[a-z|A-Z]+\}/g;
    let urlParts = url.split(re).filter(Boolean)
    let i = 0
    url = ''
    for(; i < ppInputElements.length; i++) { 
      url = url + urlParts[i] + $(ppInputElements.eq(i)).val()
    }
    if((i+1) == urlParts.length) {
      url = url + urlParts[i]
    }
  }

  let count=0
  let qpInputElements = $(api).find('div.query-parameter input.value')
  for(let i = 0; i < qpInputElements.length; i++) {
    let details = $(qpInputElements.eq(i)).data('details')
    let value = $(qpInputElements.eq(i)).val()

    if(value) {
      if(details.type == 'array') {
        let values = value.split(',')
        for(let j=0; j<values.length; j++) {
          url = addQueryParameter(count++, url, details.name, values[j].trim())
        }
      } else {
        value = value.replace(/\%/g, '%25')
        url = addQueryParameter(count++, url, details.name, value)
      }
    }
  }

  let qpSelectElements = $(api).find('div.query-parameter select')
  for(let i = 0; i < qpSelectElements.length; i++) {
    let details = $(qpSelectElements.eq(i)).data('details')
    let value = $(qpSelectElements.eq(i)).val()
    if(value) {
      url = addQueryParameter(count++, url, details.name, value)
    }
  }

  return url
}

/*------------------------------------------------------
addQueryParameter
------------------------------------------------------*/

function addQueryParameter(count, url, name, value) {
  if(count==0) {url = url + '?'}
  else {url = url + '&'}
  url = url + name
  if(value && value.length) {
    url = url + '=' + value.replace(/ /g, '%20')
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
Toggle Request Data Element Visibility
------------------------------------------------------*/

$(function() {
  $("#core-content").delegate("div.api button.toggle-request-data-element", "click", function(event) {
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
Toggle Response Data Element Visibility
------------------------------------------------------*/

$(function() {
  $("#core-content").delegate("div.api button.toggle-response-data-element", "click", function(event) {
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
  $("#core-content").delegate("div.api div.content button.clear", "click", function(event) {
    let content = $(this).closest('div.content')
    $(content).find('pre.response-data-element').empty()
    clearStatus($(content).find('div.status-codes'))
  })
})

/*------------------------------------------------------
setTokenState
------------------------------------------------------*/

function setTokenState(accessToken='', refreshToken='') {
  let regions = getRegions()
  let account = getCurrentAccount(regions)
  account.access_token = accessToken
  account.refresh_token = refreshToken
  setRegions(regions)
}

/*------------------------------------------------------
displayTokenState
------------------------------------------------------*/

function displayTokenState(account=null) {
  if(account) {
    $('#ayla-account-access-token').val(account.access_token)
    $('#ayla-account-refresh-token').val(account.refresh_token)
    $('#ayla-account-tokens-btn').text('Return Tokens')
    $('#ayla-account-tokens-btn').removeClass('btn-success').addClass('btn-warning')
    setAuthUserFields(account)
    populateDevices()
  } else {
    $('#ayla-account-access-token').val('')
    $('#ayla-account-refresh-token').val('')
    $('#ayla-account-tokens-btn').text('Get Tokens')
    $('#ayla-account-tokens-btn').removeClass('btn-warning').addClass('btn-success')
    setAuthUserFields()
    clearDevicesPropertiesValue()
  }
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
        displayTokenState()
      }, function(error) {
        console.log(JSON.stringify(error, null, 2))
      })

    // Get tokens.
    } else {
      account.email = $('#ayla-account-email').val()
      account.password = $('#ayla-account-password').val()
      let aid = $('#ayla-account-app-id').val()
      if(aid) {account.app_id = aid}
      else {account.app_id = 'alya-api-browser-id'}
      let asecret = $('#ayla-account-app-secret').val()
      if(asecret) {account.app_secret = asecret}
      else {account.app_secret = 'alya-api-browser-2tFsUL41FELUlyfrSMEZ4kNKwJg'}
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

        // Account already exists in local storage.
        account.access_token = response.data.access_token
        account.refresh_token = response.data.refresh_token
        if(accountId != 'add') {
          setRegions(regions)
          displayTokenState(account)
          return
        }

        // Account does not already exist in local storage.
        AYLA.getUsersGetUserProfile(server, account.access_token, function(response) {
          account.uuid = response.data.uuid

          AYLA.getUsersUuid(server, account.access_token, account.uuid, function(response) {
            account.user_id = response.data.id
            account.account_name = response.data.origin_oem_name
            regions[regionId].push(account)
            let option = $('<option/>')
            option.text(account.account_name)
            option.val(account.uuid)
            $("select.ayla-accounts option[value='add']").remove()
            $('select.ayla-accounts').append(option)
            $(option).prop('selected', true)
            $('#ayla-account-uuid').val(account.uuid)
            $('#ayla-account-user-id').val(account.user_id)
            setRegions(regions)
            setUserFields(account)
            displayTokenState(account)
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
  fillAccountForm()
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
      fillAccountForm()
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
serviceUrls['cndev']['datastream-cloud'] = "wss://stream.ayla.com.cn/stream"
serviceUrls['cndev']['datastream-mobile'] = "wss://mstream-dev.ayla.com.cn/stream"
serviceUrls['cndev']['datastream2'] = ""
serviceUrls['cndev']['device'] = "https://ads-dev.ayla.com.cn"
serviceUrls['cndev']['factory-proxy'] = "https://api-dev.ayla.com.cn"
serviceUrls['cndev']['iot-command-center'] = ""
serviceUrls['cndev']['image'] = "https://ais.ayla.com.cn"
serviceUrls['cndev']['log'] = "https://log.ayla.com.cn"
serviceUrls['cndev']['notification'] = "https://ans.ayla.com.cn"
serviceUrls['cndev']['rules'] = "https://rulesservice-dev.ayla.com.cn"
serviceUrls['cndev']['user'] = "https://user-dev.ayla.com.cn"
serviceUrls['cndev']['zigbee'] = "https://zigbee.ayla.com.cn"
serviceUrls['cndev']['api-documentation'] = "https://docs.aylanetworks.com"
serviceUrls['cnfield'] = new Array()
serviceUrls['cnfield']['application'] = "https://app-field.ayla.com.cn"
serviceUrls['cnfield']['datastream'] = "https://stream-field.ayla.com.cn"
serviceUrls['cnfield']['datastream-cloud'] = "wss://stream-field.ayla.com.cn/stream"
serviceUrls['cnfield']['datastream-mobile'] = "wss://mstream-field.ayla.com.cn/stream"
serviceUrls['cnfield']['datastream2'] = ""
serviceUrls['cnfield']['device'] = "https://ads-field.ayla.com.cn"
serviceUrls['cnfield']['factory-proxy'] = "https://api-field.ayla.com.cn"
serviceUrls['cnfield']['iot-command-center'] = ""
serviceUrls['cnfield']['image'] = "https://ais-field.ayla.com.cn"
serviceUrls['cnfield']['log'] = "https://log-field.ayla.com.cn"
serviceUrls['cnfield']['notification'] = "https://ans-field.ayla.com.cn"
serviceUrls['cnfield']['rules'] = "https://rulesservice-field.ayla.com.cn"
serviceUrls['cnfield']['user'] = "https://user-field.ayla.com.cn"
serviceUrls['cnfield']['zigbee'] = "https://zigbee-field.ayla.com.cn"
serviceUrls['cnfield']['api-documentation'] = "https://docs.aylanetworks.com"
serviceUrls['eufield'] = new Array()
serviceUrls['eufield']['application'] = "https://app-field-eu.aylanetworks.com"
serviceUrls['eufield']['datastream'] = "https://stream-field-eu.aylanetworks.com"
serviceUrls['eufield']['datastream-cloud'] = "wss://stream-field-eu.aylanetworks.com/stream"
serviceUrls['eufield']['datastream-mobile'] = "wss://mstream-field-eu.aylanetworks.com/stream"
serviceUrls['eufield']['datastream2'] = ""
serviceUrls['eufield']['device'] = "https://ads-field-eu.aylanetworks.com"
serviceUrls['eufield']['factory-proxy'] = "https://api-field-eu.aylanetworks.com"
serviceUrls['eufield']['iot-command-center'] = ""
serviceUrls['eufield']['image'] = "https://ais-field-eu.aylanetworks.com"
serviceUrls['eufield']['log'] = "https://log-field-eu.aylanetworks.com"
serviceUrls['eufield']['notification'] = "https://ans-field-eu.aylanetworks.com"
serviceUrls['eufield']['rules'] = "https://rulesservice-field-eu.aylanetworks.com"
serviceUrls['eufield']['user'] = "https://user-field-eu.aylanetworks.com"
serviceUrls['eufield']['zigbee'] = "https://zigbee-field-eu.aylanetworks.com"
serviceUrls['eufield']['api-documentation'] = "https://docs.aylanetworks.com"
serviceUrls['qaalpha'] = new Array()
serviceUrls['qaalpha']['application'] = ""
serviceUrls['qaalpha']['datastream'] = "https://stream-qa-alpha.aylanev.com"
serviceUrls['qaalpha']['datastream-cloud'] = ""
serviceUrls['qaalpha']['datastream-mobile'] = ""
serviceUrls['qaalpha']['datastream2'] = ""
serviceUrls['qaalpha']['device'] = "https://ads-qa-alpha.ayladev.com/apiv1"
serviceUrls['qaalpha']['factory-proxy'] = ""
serviceUrls['qaalpha']['iot-command-center'] = "https://icc-qa-alpha.aylanev.com"
serviceUrls['qaalpha']['image'] = "https://ais-qa-alpha.aylanev.com"
serviceUrls['qaalpha']['log'] = "https://log-qa-alpha.aylanev.com"
serviceUrls['qaalpha']['notification'] = ""
serviceUrls['qaalpha']['rules'] = "https://rules-qa-alpha.aylanev.com"
serviceUrls['qaalpha']['user'] = "https://user-qa-alpha.ayladev.com"
serviceUrls['qaalpha']['zigbee'] = ""
serviceUrls['qaalpha']['api-documentation'] = "https://docs.aylanetworks.com"
serviceUrls['usdev'] = new Array()
serviceUrls['usdev']['application'] = "https://application.aylanetworks.com"
serviceUrls['usdev']['datastream'] = "https://stream.aylanetworks.com"
serviceUrls['usdev']['datastream-cloud'] = "wss://stream.aylanetworks.com/stream"
serviceUrls['usdev']['datastream-mobile'] = "wss://mstream-dev.aylanetworks.com/stream"
serviceUrls['usdev']['datastream2'] = "https://ams-usdv.aylanetworks.com"
serviceUrls['usdev']['device'] = "https://ads-dev.aylanetworks.com"
serviceUrls['usdev']['factory-proxy'] = "https://api-dev.aylanetworks.com"
serviceUrls['usdev']['iot-command-center'] = "https://icc-dev.aylanetworks.com"
serviceUrls['usdev']['image'] = "https://ais.aylanetworks.com"
serviceUrls['usdev']['log'] = "https://log.aylanetworks.com"
serviceUrls['usdev']['notification'] = "https://ans.aylanetworks.com"
serviceUrls['usdev']['rules'] = "https://rulesservice-dev.aylanetworks.com"
serviceUrls['usdev']['user'] = "https://user-dev.aylanetworks.com"
serviceUrls['usdev']['zigbee'] = "https://zigbee.aylanetworks.com"
serviceUrls['usdev']['api-documentation'] = "https://docs.aylanetworks.com"
serviceUrls['usfield'] = new Array()
serviceUrls['usfield']['application'] = "https://app-field.aylanetworks.com"
serviceUrls['usfield']['datastream'] = "https://stream-field.aylanetworks.com"
serviceUrls['usfield']['datastream-cloud'] = "wss://stream-field.aylanetworks.com/stream"
serviceUrls['usfield']['datastream-mobile'] = "wss://mstream-field.aylanetworks.com/stream"
serviceUrls['usfield']['datastream2'] = ""
serviceUrls['usfield']['device'] = "https://ads-field.aylanetworks.com"
serviceUrls['usfield']['factory-proxy'] = "https://api-field.aylanetworks.com"
serviceUrls['usfield']['iot-command-center'] = "https://icc-field.aylanetworks.com"
serviceUrls['usfield']['image'] = "https://ais-field.aylanetworks.com"
serviceUrls['usfield']['log'] = "https://log-field.aylanetworks.com"
serviceUrls['usfield']['notification'] = "https://ans-field.aylanetworks.com"
serviceUrls['usfield']['rules'] = "https://rulesservice-field.aylanetworks.com"
serviceUrls['usfield']['user'] = "https://user-field.aylanetworks.com"
serviceUrls['usfield']['zigbee'] = "https://zigbee-field.aylanetworks.com"
serviceUrls['usfield']['api-documentation'] = "https://docs.aylanetworks.com"

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
  //$('#application-service-url').val(serviceUrls[regionId]['application'])
  $('#datastream-service-url').val(serviceUrls[regionId]['datastream'])
  $('#datastream-cloud-url').val(serviceUrls[regionId]['datastream-cloud'])
  $('#datastream-mobile-url').val(serviceUrls[regionId]['datastream-mobile'])
  $('#datastream2-service-url').val(serviceUrls[regionId]['datastream2'])
  $('#device-service-url').val(serviceUrls[regionId]['device'])
  $('#factory-proxy-service-url').val(serviceUrls[regionId]['factory-proxy'])
  $('#icc-service-url').val(serviceUrls[regionId]['iot-command-center'])
  //$('#image-service-url').val(serviceUrls[regionId]['image'])
  //$('#log-service-url').val(serviceUrls[regionId]['log'])
  //$('#notification-service-url').val(serviceUrls[regionId]['notification'])
  $('#rules-service-url').val(serviceUrls[regionId]['rules'])
  $('#user-service-url').val(serviceUrls[regionId]['user'])
  //$('#zigbee-service-url').val(serviceUrls[regionId]['zigbee'])
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
    fillAccountForm()
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

function fillAccountForm(account=null) {
  if(account) {
    $('#ayla-account-email').val(account.email)
    $('#ayla-account-password').val(account.password)
    $('#ayla-account-app-id').val(account.app_id)
    $('#ayla-account-app-secret').val(account.app_secret)
    $('#ayla-account-uuid').val(account.uuid)
    $('#ayla-account-user-id').val(account.user_id)
    setUserFields(account)
    if(account.access_token) {displayTokenState(account)}
    else {displayTokenState()}
  } else {
    $('#ayla-account-email').val('')
    $('#ayla-account-password').val('')
    $('#ayla-account-app-id').val('')
    $('#ayla-account-app-secret').val('')
    $('#ayla-account-user-id').val('')
    $('#ayla-account-uuid').val('')
    setUserFields()
    displayTokenState()  
  }
}

/*------------------------------------------------------
setUserFields
------------------------------------------------------*/

function setUserFields(account=null) {
  if(account) {
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
  } else {
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
}

/*------------------------------------------------------
setAuthUserFields
------------------------------------------------------*/

function setAuthUserFields(account=null) {
  if(account) {
    let idInputs = $('div.path-parameter input[placeholder = "userId"]')
    for(let i=0; i < idInputs.length; i++) { 
      $(idInputs.eq(i)).val(account.user_id)
    }
    let uuidInputs = $('div.path-parameter input[placeholder = "uuid"]')
    for(let i=0; i < uuidInputs.length; i++) { 
      $(uuidInputs.eq(i)).val(account.uuid)
    }
    let userUuidInputs = $('div.query-parameter input[placeholder = "user_uuid"]')
    for(let i=0; i < userUuidInputs.length; i++) { 
      $(userUuidInputs.eq(i)).val(account.uuid)
    }
    let accessTokenSpans = $('pre.request-data-element span.access-token')
    for(let i=0; i < accessTokenSpans.length; i++) { 
      $(accessTokenSpans.eq(i)).text(account.access_token)
    }
    let refreshTokenSpans = $('pre.request-data-element span.refresh-token')
    for(let i=0; i < refreshTokenSpans.length; i++) { 
      $(refreshTokenSpans.eq(i)).text(account.refresh_token)
    }
  } else {
    let idInputs = $('div.path-parameter input[placeholder = "userId"]')
    for(let i=0; i < idInputs.length; i++) { 
      $(idInputs.eq(i)).val('')
    }
    let uuidInputs = $('div.path-parameter input[placeholder = "uuid"]')
    for(let i=0; i < uuidInputs.length; i++) { 
      $(uuidInputs.eq(i)).val('')
    }
    let userUuidInputs = $('div.query-parameter input[placeholder = "user_uuid"]')
    for(let i=0; i < userUuidInputs.length; i++) { 
      $(userUuidInputs.eq(i)).val('')
    }
    let accessTokenSpans = $('pre.request-data-element span.access-token')
    for(let i=0; i < accessTokenSpans.length; i++) { 
      $(accessTokenSpans.eq(i)).text('')
    }  
    let refreshTokenSpans = $('pre.request-data-element span.refresh-token')
    for(let i=0; i < refreshTokenSpans.length; i++) { 
      $(refreshTokenSpans.eq(i)).text('')
    }
  }
}

/*------------------------------------------------------
setDeviceFields
------------------------------------------------------*/

function setDeviceFields(device=null) {
  if(device) {
    let devIdInputs = $('div.path-parameter input[placeholder = "devId"]')
    for(let i=0; i < devIdInputs.length; i++) { 
      $(devIdInputs.eq(i)).val(device.key)
    }
    let dsnInputs = $('div.api input[placeholder = "dsn"]')
    for(let i=0; i < dsnInputs.length; i++) { 
      $(dsnInputs.eq(i)).val(device.dsn)
    }
    let devIdSpans = $('pre.request-data-element span.dev-id')
    for(let i=0; i < devIdSpans.length; i++) { 
      $(devIdSpans.eq(i)).text(device.key)
    }
    let dsnSpans = $('pre.request-data-element span.dsn')
    for(let i=0; i < dsnSpans.length; i++) { 
      $(dsnSpans.eq(i)).text(device.dsn)
    }  
    let modelSpans = $('pre.request-data-element span.model')
    for(let i=0; i < modelSpans.length; i++) { 
      $(modelSpans.eq(i)).text(device.model)
    }  
  } else {
    let devIdInputs = $('div.path-parameter input[placeholder = "devId"]')
    for(let i=0; i < devIdInputs.length; i++) { 
      $(devIdInputs.eq(i)).val('')
    }
    let dsnInputs = $('div.path-parameter input[placeholder = "dsn"]')
    for(let i=0; i < dsnInputs.length; i++) { 
      $(dsnInputs.eq(i)).val('')
    }
    let devIdSpans = $('pre.request-data-element span.dev-id')
    for(let i=0; i < devIdSpans.length; i++) { 
      $(devIdSpans.eq(i)).text('')
    }
    let dsnSpans = $('pre.request-data-element span.dsn')
    for(let i=0; i < dsnSpans.length; i++) { 
      $(dsnSpans.eq(i)).text('')
    }
    let modelSpans = $('pre.request-data-element span.model')
    for(let i=0; i < modelSpans.length; i++) { 
      $(modelSpans.eq(i)).text('')
    }  
  }
}

/*------------------------------------------------------
setPropertyFields
------------------------------------------------------*/

function setPropertyFields(property=null) {
  if(property) {
    let propNameInputs = $('div.path-parameter input[placeholder = "propName"]')
    for(let i=0; i < propNameInputs.length; i++) { 
      $(propNameInputs.eq(i)).val(property.name)
    }
    let propNameSpans = $('pre.request-data-element span.prop-name')
    for(let i=0; i < propNameSpans.length; i++) { 
      $(propNameSpans.eq(i)).text(property.name)
    }
  } else {
    let propNameInputs = $('div.path-parameter input[placeholder = "propName"]')
    for(let i=0; i < propNameInputs.length; i++) { 
      $(propNameInputs.eq(i)).val('')
    }
    let propNameSpans = $('pre.request-data-element span.prop-name')
    for(let i=0; i < propNameSpans.length; i++) { 
      $(propNameSpans.eq(i)).text('')
    }
  }
}

/*------------------------------------------------------
Functions related to collapse or toggling state
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

$(function () {
  $("#accounts-button").click(function (event) {
    $('#accounts-section').toggle()
  })
})

$(function () {
  $("#devices-button").click(function (event) {
    $('#devices-section').toggle()
  })
})

$(function () {
  $("#streams-button").click(function (event) {
    $('#event-streams-section').toggle()
  })
})

$(function () {
  $("#events-button").click(function (event) {
    $('#events-section').toggle()
  })
})

$(function () {
  $("#filter-button").click(function (event) {
    $('#filter-section').toggle()
  })
})

$(function () {
  $("#stats-button").click(function (event) {
    $('#stats-section').toggle()
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
  let accessToken = $('#ayla-account-access-token').val()
  let uuid = $('#ayla-account-uuid').val()
  AYLA.getApiv1Devices(server, accessToken, uuid, function(response) {
    removeDevices()
    if(response.data.devices.length) {
      addDevices(response.data.devices)
      populateDevice(response.data.devices[0].device.key)
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
  setDeviceFields()
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
  setPropertyFields()
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
      //console.log(JSON.stringify(response.data, null, 2))
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
      //console.log(JSON.stringify(response.data, null, 2))
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
buildApi
------------------------------------------------------*/

function buildApi(apiElement, api, collapsed=true) {

  let serviceName = api.service.name.toLowerCase().replace(/ /g, "-")

  let collapseId = api.method.name + api.path
  .replace(/\//g, '-')
  .replace(/\./g, '-')
  .replace(/\_/g, '-')
  .replace(/\{/g, '')
  .replace(/\}/g, '')
  .replace(/\:/g, '')
  .toLowerCase()

  let header = $('<div class="header" data-toggle="collapse" href="' + '#' + collapseId + '">')
  if(collapsed) {$(header).addClass('collapsed')}

  header.append(''
    + '<div class="row align-items-center no-gutters">'
    + '<div class="col-12 col-md-auto method">' + api.method.name.toUpperCase() + '</div>'
    + '<div class="col-12 col-md url">' + api.path + '</div>'
    + '<div class="col-12 col-md-auto name">' + api.name + ' (id=' + api.id + ')' + '</div>'
    + '</div>'
  )

  let content = $('<div class="content collapse" id="' + collapseId + '">')
  if(!collapsed) {$(content).addClass('show')}

  content.append(''
    + '<div class="form-row">'
    + '<div class="col description">' + api.description + '</div>'
    + '<div class="col-auto refresh">' + '<img src="/assets/images/refresh.png" width="20" height="16">' + '</div>'
    + '</div>'
  )

  if(api.pathParameters.length || api.queryParameters.length || api.requestData.length) {
    content.append('<div class="heading">Request</div>')
    if(api.requestDescription) {content.append('<div class="request-description">' + api.requestDescription + '</div>')}

    if(api.pathParameters.length) {
      content.append('<div class="subheading">Path Parameters</div>')
      if(api.pathParametersDescription) {content.append('<div class="path-parameters-description">' + api.pathParametersDescription + '</div>')}
      for(let i=0; i < api.pathParameters.length; i++) { 
        content.append(createPathParameter(api.pathParameters[i]))
      }
    }

    if(api.queryParameters.length) {
      content.append('<div class="subheading">Query Parameters</div>')
      if(api.queryParametersDescription) {content.append('<div class="query-parameters-description">' + api.queryParametersDescription + '</div>')}
      for(let i=0; i < api.queryParameters.length; i++) { 
        content.append(createQueryParameter(api.queryParameters[i]))
      }
    }

    if(api.requestData.length) {
      content.append('<div class="subheading">Request Data</div>')
      if(api.requestDataDescription) {content.append('<div class="request-data-description">' + api.requestDataDescription + '</div>')}
      content.append(''
        + '<div class="btn-group">'
        + '<button type="button" class="btn btn-outline-secondary btn-sm toggle-request-data-element">Hide</button>'
        + '<button type="button" class="btn btn-outline-secondary btn-sm">Reset</button>'
        + '</div>'
        + '<pre class="request-data-element" contenteditable="true">' + JSON.stringify(JSON.parse(api.requestData), null, 2) + '</pre>'
      )
    }
  }

  content.append(''
    + '<div class="form-row">'
    + '<div class="col-12">'
    + '<button type="button" class="btn btn-danger btn-sm run">Run</button>'
    + '</div>'
    + '</div>'
  )

  content.append('<div class="heading">Response</div>')
  if(api.responseDescription) {content.append('<div class="response-description">' + api.responseDescription + '</div>')}

  if(api.statusCodes) {
    content.append('<div class="subheading">Status Codes</div>')
    if(api.statusCodesDescription) {content.append('<div class="status-codes-description">' + api.statusCodesDescription + '</div>')}
    let sc = $('<div class="status-codes">')
    for(let i=0; i < api.statusCodes.length; i++) {
      sc.append(createStatusCode(api.statusCodes[i]))
    }
    content.append(sc)
  }

  content.append('<div class="subheading">Response Data</div>')

  content.append(''
    + '<div class="btn-group">'
    + '<button type="button" class="btn btn-outline-secondary btn-sm toggle-response-data-element">Show</button>'
    + '<button type="button" class="btn btn-outline-secondary btn-sm clear">Clear</button>'
    + '</div>'
    + '<pre class="response-data-element" style="display:none;"></pre>'
  )
  if(api.responseDataDescription) {content.append('<div class="response-data-description">' + api.responseDataDescription + '</div>')}

  if(api.notes) {
    content.append('<div class="heading">Notes</div>')
    content.append('<div class="notes">' + api.notes + '</div>')
  }

  $(apiElement).empty()
  $(apiElement).removeClass()
  $(apiElement).addClass('api')
  $(apiElement).addClass(api.method.name)

  if(!api.tags.length) {
    console.log('No tags on id=' + api.id + ', name=' + api.name)
  } else {
    for(let i=0; i<api.tags.length; i++) {
      let tagClass = 'tag-' + api.tags[i].id
      let tagShowClass = 'tag-show-' + api.tags[i].id
      $(apiElement).addClass(tagClass)
      $(apiElement).addClass(tagShowClass)
    }
  }

  $(apiElement).data('id', api.id)
  $(apiElement).data('service', serviceName)
  apiElement.append(header)
  apiElement.append(content)
  return apiElement
}

/*------------------------------------------------------
renderApi
------------------------------------------------------*/

function renderApi(api) {

  let apiElement = $('<div/>')
  buildApi(apiElement, api)
  let serviceName = api.service.name.toLowerCase().replace(/ /g, "-")
  let serviceContentElement = $('#' + serviceName + '-content')
  $(serviceContentElement).append(apiElement)
  let count = $(serviceContentElement).children('div.api').length
  $('#' + serviceName + '-header').find('input.count').val(count)
}

/*------------------------------------------------------
Refresh API
------------------------------------------------------*/

$(function() {
  $("#core-content").delegate("div.api div.content div.refresh img", "click", function(event) {
    let apiElement = $(this).closest('div.api')
    let apiId = $(apiElement).data('id')
    DOCS.getApi(apiId, function (response) {
      console.log(JSON.stringify(response.data, null, 2))
      buildApi(apiElement, response.data, false)
    }, function (error) {
      console.log(JSON.stringify(error, null, 2))
    })    
  })
})

/*------------------------------------------------------
createPathParameter
------------------------------------------------------*/

function createPathParameter(pathParameter) {
  return ''
  + '<div class="form-row path-parameter">'
  + '<div class="col-12 col-lg-3">'
  + '<input type="text" class="form-control form-control-sm value" placeholder="' + pathParameter.name + '">'
  + '</div>'
  + '<div class="col-12 col-lg-9">'
  + '<div>'
  + '<span class="name">' + pathParameter.name + '</span>. '
  + '<span  class="text">' + (pathParameter.customText ? pathParameter.customText : pathParameter.baseText) + '</span>'
  + '</div>'
  + '</div>'
  + '</div>'
}

/*------------------------------------------------------
createQueryParameter
------------------------------------------------------*/

function createQueryParameter(queryParameter) {
  let element = ''
  if(queryParameter.choices && queryParameter.choices.length) {
    element = $('<select class="form-control form-control-sm"></select>')
    let choices = queryParameter.choices.split(',')
    for(let i=0; i<choices.length; i++) {
      let option = $('<option/>')
      option.text(choices[i])
      element.append(option)
    }
  } else {
    element = $('<input type="text" class="form-control form-control-sm value" placeholder="' + queryParameter.name + '">')
  }
  element.data('details', queryParameter)

  let elementCol = $('<div class="col-12 col-lg-3">')
  elementCol.append(element)
  let row = $('<div class="form-row query-parameter">')
  row.append(elementCol)
  row.append(''
    + '<div class="col-12 col-lg-9">'
    + '<div>'
    + '<span class="name">' + queryParameter.name + '</span>. '
    + '<span  class="text">' + (queryParameter.customText ? queryParameter.customText : queryParameter.baseText) + '</span>'
    + '</div>'
    + '</div>'
  )
  return row
}

/*------------------------------------------------------
createStatusCode
------------------------------------------------------*/

function createStatusCode(sc) {
  return ''
  + '<div class="form-row status-code sc' + sc.code + '">'
  + '<div class="col-1 code">' + sc.code + '</div>'
  + '<div class="col-11 text">' + (sc.customText ? sc.customText : sc.baseText) + '</div>'
  + '</div>'
}

/*------------------------------------------------------
On Load
------------------------------------------------------*/

$(function() {
  $('h1.api-service div.api-service input.count').val(0)

  writeRegionUrls()

  DOCS.getPublishedApis(function(response) {
    for(let i = 0; i < response.data.length; i++) {
      renderApi(response.data[i])
    }
    displayAccounts()
  }, function(error) {
    console.log(error)
  })

  DOCS.getTags(function(response) {
    let tags = response.data
    let row = $('#filter-section div.tag-row')
    let cols = $(row).children('div')
    let tagsPerCol = Math.floor(tags.length/cols.length)
    let remainder = tags.length%cols.length

    let t=0
    for(let i=0; i<cols.length; i++) {
      let r = 0
      if(remainder > 0) {
        r = 1
        remainder--
      }
      for(let j=0; j<tagsPerCol+r; j++) {
        let input = $('<input class="form-check-input" type="checkbox" value="' + tags[t].id + '" checked>')
        let label = $('<label class="form-check-label">' + tags[t].name + '</label>')
        let div = $('<div class="form-check">')
        div.append(input)
        div.append(label)
        cols.eq(i).append(div)
        t++
      }
    }

  }, function(error) {console.log(error)})
})

/*------------------------------------------------------
Testing Mouseover Fields
------------------------------------------------------*/

$(function() {
  $('#core-content').delegate('pre div.field', 'mouseover', function(event) {
    let name = $(this).data('field-name')
    let text = $(this).children('span')
    DOCS.getFieldByName(name, function(response) {
      $(text).html(response.data)
    }, function(error) {console.log(error)})
  })

  // This does not always remove the text inside the span, so I remove all on click run.
  $('#core-content').delegate('pre div.field', 'mouseout', function(event) {
    let text = $(this).children('span')
    $(text).html('')
  })
})

/*------------------------------------------------------
Tags
------------------------------------------------------*/

$(function() {
  $('#filter-section input:radio').bind('change', function() {
    if($(this).val() == 'all') {
      let checkboxes = $('#filter-section input:checkbox')
      $(checkboxes).prop('checked', true)
      for(let i=0; i<checkboxes.length; i++) {
        let tagClass = 'tag-' + $(checkboxes.eq(i)).val()
        let tagShowClass = 'tag-show-' + $(checkboxes.eq(i)).val()
        $('div.api.' + tagClass).addClass(tagShowClass).show()
      }
      let apiServiceHeaders = $('h1.api-service')
      for(let i=0; i<apiServiceHeaders.length; i++) {
        let apiServiceContent = $(apiServiceHeaders.eq(i)).next('div')
        let count = $(apiServiceContent).children('div.api:not([style*="display: none"])').length
        $(apiServiceHeaders.eq(i)).find('input.count').val(count)
      }
    } else {
      $('#filter-section input:checkbox').prop('checked', false)
      $('div.api').removeClass(function (index, className) {return (className.match (/(^|\s)tag-show-\S+/g) || []).join(' ')})
      $('div.api').hide()
      let apiServiceHeaders = $('h1.api-service')
      for(let i=0; i<apiServiceHeaders.length; i++) {
        $(apiServiceHeaders.eq(i)).find('input.count').val(0)
      }
    }
  })
})

$(function() {
  $('#filter-section div.tag-row').delegate('input:checkbox', 'change', function(event) {
    $('#filter-section input:radio').prop("checked", false)
    let tagClass = 'tag-' + $(this).val()
    let tagShowClass = 'tag-show-' + $(this).val()
    if($(this).prop('checked')) {
      $('div.api.' + tagClass).addClass(tagShowClass).show()
    } else {
      $('div.api.' + tagClass).removeClass(tagShowClass)
      $('div.api:not([class*=" tag-show-"])').hide()
    }
    let apiServiceHeaders = $('h1.api-service')
    for(let i=0; i<apiServiceHeaders.length; i++) {
      let apiServiceContent = $(apiServiceHeaders.eq(i)).next('div')
      let count = $(apiServiceContent).children('div.api:not([style*="display: none"])').length
      $(apiServiceHeaders.eq(i)).find('input.count').val(count)
    }
  })
})

$(function() {
  $('div.api-service div.count').click(function(event) {
    let content = $(this).closest('h1.api-service').next('div')
    console.log('Clicked on service counter')
  })
})

/*------------------------------------------------------
On Click Stream Btn
------------------------------------------------------*/

$(function () {
  $("#stream-btn").click(function (event) {

    let key = $('#stream-key').val()
    for(var k in streams) {
      if(k === key) {
        console.log('This stream key is already in use.')
        return
      }
    }

    let name = $('#stream-name').val()
    if(!name) {
      name = $('#stream-name').prop('placeholder')
    }

    let seqStart = $('#stream-seq-start').val()
    let seqEnd = $('#stream-seq-end').val()

    let regionId = $("select.ayla-regions option:selected").val()
    let server = serviceUrls[regionId]['datastream-cloud']
  
    streams[key] = new Stream(name, server, key, 'unknown', seqStart, seqEnd)
    monitorEventStream(streams[key])
    addEventStream(streams[key])  

    $('#stream-key').val('')
    $('#stream-name').val('')
    $('#stream-seq-start').val('')
    $('#stream-seq-end').val('')
  })
})

/*------------------------------------------------------
addEventStream
------------------------------------------------------*/

function addEventStream(stream) {
  let item = ''
  + '<tr id="ID' + stream.key + '" class="summary">'
  + '<td class="chk"><input type="checkbox" value="' + stream.key + '"></td>'
  + '<td>' + stream.id + '</td>'
  + '<td class="name">' + stream.name + '</td>'
  + '<td class="numEvents">0</td>'
  + '<td class="numHBs">0</td>'
  + '</tr>'
  + '<tr class="details" style="display:none;">'
  + '<td>&nbsp;</td>'
  + '<td colspan=4><pre>s</pre></td>'
  + '</tr>'
  $('#streams-table > tbody').append(item)
}

/*------------------------------------------------------
Delete Event Streams
------------------------------------------------------*/

$(function() {
  $('#delete-streams-btn').click(function(event) {
    let checkboxes = $('#streams-table tbody tr td input[type=checkbox]:checked')
    $('#streams-table thead input[type=checkbox]').prop('checked', false)
    $.each(checkboxes, function(index, checkbox) {
      let key = $(checkbox).val()
      streams[key].socket.close()
      delete streams[key]
      let tr1 = $(checkbox).closest('tr')
      let tr2 = $(tr1).next()
      $(tr1).remove()
      $(tr2).remove()    
    })
  })
})

/*------------------------------------------------------
Toggle Event Stream Details 
------------------------------------------------------*/

$(function() {
  $("#streams-table").delegate('tr td:not(.chk)', "click", function(e) {
    let tr1 = $(this).parent()
    let tr2 = $(tr1).next()
    let key = $(tr1).find('input').val()
    let pre = $(tr2).find('pre')
    $(pre).empty()
    $(pre).append(JSON.stringify(streams[key], streamPropFilter, 2))
    $(tr2).toggle()  
  })
})
