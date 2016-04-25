
//This file is called when we want to view coach information such as in the coaches page. The CoID is retrieved at login so passing it to this file
//allows us to narrow the search field by knowing something about the user before hand.
var provider = require('./mysqlProvider.js');

module.exports.pullallcoaches = function(){
    return new provider.RSVP.Promise(function(resolve, reject) {
        
        provider.connection.query('SELECT name, class, uaDate FROM coaches, qualified, unavailable WHERE coaches.CoID = unavailable.coaches_CoID AND coaches.CoID = qualified.coaches_CoID, function(err, rows) {
            
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
