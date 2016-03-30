define('awesome-schedule-front/tests/helpers/start-app', ['exports', 'ember', 'awesome-schedule-front/app', 'awesome-schedule-front/config/environment'], function (exports, _ember, _awesomeScheduleFrontApp, _awesomeScheduleFrontConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _awesomeScheduleFrontConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _awesomeScheduleFrontApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});