const express = require("express");
const router = express.Router();
const cancelNominationController = require("../controllers/cancelnominationcontroller");

router.get("/",cancelNominationController.getCancelNomination);
router.post("/",cancelNominationController.postCancelNomination);


module.exports = router;