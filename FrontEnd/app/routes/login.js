import Ember from 'ember';
import Login from '../models/login';

//The JS side of the login page, calls the API given the credintials from submit-login called on the login template.

export default Ember.Route.extend({
        ajax: Ember.inject.service(),
            model: function() {
                
                
          },
        

        
        
        
        actions:{
            //Check the login attempt, if good, go to the coaches page
            submitLoginAttempt: function(info){
                return this.get('ajax').request('http://localhost:9029/api/basic_auth', {method: 'POST', data: {username: info[0], password: info[1]}, xhrFields: {crossDomain: true, withCredentials: true} }).then(function(value){
                   console.log(value.result.log);
                    if(value.result.log===1){
                            window.location.href='/coach';
                   }
                   else{
                       
                   }
               
                  
                });
            }
        }
});

