define('awesome-schedule-front/ember-bootstrap/tests/modules/ember-bootstrap/helpers/read-path.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-bootstrap/helpers');
  QUnit.test('modules/ember-bootstrap/helpers/read-path.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'modules/ember-bootstrap/helpers/read-path.js should pass jshint.\nmodules/ember-bootstrap/helpers/read-path.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodules/ember-bootstrap/helpers/read-path.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nmodules/ember-bootstrap/helpers/read-path.js: line 7, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n3 errors');
  });
});