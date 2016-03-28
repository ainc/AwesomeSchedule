module.exports = function(req,res) {

    res.cookie('some_name', 'role', { expire: new Date(Date.now() + 60000), httpOnly: false }).send("Cookie has been sent");
    
    console.log("Boom Shacka lacka!");
}