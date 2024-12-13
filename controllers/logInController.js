function logIn (req, res)  {
    res.render("log-in")
}

// function logInUser (req, res, next) {
//    passport.authenticate('local', {
//     successRedirect: '/index',
//     failureRedirect: '/login'
//    });
// }


module.exports = { logIn };