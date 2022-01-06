const BASE_MOVIES_URL = "https://api.themoviedb.org/3/";
const BASE_RADIO_URL =
  "https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=";
// const { REACT_APP_MOVIEDB_API_KEY, REACT_APP_RADIOAPI_KEY } = process.env;

export const fetchTrendingMovies = async () => {
  const response = await fetch(
    BASE_MOVIES_URL + `trending/movie/day?api_key=072d8ad701f4b1e7a0992aca4119d6e4`
  );
  return response.json();
};

/*export const fetchTrendingMusic = async () => {
  const response = await fetch(
    BASE_RADIO_URL + `${REACT_APP_RADIOAPI_KEY}&format=json`
  );
  return response.json();
};*/
