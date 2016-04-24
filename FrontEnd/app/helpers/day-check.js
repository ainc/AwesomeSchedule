import Ember from 'ember';

export function dayCheck(p1) {
  if(p1[0] === p1[1]){

      return true;
  }
  else{
      console.log(p1[0]);
      console.log(p1[1]);
      return false;
  }
}

export default Ember.Helper.helper(dayCheck);
