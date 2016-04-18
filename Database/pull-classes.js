var provider = require('./mysqlProvider.js');

module.exports.pullclasses = function(){
    return new provider.RSVP.Promise(function(resolve, reject) {
        
        provider.connection.query('SELECT * FROM classes WHERE classStartTime >= CURDATE() AND classStartTime <= DATE_ADD(CURDATE(), INTERVAL 1 MONTH)', function(err, rows) {
            
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
