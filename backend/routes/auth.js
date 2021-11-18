const router = require("express").Router();
const passport = require("passport");
const dotenv = require("dotenv");

dotenv.config();

router.get("/login/success", (req, res) => {
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
  res.redirect(process.env.CLIENT_URL);
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

// router.get(
//   "/facebook",
//   passport.authenticate("facebook", { scope: ["profile,user:email"] })
// );

// router.get(
//   "/facebook/callback",
//   passport.authenticate("facebook", {
//     successRedirect: process.env.CLIENT_URL,
//     failureRedirect: "/login/failed",
//   })
// );

module.exports = router;
