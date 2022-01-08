const SERVER_BASE_URL = "http://localhost:5000/recommendation";

export const fetchRecommendationByName = async (name) => {
  const response = await fetch(SERVER_BASE_URL + "/movie-name/" + name);
  const movieNames = (await response.json()).movies;

  return movieNames;
};

export const fetchRecommendationByUserPreference = async (userId) => {
  const response = await fetch(SERVER_BASE_URL + "/movie-other/" + userId);
  const movies = (await response.json()).recommendedMovies;

  return movies;
};
