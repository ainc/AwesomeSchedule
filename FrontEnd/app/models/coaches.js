import DS from 'ember-data';

export default DS.Model.extend({
	CoID: DS.attr(),
	name: DS.attr('string'),
	active: DS.attr(),
	startDate: DS.attr('date'),
	endDate: DS.attr('date'),
	RaID: DS.attr(),
	isAdmin: DS.attr(),
	username: DS.attr('string'),
	password: DS.attr('string'),
	email: DS.attr('string'),
	phone: DS.attr('phone'),
	model: function(params){
    	return this.store.find('person',1);
    
    }
  
});
