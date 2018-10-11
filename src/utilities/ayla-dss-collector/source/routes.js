'use strict';

var controllers = require('./controllers');

module.exports = function(app) {

  app.route('/dss/session')
    .post(controllers.login)
    .delete(controllers.logout);

  app.route('/dss/eventstreams')
    .get(controllers.getEventStreams)
    .post(controllers.createEventStream);

  app.route('/dss/eventstreams/:streamId')
    .get(controllers.getEventStream)
    .patch(controllers.modifyEventStream)
    .delete(controllers.deleteEventStream);
};
