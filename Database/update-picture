
var provider = require('./mysqlProvider.js');

module.exports.pullcoach = function(CoachID, username){
    return new provider.RSVP.Promise(function(resolve, reject) {
        
        provider.connection.query('UPDATE coaches SET picture = '/assets/images/profile_pictures/' + provider.connection.escape(username) WHERE CoID= ' + provider.connection.escape(CoachID), function(err, rows) {
            
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
