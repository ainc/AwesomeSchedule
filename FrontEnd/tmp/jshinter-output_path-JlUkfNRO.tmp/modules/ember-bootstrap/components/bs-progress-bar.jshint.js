QUnit.module('JSHint - modules/ember-bootstrap/components');
QUnit.test('modules/ember-bootstrap/components/bs-progress-bar.js should pass jshint', function(assert) { 
  assert.expect(1);
  assert.ok(false, 'modules/ember-bootstrap/components/bs-progress-bar.js should pass jshint.\nmodules/ember-bootstrap/components/bs-progress-bar.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodules/ember-bootstrap/components/bs-progress-bar.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodules/ember-bootstrap/components/bs-progress-bar.js: line 38, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nmodules/ember-bootstrap/components/bs-progress-bar.js: line 176, col 44, \'template literal syntax\' is only available in ES6 (use \'esversion: 6\').\n\n4 errors'); 
});
