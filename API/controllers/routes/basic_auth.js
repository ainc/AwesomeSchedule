// Imports the file used in Database folder to request from DB
var auth = database('basic-auth.js');

// Shows this part of the file only when called
module.exports = function(req,res) {

    // Checks for existing cookies
    console.log("cookie: ", req.cookies);
    
    // Requests database by checking login info with data stored in DB
    // Uses promise to handle async signified by two callback functions with .then
    var login = auth.authenticate(req.body.username, req.body.password).then(function(rows) {
        // If user/pass combo is successful

        // Sends a cookie to the browser that can be used as a Request header required for certain routes
        res.cookie(rows[0].name, rows[0].isAdmin, { expires: new Date(Date.now() + 60000), httpOnly: false });
        
        console.log("Successful Login: " + rows[0].name);

        // Sends back a value to Client that controls whether to redirect to another page or not
        res.send( { "result": {log: 1} } );
    }, function(value) {
        // If not found or other failures

        res.send( { "result": {log: 0} } );
    });

}