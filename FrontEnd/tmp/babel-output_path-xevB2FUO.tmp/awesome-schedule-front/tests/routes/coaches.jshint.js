define('awesome-schedule-front/tests/routes/coaches.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/coaches.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/coaches.js should pass jshint.\nroutes/coaches.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/coaches.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});