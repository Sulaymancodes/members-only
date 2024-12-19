const { Router } = require("express");
const settingsRouter = Router();
const settingsController = require("../controllers/settingsController");

settingsRouter.get("/settings", settingsController.getSettings);

module.exports = settingsRouter;