import Ember from 'ember';

//Javascript side of the bio-box: Which is meant to hold all information about a user on the coach's page.
//HTML side for this file stored in /templates/components/bio-box
export default Ember.Component.extend({
        bioWrapper: 'bioWrapper',
        activityButton: 'activityButton',
        ajax: Ember.inject.service(),
        model: function(){
            var coo = document.cookie;
            var cookieArray = coo.split('=');
            console.log(cookieArray[0]);
        }
});
