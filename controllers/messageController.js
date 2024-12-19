const db = require("../db/queries");

function getWriteMessage (req, res) {
    if (req.isAuthenticated()) {
        res.render("write-message");
    } else {
        res.send("You are not authenticated to visit this page");
    }
}

async function addMessage(req, res, next) {
    try {
        const {title, message} = req.body;
        const userId = req.user.id;
        await db.addMessage(userId, title, message);
        res.redirect("/members-only");
    }   catch (err) {
        next(err);
    }
}

module.exports = { getWriteMessage, addMessage };