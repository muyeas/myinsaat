const express = require("express");


const {
    createProject,
    updateProject,
    deleteProject,
    getProject,
    getProjects
} = require("../controllers/project");
const jwt = require('jsonwebtoken');
const authenticateJWT = require("../middlewares/authenticateJWT")


const router = express.Router();


router.post("/addProject", authenticateJWT,createProject);


router.get("/getProjects", authenticateJWT,getProjects);


router.get("/getProject/:id", authenticateJWT,getProject);


router.put("/updateProject/:id", authenticateJWT,updateProject);


router.delete("/deleteProject/:id", authenticateJWT,deleteProject);

module.exports = router;