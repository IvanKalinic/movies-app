const router = require("express").Router();
const recommendationService = require("../service/RecommendationService");

router.get("/movie-name/:name", (req, res) => {
  recommendationService
    .recommendByName(req.params.name)
    .then((result) => {
      res.json({ movies: result });
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/movie-other/:userId", (req, res) => {
  recommendationService
    .recommendForUser(req.params.userId)
    .then((result) => {
      res.json({ recommendedMovies: result });
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
