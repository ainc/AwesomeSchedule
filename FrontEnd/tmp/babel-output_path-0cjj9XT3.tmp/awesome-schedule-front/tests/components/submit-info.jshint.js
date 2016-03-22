define('awesome-schedule-front/tests/components/submit-info.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/submit-info.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/submit-info.js should pass jshint.\ncomponents/submit-info.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/submit-info.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});