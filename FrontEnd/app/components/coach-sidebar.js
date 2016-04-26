import Ember from 'ember';



//The right side of the calendar page, holds all coaches available to teach.
//HTML side for this file stored in /templates/components/
export default Ember.Component.extend({
        name: 'Mike Jones',
        needs: 'calendar',
        coaches: Ember.inject.service('coach-info'),
        
        actions:{
            add(){
                this.get('coaches').add(this.get('name'));
            }
        }

});
