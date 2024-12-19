const { Router } = require("express");
const becomeMemberRouter =  Router();
const becomeMemberController = require("../controllers/becomeMemberController");

becomeMemberRouter.get("/become-member", becomeMemberController.becomeMember);
becomeMemberRouter.post("/membership", becomeMemberController.updateMembershipStatus);

module.exports = becomeMemberRouter;