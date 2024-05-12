const express = require("express");


const {
    updateImage,
    getImages,
    createImage
} = require("../controllers/image.js");


const router = express.Router();


router.get("/getImages", getImages);

router.post("/createImage", createImage);

router.put("/updateImage/:id", updateImage);

module.exports = router;