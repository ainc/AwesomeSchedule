//This file is called when the coach wants to add a picture of themselves on the coaches page. The route /assets/images/profile_pictures/ is constant.
var provider = require('./mysqlProvider.js');

module.exports.updatepicture = function(CoachID, username){
    return new provider.RSVP.Promise(function(resolve, reject) {
        
        provider.connection.query("UPDATE coaches SET picture = '/assets/images/profile_pictures/" + provider.connection.escape(username) + ".png WHERE CoID= " + provider.connection.escape(CoachID), function(err, rows) {
            
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
