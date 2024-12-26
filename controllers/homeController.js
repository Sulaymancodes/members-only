const db = require("../db/queries");

async function getHome (req, res) {
    const membership_status = req.user.membership_status
    if (req.isAuthenticated()) {
        try {
            const messages = await db.getMessages();
            res.render('home', {messages: messages, status: membership_status});
        } catch (err) {
            console.log(err);
            res.render('home', {messages:[]});
        }
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

module.exports = { getHome, logOutUser }