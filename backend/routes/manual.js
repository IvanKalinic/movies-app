const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  console.log(req.body);
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.user.password, salt);
    const newUser = new User({
      username: req.body.user.username,
      email: req.body.user.email,
      password: hashedPassword,
    });
    const registeredUser = await newUser.save();
    res.status(200).json(registeredUser);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  try {
    const user = await User.findOne({ email: req.body.user.email });
    !user && res.status(404).send("User not found");

    const validPassword = await bcrypt.compare(
      req.body.user.password,
      user.password
    );
    !validPassword && res.status(400).send("Wrong password");

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
