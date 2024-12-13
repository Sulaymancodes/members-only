function getIndex (req, res) {
    if (req.isAuthenticated()) {
        res.render('index');
    } else {
        res.send("you are not authenticated");
    }
    
}

function logOutUser (req, res) {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        res.redirect("/log-in");
    });
}

module.exports = { getIndex, logOutUser }