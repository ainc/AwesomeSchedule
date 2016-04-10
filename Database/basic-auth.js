//dashes between words in query filenames for standards.  underscore for filenames calling the database files.
//basic format of querying the database.  It's not uncommon to need nested queries.  Ask Michael for help on that if needed
var provider = require('./mysqlProvider.js');

//these kind of functions may have parameters for needed information.  Name them as needed.
module.exports.authenticate = function(user, pass){
    
    //Insures async pulling of data will return on time
    return new provider.RSVP.Promise(function(resolve, reject) {
        //The query we need:
        //SELECT username, password, CoID FROM coaches WHERE username = '?' AND password = '?'
        //if the result is empty then the username and password do not match.
        //if there is a single result then the usser should login.
        //if there is more than one result we have a problem.
        //look at felixge's version of node-mysql for more documentation on this (provider is needed)
        provider.connection.query('SELECT username, password, CoID FROM coaches WHERE username = '+ connection.escape(user) +' AND password = '+ connection.escape(pass), function(err, rows) {
            
            if (err){ throw err;}

            //For no matches
            // reject/resolve doesn't always have to return the rows.  Remember that whatever argument is passed in the
            // resolve/resolve functions are the ones being passed back to the API.
            if (!rows.length)
            {
                reject(rows);
            }
            else
            {
                resolve(rows);
            }

        });
    });

}
