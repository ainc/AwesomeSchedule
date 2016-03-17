define('awesome-schedule-front/router', ['exports', 'ember', 'awesome-schedule-front/config/environment'], function (exports, _ember, _awesomeScheduleFrontConfigEnvironment) {

	var Router = _ember['default'].Router.extend({
		location: _awesomeScheduleFrontConfigEnvironment['default'].locationType
	});

	Router.map(function () {
		this.route('calendar');
		this.route('admin');
		this.route('coach');
	});

	exports['default'] = Router;
});