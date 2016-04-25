import Ember from 'ember';


var { get } = Ember;
//The right side of the calendar page, holds all coaches available to teach.
//HTML side for this file stored in /templates/components/
export default Ember.Component.extend({
        name: 'Mike Jones',
        needs: 'calendar'

});
