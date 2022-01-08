const ImdbUnofficial = require("../models/ImdbUnofficial");

const recommendationFields = () => ["director", "actors", "genre"];

const find = async (filter) => await ImdbUnofficial.find(filter).exec();

const findByField = async (field, value) => {
  console.log(value);
  if (field == "actors") {
    //TODO (tkurtovic): fix this when db model changes
    return [];
  } else {
    const movies = await find({ [field]: value });
    const key = "title"
    const uniqueTitles = [...new Map(movies.map(item => [item[key], item])).values()]
    return uniqueTitles;
  }
};

module.exports = {
  findByField,
  recommendationFields,
};
