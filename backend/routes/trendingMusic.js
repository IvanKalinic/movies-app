const router = require("express").Router();
const trendingMusic = require("../models/trendingMusic");

router.post("/save", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  try {
    const artists = req.body;
    const trendingMusicList = artists.map((artist) => {
      return {
        insertOne: {
          document: artist,
        },
      };
    });
    trendingMusic.collection
      .bulkWrite(trendingMusicList)
      .then((saved) =>
        res
          .status(200)
          .json("successfully saved music" + saved.getRawResponse())
      )
      .catch((error) => console.log(error));
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.get("/all", async (req, res) => {
  try {
    const trendingMusic = await trendingMusic.find({});
    res.status(200).json(trendingMusic);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
