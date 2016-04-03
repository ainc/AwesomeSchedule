// app/services/ajax.js

import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';

export default AjaxService.extend({
  namespace: '/api',
  host: 'http://localhost:9029',
  trustedHosts: [
    'http://localhost:9029'
  ],
});