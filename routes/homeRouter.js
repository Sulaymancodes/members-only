const { Router } = require('express');
const homeController = require('../controllers/homeController');
const homeRouter = Router();

homeRouter.get("/members-only", homeController.getHome);
homeRouter.get("/log-out", homeController.logOutUser);

module.exports = homeRouter;