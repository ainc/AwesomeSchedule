import Ember from 'ember';


var { get } = Ember;
//The right side of the calendar page, holds all coaches available to teach.
//HTML side for this file stored in /templates/components/
export default Ember.Component.extend({
        name: 'Mike Jones',
        classNames        : [ 'draggableItem' ],
        attributeBindings : [ 'draggable' ],
        draggable         : 'true',
  
        dragStart(event) {
            return event.dataTransfer.setData('text/data', get(this, 'content'));
        }
});
