import Ember from 'ember';

export function formatDate(params/*, hash*/) {
  return params;
}
Ember.Handlebars.registerBoundHelper('currentDate', function() {
  return moment().format('LL');
});
export default Ember.Helper.helper(formatDate);
