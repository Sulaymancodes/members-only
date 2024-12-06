const { Router } = require('express');
const logInController = require('../controllers/logInController');
const logInRouter = Router();

logInRouter.get('/', logInController.logIn);

module.exports = logInRouter;