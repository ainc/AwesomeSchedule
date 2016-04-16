import Ember from 'ember';
import Fecha from 'npm:fecha';



export function formatDate(params/*, hash*/) {
  return Fecha.format(new Date(2015,10,20), 'dddd MMMM Do, YYYY');
   
}

export default Ember.Helper.helper(formatDate);
