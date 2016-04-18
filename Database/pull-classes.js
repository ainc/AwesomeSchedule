var provider = require('./mysqlProvider.js');

module.exports.pullclasses = function(date1, date2){
    return new provider.RSVP.Promise(function(resolve, reject) {
        
        provider.connection.query('SELECT * FROM classes WHERE classStartTime >= ' + provider.connection.escape(date1)' AND classStartTime <= ' + provider.connection.escape(date2), function(err, rows) {
            
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
