var calendar = database('pull-classes.js');

module.exports = function(req, res) {

    var calendar_pull = calendar.pullclasses().then(function(rows) {

        var calendar_data = {

            "calendar": {
                data: rows,
            }

        };

        res.send(calendar_data);

    }, function(value) {
        res.send( { "calendar": {error: "Server error"} } );
    });
    
}