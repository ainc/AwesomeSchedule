define('awesome-schedule-front/models/coaches', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].Model.extend({
		CoID: _emberData['default'].attr('number'),
		name: _emberData['default'].attr('string'),
		active: _emberData['default'].attr('boolean', { defaultValue: true }),
		startDate: _emberData['default'].attr('date'),
		endDate: _emberData['default'].attr('date'),
		RaID: _emberData['default'].attr('number'),
		isAdmin: _emberData['default'].attr('boolean', { defaultValue: false }),
		username: _emberData['default'].attr('string'),
		password: _emberData['default'].attr('string'),
		email: _emberData['default'].attr('string'),
		phone: _emberData['default'].attr('phone'),
		model: function model() {
			return this.store.find('gimmieDatDate');
		}

	});
});