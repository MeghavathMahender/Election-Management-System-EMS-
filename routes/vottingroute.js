

const express = require("express");
const router = express.Router();
const vottingController = require("../controllers/vottingcontroller");

router.get("/",vottingController.getVotting);
router.post("/",vottingController.postVotting);


module.exports = router;