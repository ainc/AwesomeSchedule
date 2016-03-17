define('awesome-schedule-front/tests/components/coach-day.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/coach-day.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/coach-day.js should pass jshint.\ncomponents/coach-day.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/coach-day.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});