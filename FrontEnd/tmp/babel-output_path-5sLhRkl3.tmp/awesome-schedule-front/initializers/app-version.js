define('awesome-schedule-front/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'awesome-schedule-front/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _awesomeScheduleFrontConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_awesomeScheduleFrontConfigEnvironment['default'].APP.name, _awesomeScheduleFrontConfigEnvironment['default'].APP.version)
  };
});