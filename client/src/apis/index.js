const BASE_MOVIES_URL = "https://api.themoviedb.org/3/";

export const fetchTrendingMovies = async () => {
  const response = await fetch(
    BASE_MOVIES_URL + `trending/movie/day?api_key=072d8ad701f4b1e7a0992aca4119d6e4`
  );
  return response.json();
};
