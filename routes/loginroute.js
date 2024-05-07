const express = require("express");
const router = express.Router();
const loginController = require("../controllers/logincontroller");

router.get("/",loginController.getLogin);
router.post("/",loginController.postLogin);


module.exports = router;