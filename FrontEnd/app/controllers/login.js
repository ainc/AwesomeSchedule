import Ember from 'ember';

export default Ember.Controller.extend({
            loginController: Ember.inject.controller('login'),
            login: Ember.computed.reads('loginController.model'),
            
});
