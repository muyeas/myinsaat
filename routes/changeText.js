const express = require("express");


const {
    updateText,
    getTexts,
    createText
} = require("../controllers/changeText.js");


const router = express.Router();


router.get("/getTexts", getTexts);

router.post("/createTexts", createText);

router.put("/updateTexts/:id", updateText);

module.exports = router;