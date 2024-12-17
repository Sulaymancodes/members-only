const db = require("../db/queries");

async function getIndex (req, res) {
    if (req.isAuthenticated()) {
        try {
            const messages = await db.getMessages();
            res.render('index', {messages: messages});
        } catch (err) {
            console.log(err);
            res.render('index', {messages:[]});
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

module.exports = { getIndex, logOutUser }