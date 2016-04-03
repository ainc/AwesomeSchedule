import DS from 'ember-data';

export default DS.Model.extend({
	CoID: DS.attr('number'),
	name: DS.attr('string'),
	active: DS.attr('boolean', {defaultValue: true}),
	startDate: DS.attr('date'),
	endDate: DS.attr('date'),
	RaID: DS.attr('number'),
	isAdmin: DS.attr('boolean', {defaultValue: false}),
	username: DS.attr('string'),
	password: DS.attr('string'),
	email: DS.attr('string'),
	phone: DS.attr('phone'),
	model: function(){
    	return this.store.find('gimmieDatDate');
    
    }
  
});
