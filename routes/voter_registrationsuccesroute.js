const express = require("express");
const router = express.Router();
const voter_registrationsuccesController = require("../controllers/voter_registrationsuccescontroller");

router.get("/",voter_registrationsuccesController.getvoter_registrationsucces);

module.exports = router;