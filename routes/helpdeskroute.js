const express = require("express");
const router = express.Router();
const helpDeskController = require("../controllers/helpdeskcontroller");

router.get("/",helpDeskController.getHelpDesk);
router.post("/",helpDeskController.postHelpDesk);

module.exports = router;