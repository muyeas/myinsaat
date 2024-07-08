const express = require("express");
const jwt = require('jsonwebtoken');
const authenticateJWT = require("../middlewares/authenticateJWT")


const {
    updateText,
    getTexts,
    createText
} = require("../controllers/changeText.js");


const router = express.Router();


router.get("/getTexts", getTexts);

router.post("/createTexts", authenticateJWT, createText);

router.put("/updateTexts/:id", authenticateJWT, updateText);

module.exports = router;