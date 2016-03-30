var mysql = require('../API/node_modules/mysql');

module.exports = {   
    RSVP : require('../API/node_modules/rsvp'),

    connection: mysql.createConnection({
        host : 'delphi.cs.uky.edu',
        user : 'kpla223',
        password : 'u0750441',
        database : 'kpla223'
    }),
}