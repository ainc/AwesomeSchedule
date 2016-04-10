var provider = require('./mysqlProvider.js');

module.exports.test = function(){
    return new provider.RSVP.Promise(function(resolve, reject) {

        provider.connection.query('show tables', function(err, rows) {
            
            if (err){ throw err;}
            if (!rows.length)
            {
                reject(rows);
            }
            else
            {
                console.log("made it!");
                resolve(rows);
            }

        });
    });

}