var provider = require('./mysqlProvider.js');

module.exports.pullclasses = function(){
    return new provider.RSVP.Promise(function(resolve, reject) {
        // change the values under the plus sign to go forward or backword in time.
        //----------------------------------------------------------------------------------------------------+-----------------------------------------------------------+------
        provider.connection.query('SELECT * FROM classes WHERE classStartTime >= DATE_ADD(CURDATE(), INTERVAL 0 MONTH) AND classStartTime <= DATE_ADD(CURDATE(), INTERVAL 1 MONTH)', function(err, rows) {
            
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
