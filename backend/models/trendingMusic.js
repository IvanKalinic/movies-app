const mongoose = require("mongoose");

const trendingMusicSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    playcount: {
      type: Number,
      default: "",
    },
    listeners: {
      type: Number,
      default: "",
    },
    url: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const trendingMusic = mongoose.model("trendingMusic", trendingMusicSchema);

module.exports = trendingMusic;
