const axios = require("axios").default;

const modelAPI = "http://localhost:8000/movie/";

const movieService = require("./MovieService");

const recommendationFields = movieService.recommendationFields();

const User = require("../models/User");

const recommendByName = async (name) => {
  return axios
    .get(`${modelAPI}/${name}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};

const recommendForUser = async (userId) => {
  const user = await User.findOne({ _id: userId }).exec();
  const userPrefs = JSON.parse(user.preferences);

  //read random field (directors, actors, genres)
  let movies = [];
  let usedValues = [];
  let count = 0;

  while (movies.length < 5) {
    if (count == 10) break;
    count += 1;

    const field =
      recommendationFields[
        Math.floor(Math.random() * recommendationFields.length)
      ];
    const values = userPrefs[field];

    let value = values[Math.floor(Math.random() * values.length)];

    if (usedValues.includes(value)) continue;

    usedValues.push(value);

    const res = await movieService.findByField(field, value);

    for (let i = 0; i < res.length; i++) {
      movies.push(res[i]);
      if (movies.length == 5) {
        count = 10;
        break;
      }
    }
  }

  const uniqueTitles = [
    ...new Map(movies.map((item) => [item["title"], item])).values(),
  ];

  return uniqueTitles;
};

module.exports = {
  recommendByName,
  recommendForUser,
};
