import Ember from 'ember';

export function dayCheck(p1) {
  if(p1[0] === p1[1]){

      return true;
  }
  else{

      return false;
  }
}

export default Ember.Helper.helper(dayCheck);
