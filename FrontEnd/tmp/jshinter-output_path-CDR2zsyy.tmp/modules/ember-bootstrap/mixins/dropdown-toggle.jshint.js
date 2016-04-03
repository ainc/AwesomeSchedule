QUnit.module('JSHint - modules/ember-bootstrap/mixins/dropdown-toggle.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'modules/ember-bootstrap/mixins/dropdown-toggle.js should pass jshint.\nmodules/ember-bootstrap/mixins/dropdown-toggle.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodules/ember-bootstrap/mixins/dropdown-toggle.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodules/ember-bootstrap/mixins/dropdown-toggle.js: line 10, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n3 errors');
});
