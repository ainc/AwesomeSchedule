import Ember from 'ember';
import Login from '../models/login';

export default Ember.Route.extend({
      
        model: function(){
            console.log(Login.isLoggedIn);
            //
        }
});
