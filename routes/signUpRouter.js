const signUpController = require('../controllers/signUpController');
const { Router } =  require('express');
const signUpRouter = Router();

signUpRouter.get('/', signUpController.signUp);
signUpRouter.post('/sign-up', signUpController.createUser);

module.exports = signUpRouter;

