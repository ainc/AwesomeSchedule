var auth = database('basic-auth');

module.exports = function(req,res) {

    console.log("Cookies: ", req.cookies);
/*
    var login = auth.authenticate().then(function(value) {
        res.cookie('some_name', 'role', { expires: new Date(Date.now() + 60000) });
    }, function(value) {
        res.send('failure');
    });
*/

}