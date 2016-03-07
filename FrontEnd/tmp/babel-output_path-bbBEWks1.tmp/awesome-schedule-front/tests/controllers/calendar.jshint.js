define('awesome-schedule-front/tests/controllers/calendar.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/calendar.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/calendar.js should pass jshint.\ncontrollers/calendar.js: line 1, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n1 error');
  });
});