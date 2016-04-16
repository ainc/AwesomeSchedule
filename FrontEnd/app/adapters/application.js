import DS from "ember-data";


//This file is the main interaction with the API, it provides the name of the route for the API, as well as the address the API is hosted on.
export default DS.RESTAdapter.extend({
    namespace: 'api',
    host: 'http://localhost:9029',

});

