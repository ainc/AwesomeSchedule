define('awesome-schedule-front/tests/helpers/contact-info.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/contact-info.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/contact-info.js should pass jshint.\nhelpers/contact-info.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nhelpers/contact-info.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nhelpers/contact-info.js: line 7, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n3 errors');
  });
});