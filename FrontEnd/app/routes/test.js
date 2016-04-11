import Ember from 'ember';
import Test from '../models/test';
//import AjaxService from 'ember-ajax/services/ajax';


//PLEASE IGNORE
export default Ember.Route.extend({
    ajax: Ember.inject.service(),
    
    bananas: function(param){
        var fruit = Test.create({
            id: 1,
            name: param.test.name
        });
        return fruit;
    },
    
    model: function() {
//        (function testies(bananas){
//            jQuery.ajax({
//                type: "POST",
//                url: "http://localhost:9029/api/gimmieDatDate",
//            }).done(function(data) {
//                    bananas(data);
//            });
//            
//        })();
        return this.get('ajax').request('http://localhost:9029/api/gimmieDatDate', {method: 'POST'}).then(function(value){
           console.log(value["test"][0].name);
            var tom = Test.create({
            id: 1,
            name: value["test"][0].name
            });
            
            return tom;
            //return value.test.name;
        });
        /*
        var tom = Test.create({
            id: 1,
            name: "Tom Daley"
        });
        return tom;*/
    }
});