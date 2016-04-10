var auth = database('basic-auth.js');

module.exports = function(req,res) {

    console.log("cookie: ", req.cookies);
    
    var login = auth.authenticate(req.body.username, req.body.password).then(function(rows) {
        
        res.cookie(rows[0].name, rows[0].isAdmin, { expires: new Date(Date.now() + 60000), httpOnly: false });
        
        console.log("Successful Login: " + rows[0].name);
        res.send( { "result": {log: 1} } );
    }, function(value) {
        
        res.send( { "result": {log: 0} } );
    });

}