import Ember from 'ember';


//Submits a login attempt to the login route
//HTML side for this file stored in /templates/components/
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
