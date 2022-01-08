const ImdbUnofficial = require("../models/ImdbUnofficial");

const recommendationFields = () => ["director", "actors", "genre"];

const findByField = async (field, value) => {
  let filter = {};

  if (field == "director") filter = { [field]: value };
  else filter = { [field]: { $in: value } };

  const movies = await ImdbUnofficial.find(filter).exec();
  const uniqueTitles = [
    ...new Map(movies.map((item) => [item["title"], item])).values(),
  ];
  return uniqueTitles;
};

module.exports = {
  findByField,
  recommendationFields,
};
