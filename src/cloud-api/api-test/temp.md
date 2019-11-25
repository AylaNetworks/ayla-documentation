var AYLA = {
  getApiv1Devices: function(server, accessToken, refreshToken, successCb=null, errorCb=null) {
    axios({
      method: 'get',
      url: server + '/apiv1/devices',
      headers: {
        'Authorization': 'auth_token ' + accessToken,
        'Accept': 'application/json'
      }
    })
    .then(function(response) {AYLA.callSuccessCb(response, successCb)})
    .catch(function(error) {
      if(error.response.status == '401') {
        let regions = getRegions()
        let account = getCurrentAccount(regions)

        if(refreshToken) {
          let user = {}
          user.refresh_token = refreshToken
          let data = {}
          data.user = user
        
          AYLA.postUsersRefreshToken(server, data, function(response) {
            account.access_token = response.data.access_token
            account.refresh_token = response.data.refresh_token
            setRegions(regions)
        
            $('#ayla-account-access-token').val(account.access_token)
            $('#ayla-account-refresh-token').val(account.refresh_token)
            setAuthUserFields(account)
            AYLA.getApiv1Devices(server, account.access_token, null, successCb, errorCb)
  
          }, function(error) {
            account.access_token = ''
            account.refresh_token = ''
            setRegions(regions)
            displayTokenState()
            console.log(JSON.stringify(error, null, 2))
          })
        } else {
          account.access_token = ''
          account.refresh_token = ''
          setRegions(regions)
          displayTokenState()
          console.log(JSON.stringify(error, null, 2))
      }

      } else {
        AYLA.callErrorCb(error.response, errorCb)
      }
    })
  },