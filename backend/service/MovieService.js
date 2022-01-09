const ImdbUnofficial = require("../models/ImdbUnofficial");

const recommendationFields = () => ["directors", "actors", "genres"];

const dbFieldMapper = {
  directors: "director",
  actors: "actors",
  genres: "genre",
};

const findByField = async (field, value) => {
  let filter = {};
  const dbField = dbFieldMapper[field]

  if (dbField == "director") filter = { [dbField]: value };
  else filter = { [dbField]: { $in: value } };

  const movies = await ImdbUnofficial.find(filter).exec();
  return movies;
};

module.exports = {
  findByField,
  recommendationFields,
};
