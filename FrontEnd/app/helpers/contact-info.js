import Ember from 'ember';

export function contactInfo(params/*, hash*/) {
  return params;
}

export default Ember.Helper.helper(contactInfo);
    
Ember.Handlebars.helper('contactInfo', function(person){
   return person.get('firstName') + ' ' + person.get('lastName')+'\n'+person.get('address')+'\n'+person.get('email')+'\n'+person.get('phoneNumber'); 
});
