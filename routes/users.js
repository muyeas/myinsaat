const express = require("express");
const {
  createUser,
  updateUser,
  deleteUser,
  getUser,
  getUsers
} = require("../controllers/user");

const authenticateJWT = require('../middlewares/authenticateJWT');



const router = express.Router();

// create a user
router.post("/", authenticateJWT,createUser);

// get all users
router.get("/", getUsers);

// get a user
router.get("/:id", getUser);

// update a user
router.put("/:id", updateUser);

// delete a user
router.delete("/:id", deleteUser);

module.exports = router;