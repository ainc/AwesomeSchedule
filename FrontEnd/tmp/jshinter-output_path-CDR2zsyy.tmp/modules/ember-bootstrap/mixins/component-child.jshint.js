QUnit.module('JSHint - modules/ember-bootstrap/mixins/component-child.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'modules/ember-bootstrap/mixins/component-child.js should pass jshint.\nmodules/ember-bootstrap/mixins/component-child.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodules/ember-bootstrap/mixins/component-child.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodules/ember-bootstrap/mixins/component-child.js: line 11, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n3 errors');
});
