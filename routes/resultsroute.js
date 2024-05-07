const express = require("express");
const router = express.Router();
const resultsController = require("../controllers/resultscontroller");

router.get("/",resultsController.getResults);

module.exports = router;