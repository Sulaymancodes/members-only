const signUpController = require('../controllers/signUpController');
const { Router } =  require('express');
const signUpRouter = Router();

signUpRouter.get('/', signUpController.signUp);

module.exports = signUpRouter;

