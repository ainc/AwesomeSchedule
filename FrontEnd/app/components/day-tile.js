import Ember from 'ember';


//The tiles on the calendar page, the different wrappers are used depending on the data presented in the calendar
//HTML side for this file stored in /templates/components/



export default Ember.Component.extend({

        coaches: Ember.inject.service('coach-info'),
        tagName: 'dayTileHeader',
        wrapperSTTS: 'headerTileSTTS',
        wrapperMWF: 'headerTileMWF',
	wrapperEmptySTTS: 'blankTileSTTS',
        wrapperEmptyMWF:'blankTileMWF',
	wrapperFilled: 'colorTile',
        date:"",
        scheduledCoach:"",
        course:"",
        checkForClasses: function(){
            console.log(this.get('course'));
          if(this.get('course') === ""){
              return false;
          }
          else{
              return true;
          }
        },
        
        
        
        
                    
        actions:{
            scheduleInstructor: function(){
                if(this.get('course') == null){
                    
                }
                else{
                
                this.set('scheduledCoach','Mike Jones');
                this.sendAction('action',this.get('date'),this.get('course'));
                }
                
            }
        }
	
});
