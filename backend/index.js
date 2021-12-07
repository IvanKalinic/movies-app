const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoute = require("./routes/auth");
const manualRoute = require("./routes/manual");
const trendingMoviesRoute = require("./routes/trendingMovies");
const trendingMusicRoute = require("./routes/trendingMusic");
const passportSetup = require("./passport");
const bodyParser = require("body-parser");
const session = require("express-session");
const flash = require("express-flash");
const app = express();

dotenv.config();

const allowedOrigins = ["http://localhost:3000"];
app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true,
  })
);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(flash());
app.use(session({ secret: "secret", resave: false, saveUninitialized: false }));

app.use(passport.initialize());
app.use(passport.session());

app.use("/manual", manualRoute);
app.use("/auth", authRoute);
app.use("/trendingMusic", trendingMusicRoute);
app.use("/trendingMovies", trendingMoviesRoute);
app.get("/", (req, res) => {
  req.header("Access-Control-Allow-Origin", "http://localhost:3000");
  req.header("Access-Control-Request-Method", "http://localhost:3000");
});
app.listen("5000", () => {
  console.log("Server is running");
});
