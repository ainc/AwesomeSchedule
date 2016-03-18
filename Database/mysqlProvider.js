var mysql = require('../API/node_modules/mysql');

module.exports = {   
    RSVP : require('../API/node_modules/rsvp'),

    connection: mysql.createConnection({
        host : '*',
        user : '*',
        password : '*',
        database : '*'
    }),
}