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
