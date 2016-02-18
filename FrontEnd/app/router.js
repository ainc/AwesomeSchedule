import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('calendar');
	this.route('admin');
	this.route('coach');
});

export default Router;
