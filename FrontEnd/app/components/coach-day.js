import Ember from 'ember';

//Unused for now, will become part of the calendar on the coaches page, used for displaying classes
//HTML side for this file stored in /templates/components/

var {get} = Ember;
export default Ember.Component.extend({
        coachTile:'coachDayTileWrapper',
        classNames        : [ 'draggableItem' ],
        attributeBindings : [ 'draggable' ],
        draggable         : 'true',
  
        dragStart(event) {
        return event.dataTransfer.setData('text/data', get(this, 'content'));
  }
});
