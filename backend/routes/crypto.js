const router = require("express").Router();
const Crypto = require("../models/Crypto");

router.post("/save", async (req, res) => {
    console.log(req.body);
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    try {
        const cryptos = req.body;
        const cryptoCurrencies = cryptos.map((crypto) => {
            return {
                'insertOne': {
                    'document': crypto,
                }};
        });
        Crypto.collection.bulkWrite(cryptoCurrencies)
            .then(saved => res.status(200).json("succesfully saved crypto currencies "
                + saved.getRawResponse()))
            .catch((error) => console.log(error));
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

module.exports = router;
