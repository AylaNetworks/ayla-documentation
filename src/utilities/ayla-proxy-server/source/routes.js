'use strict'

var controllers = require('./controllers')

module.exports = function(app) {

  app.route('/api/v1/devices')
    .get(controllers.getDevices)

  app.route('/api/v1/devices/:deviceId')
    .get(controllers.getDevice)

  app.route('/api/v1/devices/:deviceId/properties')
    .get(controllers.getProperties)

  app.route('/api/v1/properties/:propertyId')
    .get(controllers.getProperty)

  app.route('/api/v1/properties/:propertyId/datapoints')
    .post(controllers.createDatapoint)

  app.route('/api/v1/session')
    .post(controllers.login)
    .delete(controllers.logout)

  app.route('/api/v1/dss/subscriptions')
    .get(controllers.dssGetSubscriptions)
    .post(controllers.dssCreateSubscription)

  app.route('/api/v1/dss/subscriptions/:subscriptionId')
    .get(controllers.dssGetSubscription)
    .delete(controllers.dssDeleteSubscription)
}
