QUnit.module('JSHint - components/submit-info.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'components/submit-info.js should pass jshint.\ncomponents/submit-info.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/submit-info.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
});
