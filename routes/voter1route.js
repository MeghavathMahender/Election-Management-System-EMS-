const express = require("express");
const router = express.Router();
const voterController = require("../controllers/voter1controller");

router.get("/",voterController.getVoterRegistration);
router.post("/", voterController.postVoterRegistration);

module.exports = router;