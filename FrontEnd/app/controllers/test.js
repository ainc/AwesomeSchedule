import Ember from 'ember';


//ANYTHING LABELED TEST AS A FILENAME WILL BE REMOVED FOR PRODUCTION CODE
//Test is simply meant to be a safe working environment to try ideas for the project
export default Ember.Controller.extend({
    testController: Ember.inject.controller('test'),
    test: Ember.computed.reads('testController.model')
    
});
