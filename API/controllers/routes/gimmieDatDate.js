module.exports = function(req,res) {

    console.log("Freddy Got Fingered");
    res.header("Access-Control-Allow-Origin", "*");
    res.send({ 
        "test": [
                    {

                        name: "Freddy also got fingered."
    
                    }
                ]
    });

}