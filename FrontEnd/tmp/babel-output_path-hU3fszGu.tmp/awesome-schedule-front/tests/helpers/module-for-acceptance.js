define('awesome-schedule-front/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'awesome-schedule-front/tests/helpers/start-app', 'awesome-schedule-front/tests/helpers/destroy-app'], function (exports, _qunit, _awesomeScheduleFrontTestsHelpersStartApp, _awesomeScheduleFrontTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _awesomeScheduleFrontTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _awesomeScheduleFrontTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});