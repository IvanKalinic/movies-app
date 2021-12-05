const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const passport = require("passport");
const dotenv = require("dotenv");
const User = require("./models/User");

dotenv.config();

passport.use(
  new GithubStrategy(
    {
      clientID: "dfgl",
      clientSecret: "ksdhfj",
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

passport.use(
   new FacebookStrategy(
     {
       clientID: "290690419616062",
       clientSecret: "40d36edf93cd9a99026fd30aa0811c36",
       callbackURL: "/auth/facebook/callback",
     },
     (accessToken, refreshToken, profile, done) => {
         console.log(profile);
       User.findOrCreate(
         {
           facebookId: profile.id,
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

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
