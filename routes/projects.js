const express = require("express");


const {
    createProject,
    updateProject,
    deleteProject,
    getProject,
    getProjects
} = require("../controllers/project");


const router = express.Router();


router.post("/addProject", createProject);


router.get("/getProjects", getProjects);


router.get("/getProject/:id", getProject);


router.put("/updateProject/:id", updateProject);


router.delete("/deleteProject/:id", deleteProject);

module.exports = router;