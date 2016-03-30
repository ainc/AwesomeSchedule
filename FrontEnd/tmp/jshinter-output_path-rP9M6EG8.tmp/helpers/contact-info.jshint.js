QUnit.module('JSHint - helpers');
QUnit.test('helpers/contact-info.js should pass jshint', function(assert) { 
  assert.expect(1);
  assert.ok(false, 'helpers/contact-info.js should pass jshint.\nhelpers/contact-info.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nhelpers/contact-info.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nhelpers/contact-info.js: line 7, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n3 errors'); 
});
