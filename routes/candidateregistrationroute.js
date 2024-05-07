const express = require("express");
const router = express.Router();
const candidateController = require("../controllers/candidateregistrationcontroller");

router.get("/",candidateController.getCandidateRegistration);
router.post("/",candidateController.postCandidateRegistration);

module.exports = router;