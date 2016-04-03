define('awesome-schedule-front/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
    exports['default'] = _emberData['default'].RESTAdapter.extend({
        namespace: 'api',
        host: 'http//localhost:9029'
    });
});