const express = require("express");
const router = express.Router();
const ballotController = require("../controllers/ballotcontroller");

router.get("/",ballotController.getBallot);

module.exports = router;