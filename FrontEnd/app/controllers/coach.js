import Ember from 'ember';

export default Ember.Controller.extend({
        coachController: Ember.inject.controller('coach'),
        coach: Ember.computed.reads('coachController.model'),
});
