import axios from "axios";

var options = {
    method: 'GET',
    url: 'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/',
    headers: {
        'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com',
        'x-rapidapi-key': 'de19b552d2mshf72d708fe2d4889p172e0ejsn2263d7aad5f6'
    }
};

export const callImdbUnofficial = async (search) => {
    const optionWithSearchedText = { ...options, url: options.url + search};
    const response = await axios.request(optionWithSearchedText);
    return response;
}
