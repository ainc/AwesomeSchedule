define('awesome-schedule-front/tests/components/logo-tile.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/logo-tile.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/logo-tile.js should pass jshint.\ncomponents/logo-tile.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/logo-tile.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});