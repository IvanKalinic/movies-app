const axios = require("axios").default;

const modelAPI = "http://localhost:8000/movie/";

const movieService = require("./MovieService");

const recommendationFields = movieService.recommendationFields();

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

//TODO(tkurtovic): Remove mockUser when be starts supporting questionaire
const mockUser = {
  director: ["James Cameron", "Woody Allen"],
  actors: ["Brad Pitt", "Angelina Jolie"],
  genre: ["Drama", "Romance"],
};

const recommendForUser = async (userId) => {
  //fetch user from db

  //read random field (directors, actors, genres)
  let movies = [];
  let usedValues = [];
  let count = 0;

  while (movies.length < 5) {
    const field =
      recommendationFields[
        Math.floor(Math.random() * recommendationFields.length)
      ];
    const values = mockUser[field];
    let value = values[Math.floor(Math.random() * values.length)];

    if (usedValues.includes(value)) continue;

    usedValues.push(value);

    const res = await movieService.findByField(field, value);
    movies = [...movies, ...res];

    count += 1;
    if (count === 10) break;
  }
  return movies;
};

module.exports = {
  recommendByName,
  recommendForUser,
};
