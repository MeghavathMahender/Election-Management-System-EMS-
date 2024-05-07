const express = require("express");
const router = express.Router();
const manifestoController = require("../controllers/uploadmanifestocontroller");

router.get("/",manifestoController.getUploadManifesto);
router.post("/",manifestoController.postUploadManifesto);

module.exports = router;