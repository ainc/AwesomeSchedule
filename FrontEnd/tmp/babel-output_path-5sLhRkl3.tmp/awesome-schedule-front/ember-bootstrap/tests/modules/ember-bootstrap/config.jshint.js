define('awesome-schedule-front/ember-bootstrap/tests/modules/ember-bootstrap/config.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-bootstrap/config.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'modules/ember-bootstrap/config.js should pass jshint.\nmodules/ember-bootstrap/config.js: line 17, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n1 error');
  });
});