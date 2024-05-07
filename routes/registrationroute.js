const express = require("express");
const router = express.Router();
const registrationController = require("../controllers/registrationcontroller");

router.get("/",registrationController.getRegistration);

module.exports = router;