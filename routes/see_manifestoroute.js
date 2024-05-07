const express = require("express");
const router = express.Router();
const see_manifestoController = require("../controllers/see_manifestocontroller");


router.get("/",see_manifestoController.getsee_manifesto);



module.exports = router;