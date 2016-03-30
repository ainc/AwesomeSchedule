define('awesome-schedule-front/initializers/export-application-global', ['exports', 'ember', 'awesome-schedule-front/config/environment'], function (exports, _ember, _awesomeScheduleFrontConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_awesomeScheduleFrontConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _awesomeScheduleFrontConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_awesomeScheduleFrontConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});