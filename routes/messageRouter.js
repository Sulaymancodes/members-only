const { Router } = require("express");
const messageController = require("../controllers/messageController");
const messageRouter = Router();

messageRouter.get("/write-message", messageController.getWriteMessage);
messageRouter.post("/add-message", messageController.addMessage);

module.exports = messageRouter;