const db = require("../db/queries");

async function getSettings (req, res, next) {
    try {
        if (req.isAuthenticated()) {
            const user = await db.getUser(req.user.id);
            res.render("settings", {user: user, update: false});
        } else {
            res.send("You are not Authenticated to visit this site");
        }
    } catch (err) {
        next(err)
    }
}

async function updateUser(req, res, next) {
    try {
        const user_id = req.user.id;
        const user = await db.getUser(req.user.id);
        const { firstName, lastName, username, password } = req.body;
        await db.updateUser(firstName,lastName,username,password,user_id);
        res.render("settings", {user: user, update: true});
    } catch (err){
        next(err)
    }
}

module.exports = { getSettings, updateUser }