define('awesome-schedule-front/tests/helpers/format-date.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/format-date.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/format-date.js should pass jshint.\nhelpers/format-date.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\n\n1 error');
  });
});