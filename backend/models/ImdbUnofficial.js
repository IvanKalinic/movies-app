const mongoose = require("mongoose");

const ImdbUnofficialSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            default: "",
        },
        title: {
            type: String,
            default: "",
        },
        image: {
            type: String,
            default: "",
        },
        year: {
            type: Number
        },
        rating: {
            type: Number
        },
        plot: {
            type: String
        },
        actors: {
            type: String
        },
        director: {
            type: String
        },
        genre: {
            type: String
        },
        writer: {
            type: String
        }
    },
    { timestamps: true }
);

const ImdbUnofficial = mongoose.model("ImdbUnofficial", ImdbUnofficialSchema);

module.exports = ImdbUnofficial;
