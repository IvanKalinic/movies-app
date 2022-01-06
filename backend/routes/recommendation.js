const router = require("express").Router();
const recommendationService = require("../service/RecommendationService")

router.get("/movie-name/:name", (req, res) => {
    res.send(recommendationService.recommendByName(req.params.name))
});

module.exports = router;
