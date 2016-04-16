var coaches = database('pull-coach.js');

module.exports = function(req, res) {

    var coach = coaches.pullcoach(req.params.id).then(function(rows) {

        var coach_data = {

            "coach": {
                name: rows[0].name,
                email: rows[0].email,
                picture: rows[0].picture,
                active: rows[0].active,

            }

        };

        res.send(coach_data);

    }, function(value) {
        res.send( { "coach": {error: "Server error"} } );
    });
    
}