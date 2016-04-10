import Ember from 'ember';

export default Ember.Component.extend({
      
        info: [],
            
            actions:{
                submit: function(){
                    
                   this.get('info').pushObject(this.get('username'));
                    this.get('info').pushObject(this.get('password'));
                    this.sendAction('action',this.get('info'));
                    
                }
            }
});
