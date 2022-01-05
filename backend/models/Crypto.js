const mongoose = require("mongoose");

const CryptoSchema = new mongoose.Schema(
    {
        pair_ID: {
            type: Number,
            default: 0,
        },
        search_main_text: {
            type: String,
            default: "",
        },
        search_main_subtext: {
            type: String,
            default: "",
        },
        search_main_longtext: {
            type: String,
            default: "",
        },
        exchange_flag_ci: {
            type: Number,
            default: 0,
        }
    },
    { timestamps: true }
);

const Crypto = mongoose.model("Crypto", CryptoSchema);

module.exports = Crypto;
