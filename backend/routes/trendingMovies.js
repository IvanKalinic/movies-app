const router = require("express").Router();
const trendingMovie = require("../models/trendingMovie");
const axios = require("axios");
const ImdbUnofficial = require("../models/ImdbUnofficial");

const BASE_MOVIES_URL = "https://api.themoviedb.org/3/";

router.post("/save", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  try {
    const movies = req.body;
    const trendingMovies = movies.map((movie) => {
      return {
        insertOne: {
          document: movie,
        },
      };
    });
    trendingMovie.collection
      .bulkWrite(trendingMovies)
      .then((saved) =>
        res
          .status(200)
          .json("succesfully saved movies" + saved.getRawResponse())
      )
      .catch((error) => console.log(error));
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.get("/all", async (req, res) => {
  try {
    const trendingMovies = await trendingMovie.find({});
    res.status(200).json(trendingMovies);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/today", async (req, res) => {
  try {
    console.log("today");
    axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=072d8ad701f4b1e7a0992aca4119d6e4").then(movies => {
      const titles = movies.data.results.map(r => r.title) || [];
      console.log(titles);
      const createdMovies = titles.map(title => axios.get("http://www.omdbapi.com/?t=" + title + "&apikey=2cebb1ae"));
      Promise.all(createdMovies.map(reflect)).then(function(results){
        res.status(200).json(results);
      });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/week", async (req, res) => {
  try {
    console.log("week");
    axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=072d8ad701f4b1e7a0992aca4119d6e4").then(movies => {
      const titles = movies.data.results.map(r => r.title) || [];
      console.log(titles);
      const createdMovies = titles.map(title => axios.get("http://www.omdbapi.com/?t=" + title + "&apikey=2cebb1ae"));
      Promise.all(createdMovies.map(reflect)).then(function(results){
        res.status(200).json(results);
      });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

async function getMovie(title) {
  /*const promis = new Promise({});
  ImdbUnofficial.find({title: title}, function (err, doc) {
    if (doc.length > 0) {
      promis.resolve(() => doc[0]);
    } else {
      axios.get("http://www.omdbapi.com/?t=" + title + "&apikey=2cebb1ae").then(async (resp) => {
        return resp.data;
      }).catch(err => console.log(err));
    }
  });
  return promis;

   */
  axios.get("http://www.omdbapi.com/?t=" + title + "&apikey=2cebb1ae").then((resp) => {
    return resp.data;
  }).catch(err => console.log(err));
}

function reflect(promise){
  return promise.then(function(v){
        return v.data;
    },
      function(e){ console.log(e)});
}

module.exports = router;
