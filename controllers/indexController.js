function getIndex (req, res) {
    if (req.isAuthenticated()) {
        res.render('index');
    } else {
        res.send("you are not authenticated");
    }
    
}


module.exports = { getIndex, logOutUser }