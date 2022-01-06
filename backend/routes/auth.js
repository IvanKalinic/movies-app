const router = require("express").Router();
const passport = require("passport");
const dotenv = require("dotenv");
const User = require("../models/User");
const bcrypt = require("bcrypt");

dotenv.config();

router.get("/login/success", (req, res) => {
  console.log(req.user);
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      //   cookies: req.cookies
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("http://localhost:3000/");
});

router.get(
  "/github",
  passport.authenticate("github", { scope: ["profile,user:email"] })
);

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

router.get(
    "/facebook",
    passport.authenticate("facebook")
);

router.get(
    "/facebook/callback",
    passport.authenticate("facebook", {
      successRedirect: "http://localhost:3000",
      failureRedirect: "/login/failed",
    })
);

router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.CLIENT_GOOGLE_CALLBACK_URL,
    failureRedirect: "/login/failed",
  })
);

module.exports = router;
