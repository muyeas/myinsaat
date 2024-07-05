const express = require("express");
const {
  createUser,
  updateUser,
  deleteUser,
  getUser,
  getUsers
} = require("../controllers/user");

const User = require("../models/User");


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

  res.json({ token });
});
// get all users
router.get("/", getUsers);

// get a user
router.get("/:id", getUser);

// update a user
router.put("/:id", updateUser);

// delete a user
router.delete("/:id", deleteUser);

module.exports = router;