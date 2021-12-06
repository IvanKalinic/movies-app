const BASE_MOVIES_URL = "https://api.themoviedb.org/3/";
const { REACT_APP_MOVIEDB_API_KEY } = process.env;

export const fetchTrendingMovies = async () => {
  const response = await fetch(
    BASE_MOVIES_URL + `trending/all/day?api_key=${REACT_APP_MOVIEDB_API_KEY}`
  );
  return response.json();
};
