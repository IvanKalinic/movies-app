import axios from "axios";

export const callOmdbApiBySearch = async (search) => {
    const response = await axios.get("http://www.omdbapi.com/?s=" + search + "&apikey=2cebb1ae");
    return response;
}

export const callOmdbApiById = (id) => {
    return axios.get("http://www.omdbapi.com/?i=" + id + "&apikey=2cebb1ae");
}
