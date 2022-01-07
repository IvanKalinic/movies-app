const SERVER_BASE_URL = "http://localhost:5000";

export const fetchRecommendationByName = async (name) => {
  const response = await fetch(
    SERVER_BASE_URL + "/recommendation/movie-name/" + name
  );
  const movieNames = (await response.json()).movies;

  return movieNames;
};
