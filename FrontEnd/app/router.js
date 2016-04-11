import Ember from 'ember';
import config from './config/environment';

//Controls all of the different navigation abilities for the app. this.route designates a new route for the app.

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('calendar');
  this.route('admin');
  this.route('coach');
  this.route('login');
  this.route('coaches');
  this.route('test');
});

export default Router;
