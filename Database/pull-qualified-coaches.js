//This files is called when we want to see what coaches are qualified to teach certain classes. You must pass in the class name that you
//want to check (string)
var provider = require('./mysqlProvider.js');

module.exports.pullqualifiedcoach = function(className){
    return new provider.RSVP.Promise(function(resolve, reject) {
        provider.connection.query(' SELECT name, class FROM coaches, qualified WHERE coaches.CoID = qualified.coaches_CoID AND qualified.class = ' + provider.connection.escape(className), function(err, rows) {
            
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
