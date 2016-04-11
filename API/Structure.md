#Structure#

The API folder is mostly made up of app.js and the controllers folder.  node_modules contains libraries/modules downloaded with npm to assist in making the server.

The app is broken down into...

###Controllers###
Contains the router file (Where all requests to the server go to first) and the routes folder

###Controllers/routes###
Javascript files that control specific route requests, calls upon more Javascript files within the Database folder, and sends back responses to the client.
