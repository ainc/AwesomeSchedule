define('awesome-schedule-front/tests/helpers/resolver', ['exports', 'ember/resolver', 'awesome-schedule-front/config/environment'], function (exports, _emberResolver, _awesomeScheduleFrontConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _awesomeScheduleFrontConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _awesomeScheduleFrontConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});