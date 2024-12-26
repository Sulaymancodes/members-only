const { Router } = require('express');
const errorRouter = Router();

errorRouter.get("/error", (req, res) => {
    res.render("404page");
});

module.exports = errorRouter;