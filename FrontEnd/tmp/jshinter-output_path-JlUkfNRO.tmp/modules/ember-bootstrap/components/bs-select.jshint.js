QUnit.module('JSHint - modules/ember-bootstrap/components');
QUnit.test('modules/ember-bootstrap/components/bs-select.js should pass jshint', function(assert) { 
  assert.expect(1);
  assert.ok(false, 'modules/ember-bootstrap/components/bs-select.js should pass jshint.\nmodules/ember-bootstrap/components/bs-select.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodules/ember-bootstrap/components/bs-select.js: line 10, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nmodules/ember-bootstrap/components/bs-select.js: line 22, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nmodules/ember-bootstrap/components/bs-select.js: line 23, col 17, \'spread/rest operator\' is only available in ES6 (use \'esversion: 6\').\n\n4 errors'); 
});
