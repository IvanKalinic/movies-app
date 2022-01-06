const router = require("express").Router();
const recommendationService = require("../service/RecommendationService");

router.get("/movie-name/:name", (req, res) => {
  recommendationService
    .recommendByName(req.params.name)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
