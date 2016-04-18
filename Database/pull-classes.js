var provider = require('./mysqlProvider.js');

module.exports.pullclasses = function(date){
    return new provider.RSVP.Promise(function(resolve, reject) {
        
        provider.connection.query('SELECT * FROM classes WHERE classStartTime >= CURDATE() AND classStartTime <= ' + provider.connection.escape(date), function(err, rows) {
            
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
