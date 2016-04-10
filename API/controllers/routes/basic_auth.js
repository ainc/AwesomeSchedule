var auth = database('basic-auth');

module.exports = function(req,res) {

    //console.log(req.body.username);
    var login = auth.authenticate(req.body.username, req.body.password).then(function(value) {
        res.cookie(value.name, value.isAdmin, { expires: new Date(Date.now() + 60000) });
    }, function(value) {
        res.send('failure');
    });

}