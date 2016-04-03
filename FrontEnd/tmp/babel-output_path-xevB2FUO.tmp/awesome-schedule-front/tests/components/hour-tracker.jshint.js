define('awesome-schedule-front/tests/components/hour-tracker.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/hour-tracker.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/hour-tracker.js should pass jshint.\ncomponents/hour-tracker.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/hour-tracker.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});