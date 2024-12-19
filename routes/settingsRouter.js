const { Router } = require("express");
const settingsRouter = Router();
const settingsController = require("../controllers/settingsController");

settingsRouter.get("/settings", settingsController.getSettings);
settingsRouter.post("/update-user", settingsController.updateUser);

module.exports = settingsRouter;