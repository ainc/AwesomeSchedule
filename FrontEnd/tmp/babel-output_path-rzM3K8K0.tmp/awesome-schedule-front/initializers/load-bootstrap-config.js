define('awesome-schedule-front/initializers/load-bootstrap-config', ['exports', 'awesome-schedule-front/config/environment', 'ember-bootstrap/config'], function (exports, _awesomeScheduleFrontConfigEnvironment, _emberBootstrapConfig) {
  exports.initialize = initialize;

  function initialize() /* container, application */{
    _emberBootstrapConfig['default'].load(_awesomeScheduleFrontConfigEnvironment['default']['ember-bootstrap'] || {});
  }

  exports['default'] = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});