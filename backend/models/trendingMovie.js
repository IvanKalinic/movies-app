const mongoose = require("mongoose");

const trendingMovieSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
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

const trendingMovie = mongoose.model("trendingMovie", trendingMovieSchema);

module.exports = trendingMovie;
