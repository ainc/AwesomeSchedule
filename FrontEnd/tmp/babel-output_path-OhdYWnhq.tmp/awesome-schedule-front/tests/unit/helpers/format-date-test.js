define('awesome-schedule-front/tests/unit/helpers/format-date-test', ['exports', 'awesome-schedule-front/helpers/format-date', 'qunit'], function (exports, _awesomeScheduleFrontHelpersFormatDate, _qunit) {

  (0, _qunit.module)('Unit | Helper | format date');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _awesomeScheduleFrontHelpersFormatDate.formatDate)(42);
    assert.ok(result);
  });
});