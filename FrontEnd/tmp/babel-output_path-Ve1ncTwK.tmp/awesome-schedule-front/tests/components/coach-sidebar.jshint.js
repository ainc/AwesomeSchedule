define('awesome-schedule-front/tests/components/coach-sidebar.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/coach-sidebar.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/coach-sidebar.js should pass jshint.\ncomponents/coach-sidebar.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/coach-sidebar.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});