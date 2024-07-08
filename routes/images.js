const express = require("express");


const {
    updateImage,
    getImages,
    createImage
} = require("../controllers/image.js");
const jwt = require('jsonwebtoken');
const authenticateJWT = require("../middlewares/authenticateJWT")


const router = express.Router();


router.get("/getImages",  getImages);

router.post("/createImage", authenticateJWT, createImage);

router.put("/updateImage/:id", authenticateJWT, updateImage);

module.exports = router;