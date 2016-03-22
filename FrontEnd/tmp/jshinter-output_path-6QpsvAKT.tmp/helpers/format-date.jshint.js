QUnit.module('JSHint - helpers');
QUnit.test('helpers/format-date.js should pass jshint', function(assert) { 
  assert.expect(1);
  assert.ok(false, 'helpers/format-date.js should pass jshint.\nhelpers/format-date.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nhelpers/format-date.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nhelpers/format-date.js: line 10, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n3 errors'); 
});
