'use strict'

var controllers = require('./controllers')

module.exports = function(app) {

  app.route('/api/v1/devices')
    .get(controllers.getDevices)

  app.route('/api/v1/devices/:deviceId')
    .get(controllers.getDevice)
    .put(controllers.updateDevice)
    .delete(controllers.deleteDevice)

  app.route('/api/v1/devices/:deviceId/properties')
    .get(controllers.getProperties)

  app.route('/api/v1/dss/accessrules')
    .get(controllers.getAccessRules)
    .post(controllers.createAccessRule)

  app.route('/api/v1/dss/accessrules/:accessRuleId')
    .get(controllers.getAccessRule)
    .delete(controllers.deleteAccessRule)

  app.route('/api/v1/dss/subscriptions')
    .get(controllers.getSubscriptions)
    .post(controllers.createSubscription)

  app.route('/api/v1/dss/subscriptions/:subscriptionId')
    .get(controllers.getSubscription)
    .delete(controllers.deleteSubscription)

  app.route('/api/v1/properties/:propertyId')
    .get(controllers.getProperty)

  app.route('/api/v1/properties/:propertyId/datapoints')
    .post(controllers.createDatapoint)

  app.route('/api/v1/session')
    .post(controllers.login)
    .delete(controllers.logout)
}
