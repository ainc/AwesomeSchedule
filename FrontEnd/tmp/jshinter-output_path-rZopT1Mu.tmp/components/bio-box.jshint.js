QUnit.module('JSHint - components/bio-box.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'components/bio-box.js should pass jshint.\ncomponents/bio-box.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/bio-box.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
});