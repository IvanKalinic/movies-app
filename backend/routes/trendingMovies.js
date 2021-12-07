const router = require("express").Router();
const trendingMovie = require("../models/trendingMovie");

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
module.exports = router;
