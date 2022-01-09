const router = require("express").Router();
const ImdbUnofficial = require("../models/ImdbUnofficial");

router.post("/save", async (req, res) => {
    console.log(req.body);
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    try {
        const movies = req.body;
        const imdbUnofficials = movies.map((movie) => {
            return {
                'insertOne': {
                    'document': movie,
                }};
        });
        ImdbUnofficial.collection.bulkWrite(imdbUnofficials)
            .then(saved => res.status(200).json("succesfully saved movies" + saved.getRawResponse()))
            .catch((error) => console.log(error));
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

router.get("/findByTitle", async (req, resp) => {
    const title = req.query.title;
    console.log(title);

    try {
        ImdbUnofficial.findOne({title: title}, function (err, movie) {
            resp.status(200).json(movie);
        });
    } catch (err) {
        console.log(err);
        resp.status(500).json(err);
    }

});

module.exports = router;
