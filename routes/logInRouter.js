const { Router } = require("express");
const passport = require('passport');
const logInController = require("../controllers/logInController");
const logInRouter = Router();

logInRouter.get("/log-in", logInController.logIn);
logInRouter.post("/log-in",  passport.authenticate('local', {
    successRedirect: '/members-only',
    failureRedirect: '/log-in'
   }));

module.exports = logInRouter;
