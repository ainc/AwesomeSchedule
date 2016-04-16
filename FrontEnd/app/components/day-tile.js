import Ember from 'ember';

//The tiles on the calendar page, the different wrappers are used depending on the data presented in the calendar
//HTML side for this file stored in /templates/components/

var {set} = Ember;

export default Ember.Component.extend({
                    wrapperSTTS: 'headerTileSTTS',
                    wrapperMWF: 'headerTileMWF',
	wrapperEmptySTTS: 'blankTileSTTS',
                wrapperEmptyMWF:'blankTileMWF',
	wrapperFilled: 'colorTile',
                    
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
                    }
	
});
