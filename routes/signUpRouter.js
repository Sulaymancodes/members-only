const signUpController = require('../controllers/signUpController');
const { Router } =  require('express');
const signUpRouter = Router();

signUpRouter.get('/sign-up', signUpController.signUp);
signUpRouter.post('/sign-up', signUpController.createUser);

module.exports = signUpRouter;

