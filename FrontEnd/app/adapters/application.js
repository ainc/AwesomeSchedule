import DS from "ember-data";

export default DS.RESTAdapter.extend({
    namespace: 'api',
    ajax:Ember.inject.service(),
  	model() {
    return this.get('ajax').request('/gimmieDatDate');
}
});

