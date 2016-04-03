import Ember from 'ember';

/**
 Extends Ember.TextField to add Bootstrap's 'form-control' class.

 @class Input
 @namespace Components
 @extends Ember.TextField
 */
export default Ember.TextField.extend({
  classNames: ['form-control']
});