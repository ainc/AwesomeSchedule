import Ember from 'ember';
import Coach from '../models/coach';



//Performs a test to ensure the user is logged in, passes a true or false to the coach template (when implemented)
export default Ember.Route.extend({
        ajax: Ember.inject.service(),
        
        model: function(){
            var coo = document.cookie;
            var cookieArray = coo.split('=');
            console.log(cookieArray[0]);
            
            return this.get('ajax').request('http://localhost:9029/api/coaches/'+cookieArray[0],{method:'POST',xhrFields:{crossDomain: true, withCredintials:true}}).then(function(value){
                console.log(value.coach);
                var user = Coach.create({
                    name: value.coach.name,
                    email: value.coach.email,
                    picture: value.coach.picture,
                    isActive: value.coach.active
                    
                });
                
                return user;
                
            });

        }
});
