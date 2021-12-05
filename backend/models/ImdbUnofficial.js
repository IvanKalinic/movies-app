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
    },
    { timestamps: true }
);

const ImdbUnofficial = mongoose.model("ImdbUnofficial", ImdbUnofficialSchema);

module.exports = ImdbUnofficial;
