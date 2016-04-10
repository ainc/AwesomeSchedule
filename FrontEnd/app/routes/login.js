import Ember from 'ember';
import Login from '../models/login';

export default Ember.Route.extend({
        ajax: Ember.inject.service(),
            model: function() {
                
                
          },
        

        
        
        
        actions:{
            submitLoginAttempt: function(info){
                return this.get('ajax').request('http://localhost:9029/api/basic_auth', {method: 'POST', data: {username: info[0], password: info[1]}, xhrFields: {crossDomain: true, withCredentials: true} }).then(function(value){
                   console.log(value.result.log);
                    if(value.result.log===1){
                        var login = Login.create();
                             login.set('isLoggedIn','true');
                            window.location.href='/coach';
                   }
                   else{
                       
                   }
               
                  
                });
            }
        }
});

