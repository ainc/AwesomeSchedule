define('awesome-schedule-front/components/day-tile', ['exports', 'ember'], function (exports, _ember) {
               exports['default'] = _ember['default'].Component.extend({
                              wrapperSTTS: 'headerTileSTTS',
                              wrapperMWF: 'headerTileMWF',
                              wrapperEmptySTTS: 'blankTileSTTS',
                              wrapperEmptyMWF: 'blankTileMWF',
                              wrapperFilled: 'colorTile'

               });
});