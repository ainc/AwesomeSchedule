import Ember from 'ember';
import Test from '../models/test';
//import AjaxService from 'ember-ajax/services/ajax';

export default Ember.Route.extend({
    ajax: Ember.inject.service(),
    
    model: function() {
        //return this.get('ajax').request('http://localhost:9029/api/gimmieDatDate', {method: 'POST'});
        
        var tom = Test.create({
            id: 1,
            name: "Tom Daley"
        });
        return tom;
    }
});
