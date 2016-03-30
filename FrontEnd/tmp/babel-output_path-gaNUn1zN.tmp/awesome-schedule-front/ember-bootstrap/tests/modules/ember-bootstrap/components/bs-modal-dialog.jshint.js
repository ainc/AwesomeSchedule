define('awesome-schedule-front/ember-bootstrap/tests/modules/ember-bootstrap/components/bs-modal-dialog.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-bootstrap/components');
  QUnit.test('modules/ember-bootstrap/components/bs-modal-dialog.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'modules/ember-bootstrap/components/bs-modal-dialog.js should pass jshint.\nmodules/ember-bootstrap/components/bs-modal-dialog.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodules/ember-bootstrap/components/bs-modal-dialog.js: line 11, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nmodules/ember-bootstrap/components/bs-modal-dialog.js: line 135, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nmodules/ember-bootstrap/components/bs-modal-dialog.js: line 142, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n4 errors');
  });
});