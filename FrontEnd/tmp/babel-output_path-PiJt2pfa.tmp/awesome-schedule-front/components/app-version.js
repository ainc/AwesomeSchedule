define('awesome-schedule-front/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'awesome-schedule-front/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _awesomeScheduleFrontConfigEnvironment) {

  var name = _awesomeScheduleFrontConfigEnvironment['default'].APP.name;
  var version = _awesomeScheduleFrontConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});