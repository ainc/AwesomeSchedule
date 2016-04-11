import Ember from 'ember';

//The tiles on the calendar page, the different wrappers are used depending on the data presented in the calendar
//HTML side for this file stored in /templates/components/

export default Ember.Component.extend({
                    wrapperSTTS: 'headerTileSTTS',
                    wrapperMWF: 'headerTileMWF',
	wrapperEmptySTTS: 'blankTileSTTS',
                wrapperEmptyMWF:'blankTileMWF',
	wrapperFilled: 'colorTile',
	
});
