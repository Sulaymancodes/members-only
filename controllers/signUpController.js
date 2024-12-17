const { body, validationResult } = require("express-validator");
const bcryptjs = require('bcryptjs');
const db = require('../db/queries')

const validatePassword = [
    body("password")
        .notEmpty().withMessage("Password cannot be empty")
        .isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
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
        bcryptjs.hash(password, 10, async (err, hashedPassword) => {
            try {
                await db.addUser(firstName, lastName, username, hashedPassword);
                res.redirect('/log-in');
            } catch (err) {
                return next(err)
            }
        })
    }
]

module.exports = { signUp, createUser };