const GithubStrategy = require("passport-github2").Strategy;
const passport = require("passport");
const User = require("./models/User");
var findOrCreate = require("mongoose-findorcreate");

GITHUB_CLIENT_ID = "Iv1.f0be3173830dd41e";
GITHUB_CLIENT_SECRET = "f3a9af8c89934b4764fc95d1d11ac05c4ed3b8f9";

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOrCreate(
        { githubId: profile.id, username: profile.displayName },
        function (err, user) {
          console.log("New user added" + user);
          return done(err, user);
        }
      );
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

// passport.deserializeUser((user, done) => {
//   done(null, user);
// });

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
