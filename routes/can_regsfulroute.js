const express = require("express");
const router = express.Router();
const can_regsfulController = require("../controllers/can_regsfulcontroller");


router.get("/",can_regsfulController.getcan_regsful);


module.exports = router;