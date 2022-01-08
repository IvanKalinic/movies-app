const ImdbUnofficial = require("../models/ImdbUnofficial");

const recommendationFields = () => ["director", "actors", "genre"];

const findByField = async (field, value) => {
  let filter = {};

  if (field == "director") filter = { [field]: value };
  else filter = { [field]: { $in: value } };

  const movies = await ImdbUnofficial.find(filter).exec();
  return movies;
};

module.exports = {
  findByField,
  recommendationFields,
};
