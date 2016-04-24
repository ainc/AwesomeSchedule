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
        //to get the date passed to the component
        getDate: function(){
            return this.get('date');
        },
                    
        //Drag and drop feature
        className:  ['draggableDropzone'],
        classNameBindings: ['dragClass'],
        dragClass:  'deactivated',

        dragLeave(event){
            event.preventDefault();
            set(this,'dragClass','activated');
        },

        dragOver(event){
            event.preventDefault();
            set(this,'dragClass','deactivated');
        },

        drop(event){
            var data = event.dataTransfer.getData('text/data');
            this.sendAction('dropped',data);

            set(this,'dragClass','deactivated');
        },
        
        
        actions:{
            getCourse: function(){
                this.sendAction('action',this.get('getDate'));
            }
        }
	
});
