//This file is called to show the user which dates they already have scheduled unavailable. Put the object on the calander where there
//are dates that get selected.
var provider = require('./mysqlProvider.js');

module.exports.pullqualifiedcoach = function(CoID){
    return new provider.RSVP.Promise(function(resolve, reject) {
        provider.connection.query('SELECT uaDate FROM unavailable WHERE coaches_CoID = ' + priovider.connection.escape(CoID), function(err,rows) {
            
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
