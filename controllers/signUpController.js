const { body, validationResult } = require("express-validator");
const db = require('../db/queries')

const validatePassword = [
    body("password"),
    body("confirm-password").custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error ("Passwords Do Not Match");
        }
        return true;
      }),
]

function signUp (req, res) {
    res.render("sign-up")
}

const createUser = [
    validatePassword,
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).render("sign-up",
                {errors: errors.array()})
        }
        const { firstName, lastName, username, password} = req.body;
        await db.addUser(firstName, lastName, username, password);
        res.redirect('/log-in');
    }
]

module.exports = { signUp, createUser };