//dashes between words in query filenames for standards.  underscore for filenames calling the database files.
//basic format of querying the database.  It's not uncommon to need nested queries.  Ask Michael for help on that if needed
var provider = require('./mysqlProvider.js');

//these kind of functions may have parameters for needed information.  Name them as needed.
module.exports.authenticate = function(user, pass){
    
    //Insures async pulling of data will return on time
    return new provider.RSVP.Promise(function(resolve, reject) {

        //look at felixge's version of node-mysql for more documentation on this (provider is needed)
        provider.connection.query('query', function(err, rows) {
            
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