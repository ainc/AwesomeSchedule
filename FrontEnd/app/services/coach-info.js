import Ember from 'ember';

export default Ember.Service.extend({
        names: null,
        
        init(){
            this._super(...arguments);
            this.set('names',[]);
            
        },
        
        add(person){
            this.get('names').pushObject(person);
        },
        
        display(){
            return this.get('names');
        },
});
