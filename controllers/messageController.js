function getWriteMessage (req, res) {
    if (req.isAuthenticated()){
        res.render("write-message");
    } else {
        res.send("You are not authenticated to visit this page");
    }
}

module.exports = { getWriteMessage };