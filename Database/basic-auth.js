//This file is called at login. It is looking for a single row of data with the username and password that have been passed into this function.
//If we get exactly one row then the user can login.
//If no rows are retrieved then either the username or password was incorrect.
//If more than one row is retrieved we have a huge problem, namley that we have non-unique usernames (This should not be allowed).
var provider = require('./mysqlProvider.js');

module.exports.authenticate = function(user, pass){
    return new provider.RSVP.Promise(function(resolve, reject) {
        
        provider.connection.query('SELECT * FROM coaches WHERE username = ' + provider.connection.escape(user) + ' AND password = ' + provider.connection.escape(pass), function(err, rows) {
            
            if (err){ throw err;}
            if (!rows.length)
            {
                
                reject("fail");
            }
            else
            {
                resolve(rows);
            }

        });
    });

}
