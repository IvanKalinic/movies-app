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

module.exports = router;
