define('awesome-schedule-front/ember-bootstrap/tests/modules/ember-bootstrap/components/bs-accordion.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-bootstrap/components/bs-accordion.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'modules/ember-bootstrap/components/bs-accordion.js should pass jshint.\nmodules/ember-bootstrap/components/bs-accordion.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodules/ember-bootstrap/components/bs-accordion.js: line 30, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nmodules/ember-bootstrap/components/bs-accordion.js: line 43, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n3 errors');
  });
});