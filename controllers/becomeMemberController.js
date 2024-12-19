function becomeMember(req, res) {
    if (req.isAuthenticated()) {
        res.render("becomeMember");
    } else {
        res.send("you are not authenticated to visit this path");
    }
    
}

module.exports = { becomeMember }