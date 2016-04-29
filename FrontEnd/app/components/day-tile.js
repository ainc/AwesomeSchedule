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
        

        
                    
        actions:{
            scheduleInstructor: function(info){
                
                if((info.element.firstElementChild.innerText === ("Academy"+"\n"+"\n"))||(info.element.firstElementChild.innerText === ("Mentorship"+"\n"+"\n")) || (info.element.firstElementChild.innerText === ("Tutoring"+"\n"+"\n"))){
                    this.set('course',info.element.firstElementChild.innerText);
                    
                }else{
                    if(this.get('course') == null){

                    }
                    else{

                    this.set('scheduledCoach',info.element.firstElementChild.innerText);
                    this.sendAction('action',this.get('date'),this.get('course'));
                    }
                }
                
            },
            dragOver:function(){
                if(this.get('redDay')){
                    this.set('wrapperEmptySTTS','dragOverDay');
                }else{
                    this.set('wrapperEmptyMWF','dragOverDay');
                }    
                
                
            },
            dragOut:function(){
              if(this.get('redDay')){
                  this.set('wrapperEmptySTTS','blankTileSTTS');
              }else{
                  this.set('wrapperEmptyMWF','blankTileMWF');
              }  
                
            },
        }
	
});
