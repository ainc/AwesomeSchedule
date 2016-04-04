import DS from "ember-data";
import Ember from 'ember';

export default DS.RESTAdapter.extend({
    namespace: 'api',
    host: 'http://localhost:9029',
    pathForType: function(type) {
       var camelized = Ember.String.camelize(type);
       return Ember.String.singularize(camelized);
     }
    
});

