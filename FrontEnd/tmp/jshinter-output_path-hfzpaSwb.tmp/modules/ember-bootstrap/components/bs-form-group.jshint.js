QUnit.module('JSHint - modules/ember-bootstrap/components');
QUnit.test('modules/ember-bootstrap/components/bs-form-group.js should pass jshint', function(assert) { 
  assert.expect(1);
  assert.ok(false, 'modules/ember-bootstrap/components/bs-form-group.js should pass jshint.\nmodules/ember-bootstrap/components/bs-form-group.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodules/ember-bootstrap/components/bs-form-group.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodules/ember-bootstrap/components/bs-form-group.js: line 23, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n3 errors'); 
});
