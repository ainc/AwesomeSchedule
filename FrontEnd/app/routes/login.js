import Ember from 'ember';

export default Ember.Route.extend({
        ajax: Ember.inject.service(),
            model: function() {

        },
        
        actions:{
            submitLoginAttempt: function(info){
                return this.get('ajax').request('http://localhost:9029/api/basic_auth', {method: 'POST', data: {username:info[0], password: info[1]} }).then(function(){
                   console.log(this.get(info));
                   
            
                });
            }
        }
});

