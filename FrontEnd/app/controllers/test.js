import Ember from 'ember';
//import Test from '../models/test'

export default Ember.Controller.extend({
    testController: Ember.inject.controller('test'),
    test: Ember.computed.reads('testController.model')
    
});
