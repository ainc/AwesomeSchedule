define('awesome-schedule-front/components/day-tile', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		wrapperEmpty: 'blankTile',
		wrapperFilled: 'colorTile'

	});
});