import axios from "axios";

const { REACT_APP_SERVER_BASE_URL } = process.env;

var options = {
  method: "GET",
  url: "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/",
  headers: {
    "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
    "x-rapidapi-key": "de19b552d2mshf72d708fe2d4889p172e0ejsn2263d7aad5f6",
  },
};

export const callImdbUnofficial = async (search) => {
  const optionWithSearchedText = { ...options, url: options.url + search };
  const response = await axios.request(optionWithSearchedText);
  return response;
};

export const fetchMovie = async (name) => {
  try {
    return await axios.get(
      REACT_APP_SERVER_BASE_URL + "/imdbUnofficial/findByTitle?title=" + name
    );
  } catch (err) {
    callImdbUnofficial(name);
    return err;
  }
};
