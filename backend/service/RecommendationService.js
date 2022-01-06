const axios = require("axios").default;

const modelAPI = "http://localhost:8000/movie/";

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

module.exports = {
  recommendByName,
};
