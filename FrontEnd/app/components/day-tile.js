import Ember from 'ember';

//The tiles on the calendar page, the different wrappers are used depending on the data presented in the calendar
//HTML side for this file stored in /templates/components/

var {set} = Ember;

export default Ember.Component.extend({
        tagName: 'dayTileHeader',
        wrapperSTTS: 'headerTileSTTS',
        wrapperMWF: 'headerTileMWF',
	wrapperEmptySTTS: 'blankTileSTTS',
        wrapperEmptyMWF:'blankTileMWF',
	wrapperFilled: 'colorTile',

        
        
        
                    
        actions:{
            scheduleInstructor: function(){
                console.log(this.get('course'));
                this.sendAction('action',this.get('course'));
                
            }
        }
	
});
