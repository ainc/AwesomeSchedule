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
