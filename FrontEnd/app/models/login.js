import Ember from 'ember';

export default Ember.Object.extend({
         init: function() {
            var name = this.get('name');
            return name;
            //alert("Hi, my name is " + this.get('name'));
        },
        

});