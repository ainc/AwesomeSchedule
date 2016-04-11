import Ember from 'ember';

//Controller to handle submiting login attempts to the API
export default Ember.Controller.extend({
            loginController: Ember.inject.controller('login'),
            login: Ember.computed.reads('loginController.model'),
            
});
