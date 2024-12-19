require('dotenv').config();
const db = require("../db/queries");

function becomeMember(req, res) {
    if (req.isAuthenticated()) {
        res.render("becomeMember", {status: false, message: false});
    } else {
        res.send("you are not authenticated to visit this path");
    }   
}

async function updateMembershipStatus(req, res, next) {
    const user_id = req.user.id;
    const { answer } = req.body;

    try {
        const lowercaseAnswer = answer.toLowerCase();
        if (lowercaseAnswer === process.env.STATUS_CODE) {
            await db.updateMembershipStatus(user_id);
            res.render("becomeMember", {status: true});
        } else if (lowercaseAnswer !== process.env.STATUS_CODE) {
            res.render("becomeMember", {status: false, message: true});
        }
    } catch (err) {
        next(err)
    }

    
}

module.exports = { becomeMember, updateMembershipStatus }