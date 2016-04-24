//This file is called when we want to display the classes on the calander. We only want to see the data for the current month starting from the
//current date up to 1 month after. This file can be modified by adding arguments to pullclasses and changing the interval of data to select.
//This can be useful if we want to do something like scroll forwards or backwords on the admin calandar.
var provider = require('./mysqlProvider.js');

module.exports.pullclasses = function(){
    return new provider.RSVP.Promise(function(resolve, reject) {
        // change the values under the plus sign to go forward or backword in time.
        //----------------------------------------------------------------------------------------------------+-----------------------------------------------------------+------
        provider.connection.query('SELECT classID, className, DATE_FORMAT(classDate, "%Y-%m-%d") AS classDate, startTime, EndTime  FROM classes WHERE classDate >= DATE_ADD(CURDATE(), INTERVAL 0 MONTH) AND classDate <= DATE_ADD(CURDATE(), INTERVAL 1 MONTH) ORDER BY classDate', function(err, rows) {
            
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
