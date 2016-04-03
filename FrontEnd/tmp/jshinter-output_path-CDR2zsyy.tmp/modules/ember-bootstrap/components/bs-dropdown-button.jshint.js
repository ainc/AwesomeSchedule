QUnit.module('JSHint - modules/ember-bootstrap/components/bs-dropdown-button.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'modules/ember-bootstrap/components/bs-dropdown-button.js should pass jshint.\nmodules/ember-bootstrap/components/bs-dropdown-button.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodules/ember-bootstrap/components/bs-dropdown-button.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodules/ember-bootstrap/components/bs-dropdown-button.js: line 14, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n3 errors');
});
