//This file is called when we want to view coach information such as in the coaches page. The CoID is retrieved at login so passing it to this file
//allows us to narrow the search field by knowing something about the user before hand.
var provider = require('./mysqlProvider.js');

module.exports.pullcoach = function(CoachID){
    return new provider.RSVP.Promise(function(resolve, reject) {
        
        provider.connection.query('SELECT * FROM coaches WHERE CoID = ' + provider.connection.escape(CoachID), function(err, rows) {
            
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
