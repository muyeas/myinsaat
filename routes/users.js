const express = require("express");
const {
  createUser,
  updateUser,
  deleteUser,
  getUser,
  getUsers
} = require("../controllers/user");

const User = require("../models/User");
const jwt = require('jsonwebtoken');
const authenticateJWT = require("../middlewares/authenticateJWT")



const router = express.Router();

// create a user
router.post("/", createUser);

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  console.log(user)

  if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ user }, 'your_secret_key', { expiresIn: '1h' });
  console.log('token: ', token)
  res.json({ token });
});
// get all users
router.get("/", authenticateJWT, getUsers);

// get a user
router.get("/:id",authenticateJWT,  getUser);

// update a user
router.put("/:id", authenticateJWT, updateUser);

// delete a user
router.delete("/:id", authenticateJWT, deleteUser);

module.exports = router;