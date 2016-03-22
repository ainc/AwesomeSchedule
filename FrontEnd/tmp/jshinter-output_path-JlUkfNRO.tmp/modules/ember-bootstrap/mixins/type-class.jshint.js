QUnit.module('JSHint - modules/ember-bootstrap/mixins');
QUnit.test('modules/ember-bootstrap/mixins/type-class.js should pass jshint', function(assert) { 
  assert.expect(1);
  assert.ok(false, 'modules/ember-bootstrap/mixins/type-class.js should pass jshint.\nmodules/ember-bootstrap/mixins/type-class.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodules/ember-bootstrap/mixins/type-class.js: line 9, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors'); 
});
