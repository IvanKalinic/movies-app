const GithubStrategy = require("passport-github2").Strategy;
const passport = require("passport");
const dotenv = require("dotenv");
const User = require("./models/User");

dotenv.config();

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOrCreate(
        {
          githubId: profile.id,
          username: profile.displayName,
          email: profile.emails ? profile.emails[0].value : "",
          profilePicture: profile.photos ? profile.photos[0].value : "",
        },
        (err, user) => {
          console.log("New user added" + user);
          return done(err, user);
        }
      );
    }
  )
);

// passport.use(
//   new FacebookStrategy(
//     {
//       clientID: process.env.FACEBOOK_APP_ID,
//       clientSecret: process.env.FACEBOOK_APP_SECRET,
//       callbackURL: "/auth/facebook/callback",
//     },
//     (accessToken, refreshToken, profile, done) => {
//       User.findOrCreate(
//         {
//           facebookId: profile.id,
//           username: profile.displayName,
//           email: profile.emails ? profile.emails[0].value : "",
//           profilePicture: profile.photos ? profile.photos[0].value : "",
//         },
//         (err, user) => {
//           console.log("New user added" + user);
//           return done(err, user);
//         }
//       );
//     }
//   )
// );

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
