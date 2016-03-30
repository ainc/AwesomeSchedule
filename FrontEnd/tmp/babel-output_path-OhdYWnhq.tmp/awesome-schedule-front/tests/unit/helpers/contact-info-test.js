define('awesome-schedule-front/tests/unit/helpers/contact-info-test', ['exports', 'awesome-schedule-front/helpers/contact-info', 'qunit'], function (exports, _awesomeScheduleFrontHelpersContactInfo, _qunit) {

  (0, _qunit.module)('Unit | Helper | contact info');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _awesomeScheduleFrontHelpersContactInfo.contactInfo)(42);
    assert.ok(result);
  });
});