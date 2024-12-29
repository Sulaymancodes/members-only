const { formatDistanceToNow } = require('date-fns');
const db = require("../db/queries");

async function getHome (req, res) {
    if (req.isAuthenticated()) {
        try {
            const membership_status = req.user.membership_status
            const messages = await db.getMessages();
            const formattedMessages = messages.map(message => ({
                ...message,
                timestamp: formatDistanceToNow(new Date(message.timestamp), { addSuffix: true })
            }));
            console.log(formattedMessages)

            res.render('home', {messages: formattedMessages, status: membership_status});
        } catch (err) {
            console.log(err);
            res.render('home', {messages:[]});
        }
    } else {
        res.render("authError");
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