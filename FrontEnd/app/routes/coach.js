import Ember from 'ember';
import Login from '../models/login';


//Performs a test to ensure the user is logged in, passes a true or false to the coach template (when implemented)
export default Ember.Route.extend({
      
        model: function(){
            console.log(Login.isLoggedIn);

        }
});
