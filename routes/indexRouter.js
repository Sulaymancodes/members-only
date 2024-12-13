const { Router } = require('express');
const indexController = require('../controllers/indexController');
const indexRouter = Router();

indexRouter.get("/members-only", indexController.getIndex);
indexRouter.get("/log-out", indexController.logOutUser);

module.exports = indexRouter;