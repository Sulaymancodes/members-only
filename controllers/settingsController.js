function getSettings (req, res) {
    if (req.isAuthenticated()) {
        res.render("settings");
    } else {
        res.send("You are not Authenticated to visit this site");
    }
}

module.exports = { getSettings }