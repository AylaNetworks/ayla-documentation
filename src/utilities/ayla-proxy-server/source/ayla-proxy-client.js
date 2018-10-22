var AylaProxyClient = {

/*------------------------------------------------------
createDatapoint

Request
{
  "datapoint": {
    "value": "1",
    "metadata": {
      "key1": "",
      "key2": ""
    }
  }
}

Response
{
  "datapoint": {
    "updated_at": "2018-10-04T12:56:57Z",
    "created_at": "2018-10-04T12:56:57Z",
    "echo": false,
    "metadata": {
      "key1": "",
      "key2": ""
    },
    "value": 1
  }
}
------------------------------------------------------*/

createDatapoint: function(propertyId, value, authToken, success=successCb, failure=failureCb) {
  let data = {
    'datapoint': {
      'value': value,
      'metadata': {
        'key1': '',
        'key2': ''
      }
    }
  }
  axios({
    method: 'post',
    url: 'https://docs.aylanetworks.com/api/v1/properties/' + propertyId + '/datapoints',
    headers: {
      'Authorization': 'auth_token ' + authToken,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    data: JSON.stringify(data)
  })
  .then(function (response) {success(response.data)})
  .catch(function (error) {failure(error.response.status, error.response.statusText)})
},

/*------------------------------------------------------
dssCreateSubscription

Request
{
  "oem_model": "*",
  "client_type": "mobile",
  "subscription_type": "datapoint",
  "property_name": "*"
}

Response
{
  "subscription": {
    "id": 149818,
    "oem": "0dfc7900",
    "dsn": "AC000W000340779,AC000W005606115",
    "name": null,
    "description": null,
    "property_name": "*",
    "connection_status": "Offline",
    "batch_size": 1,
    "is_suspended": false,
    "created_at": "2018-10-04T13:04:32Z",
    "updated_at": "2018-10-04T13:04:32Z",
    "date_suspended": null,
    "user_uuid": "40e45b84-690c-11e8-acf3-12f911dcfe40",
    "oem_model": "*",
    "stream_key": "234af7d24c996857b09a9637ebece795",
    "client_type": "mobile",
    "subscription_type": "datapoint"
  }
}
------------------------------------------------------*/

dssCreateSubscription: function(data, authToken, success=successCb, failure=failureCb) {
  axios({
    method: 'post',
    url: 'https://docs.aylanetworks.com/api/v1/dss/subscriptions',
    headers: {
      'Authorization': 'auth_token ' + authToken,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    data: JSON.stringify(data)
  })
  .then(function (response) {success(response.data)})
  .catch(function (error) {failure(error.response.status, error.response.statusText)})
},

/*------------------------------------------------------
dssDeleteConnection

Request

Response
------------------------------------------------------*/

dssDeleteConnection: function(url, streamKey, success=successCb, failure=failureCb) {
  let data = {
    'url': url,
    'streamkey': streamKey
  }
  axios({
    method: 'delete',
    url: 'https://docs.aylanetworks.com/api/v1/dss/streams',
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(data)
  })
  .then(function (response) {success({})})
  .catch(function (error) {failure(error.response.status, error.response.statusText)})
},

/*------------------------------------------------------
dssDeleteSubscription

Request

Response
------------------------------------------------------*/

dssDeleteSubscription: function(subscriptionId, authToken, success=successCb, failure=failureCb) {
  axios({
    method: 'delete',
    url: 'https://docs.aylanetworks.com/api/v1/dss/subscriptions/' + subscriptionId,
    headers: {
      'Authorization': 'auth_token ' + authToken,
      'Accept': 'application/json'
    }
  })
  .then(function (response) {success(response.data)})
  .catch(function (error) {failure(error.response.status, error.response.statusText)})
},

/*------------------------------------------------------
dssGetSubscription

Request

Response
------------------------------------------------------*/

dssGetSubscription: function(subscriptionId, authToken, success=successCb, failure=failureCb) {
}

/*------------------------------------------------------
dssGetSubscriptions

Request

Response
------------------------------------------------------*/

dssGetSubscriptions: function(authToken, success=successCb, failure=failureCb) {
  axios({
    method: 'get',
    url: 'https://docs.aylanetworks.com/api/v1/dss/subscriptions',
    headers: {
      'Authorization': 'auth_token ' + authToken,
      'Accept': 'application/json'
    }
  })
  .then(function (response) {success(response.data)})
  .catch(function (error) {failure(error.response.status, error.response.statusText)})
},

/*------------------------------------------------------
getDevice

Request

Response
{
  "device": {
    "id": 204134,
    "product_name": "Ayla EVB - By Suitcase",
    "model": "AY001MTC1",
    "dsn": "AC000W000340779",
    "oem": "0dfc7900",
    "oem_model": "ledevb",
    "unique_hardware_id": null,
    "sw_version": "bc 2.6-beta 01/11/17 19:25:17 ID b163df1",
    "user_id": 2362432,
    "user_uuid": "40e45b84-690c-11e8-acf3-12f911dcfe40",
    "template_id": 7615,
    "mac": "60f189dcd936",
    "ip": "67.255.234.73",
    "lan_ip": "192.168.1.8",
    "ssid": "Thorndike",
    "connected_at": "2018-10-01T18:41:56Z",
    "key": 204134,
    "product_class": "demo",
    "has_properties": true,
    "lan_enabled": true,
    "enable_ssl": null,
    "ans_enabled": true,
    "ans_server": "ans.aylanetworks.com",
    "log_enabled": false,
    "registered": true,
    "connection_status": "Offline",
    "registration_type": "AP-Mode",
    "lat": "44.556049",
    "lng": "-69.270047",
    "locality": "04986",
    "homekit": null,
    "module_updated_at": "2018-08-01T16:35:50Z",
    "registrable": true,
    "regtoken": "46dee8",
    "setup_token": "8DCB43D2",
    "provisional": false,
    "device_type": "Wifi",
    "activated_at": "2018-06-06T19:07:23Z",
    "created_at": "2016-07-14T17:41:57Z",
    "last_get_at": "2018-10-01T18:41:56Z"
  }
}
------------------------------------------------------*/

getDevice: function(deviceId, authToken, success=successCb, failure=failureCb) {
  axios({
    method: 'get',
    url: 'https://docs.aylanetworks.com/api/v1/devices/' + deviceId,
    headers: {
      'Authorization': 'auth_token ' + authToken,
      'Accept': 'application/json'
    }
  })
  .then(function (response) {success(response.data)})
  .catch(function (error) {failure(error.response.status, error.response.statusText)})
},

/*------------------------------------------------------
getDevices

Request

Response
[
  {
    "device": {
      "product_name": "Ayla EVB - By Suitcase",
      "model": "AY001MTC1",
      "dsn": "AC000W000340779",
      "oem_model": "ledevb",
      "sw_version": "bc 2.6-beta 01/11/17 19:25:17 ID b163df1",
      "template_id": 7615,
      "mac": "60f189dcd936",
      "unique_hardware_id": null,
      "lan_ip": "192.168.1.8",
      "connected_at": "2018-10-01T18:41:56Z",
      "key": 204134,
      "lan_enabled": true,
      "has_properties": true,
      "product_class": "demo",
      "connection_status": "Offline",
      "lat": "44.556049",
      "lng": "-69.270047",
      "locality": "04986",
      "device_type": "Wifi"
    }
  },
    {
      "device": {
      "product_name": "Raspberry Pi 001",
      "model": "AY001MRT1",
      "dsn": "AC000W005606115",
      "oem_model": "linuxevb",
      "sw_version": "devd 1.5.2-eng 2018-09-12 06:14:36 /",
      "template_id": 27079,
      "mac": "b8:27:eb:2a:d1:66",
      "unique_hardware_id": null,
      "hwsig": "00000000752ad166",
      "lan_ip": "192.168.1.7",
      "connected_at": "2018-09-24T08:18:42Z",
      "key": 5286408,
      "lan_enabled": true,
      "has_properties": true,
      "product_class": null,
      "connection_status": "Offline",
      "lat": "44.56",
      "lng": "-69.27",
      "locality": "04986",
      "device_type": "Wifi"
    }
  }
]
------------------------------------------------------*/

getDevices: function(authToken, success=successCb, failure=failureCb) {
  axios({
    method: 'get',
    url: 'https://docs.aylanetworks.com/api/v1/devices',
    headers: {
      'Authorization': 'auth_token ' + authToken,
      'Accept': 'application/json'
    }
  })
  .then(function (response) {success(response.data)})
  .catch(function (error) {failure(error.response.status, error.response.statusText)})
},

/*------------------------------------------------------
getProperties

Request

Response
[
  {
    "property": {
      "type": "Property",
      "name": "Blue_button",
      "base_type": "boolean",
      "read_only": true,
      "direction": "output",
      "scope": "user",
      "data_updated_at": "2018-10-01T18:41:57Z",
      "key": 13772623,
      "device_key": 204134,
      "product_name": "Ayla EVB - By Suitcase",
      "track_only_changes": false,
      "display_name": "Blue_button",
      "host_sw_version": false,
      "time_series": false,
      "derived": false,
      "app_type": null,
      "recipe": null,
      "value": 0,
      "denied_roles": [],
      "ack_enabled": false,
      "retention_days": 30
    }
  },
  {
    "property": {
      "type": "Property",
      "name": "Blue_LED",
      "base_type": "boolean",
      "read_only": false,
      "direction": "input",
      "scope": "user",
      "data_updated_at": "2018-10-01T15:37:47Z",
      "key": 13700155,
      "device_key": 204134,
      "product_name": "Ayla EVB - By Suitcase",
      "track_only_changes": false,
      "display_name": "Blue LED",
      "host_sw_version": false,
      "time_series": false,
      "derived": false,
      "app_type": null,
      "recipe": null,
      "value": 0,
      "denied_roles": [
        {
          "id": 5306,
          "operation": "write",
          "role": "OEM::company::admin",
          "oem_id": "0dfc7900"
        }
      ],
      "ack_enabled": false,
      "retention_days": 30,
      "ack_status": null,
      "ack_message": null,
      "acked_at": null
    }
  }
]
------------------------------------------------------*/

getProperties: function(deviceId, authToken, success=successCb, failure=failureCb) {
  axios({
    method: 'get',
    url: 'https://docs.aylanetworks.com/api/v1/devices/' + deviceId + '/properties',
    headers: {
      'Authorization': 'auth_token ' + authToken,
      'Accept': 'application/json'
    }
  })
  .then(function (response) {success(response.data)})
  .catch(function (error) {failure(error.response.status, error.response.statusText)})
},

/*------------------------------------------------------
getProperty

Request

Response
{
  "property": {
    "type": "Property",
    "name": "Blue_LED",
    "base_type": "boolean",
    "read_only": false,
    "direction": "input",
    "scope": "user",
    "data_updated_at": "2018-10-01T15:37:47Z",
    "key": 13700155,
    "device_key": 204134,
    "product_name": "Ayla EVB - By Suitcase",
    "track_only_changes": false,
    "display_name": "Blue LED",
    "host_sw_version": false,
    "time_series": false,
    "derived": false,
    "app_type": null,
    "recipe": null,
    "value": 0,
    "denied_roles": [
      {
        "id": 5306,
        "operation": "write",
        "role": "OEM::company::admin",
        "oem_id": "0dfc7900"
      }
    ],
    "ack_enabled": false,
    "retention_days": 30
  }
}
------------------------------------------------------*/

getProperty: function(authToken, success=successCb, failure=failureCb) {
},

/*------------------------------------------------------
login

Request
{
  "user": {
    "email": "sarah@acme.com",
    "password": "abc123",
    "application": {
      "app_id": "alya-api-browser-id",
      "app_secret": "alya-api-browser-2tFsUL41FELUlyfrSMEZ4kNKwJg"
    }
  }
}

Response
{
  "access_token": "47396b33114a4e3a9b8d3a9ee46112fe",
  "refresh_token": "26588d47fe5f44a0b0353ac5e16414ea",
  "expires_in": 86400,
  "role": "EndUser",
  "role_tags": []
}
------------------------------------------------------*/

login: function(email, password, appId, appSecret, success=successCb, failure=failureCb) {
  var data = {
    'user': {
      'email': email,
      'password': password,
      'application': {
        'app_id': appId,
        'app_secret': appSecret
      }
    }
  }
  axios({
    method: 'post',
    url: 'https://docs.aylanetworks.com/api/v1/session',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    data: JSON.stringify(data)
  })
  .then(function (response) {success(response.data)})
  .catch(function (error) {failure(error.response.status, error.response.statusText)})
},

/*------------------------------------------------------
logout

Request
{
  "user": {
    "access_token": "47396b33114a4e3a9b8d3a9ee46112fe"
  }
}

Response
{
  "logout": true
}
------------------------------------------------------*/

logout: function(authToken, success=successCb, failure=failureCb) {
  var data = {'user': {'access_token': authToken}}
  axios({
    method: 'delete',
    url: 'https://docs.aylanetworks.com/api/v1/session',
    headers: {
      'Authorization': 'auth_token ' + authToken,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    data: JSON.stringify(data)
  })
  .then(function (response) {success(response.data)})
  .catch(function (error) {failure(error.response.status, error.response.statusText)})
}

};

/*------------------------------------------------------

------------------------------------------------------*/

let successCb = function(data) {console.log(JSON.stringify(data, null, 2))}
let failureCb = function(statusCode, statusText) {console.log(statusCode + ' ' + statusText)}
