var axios = require("axios").default;

var options = {
    method: 'GET',
    url: 'https://investing-cryptocurrency-markets.p.rapidapi.com/coins/search',
    params: {string: 'bit', time_utc_offset: '28800', lang_ID: '1'},
    headers: {
        'x-rapidapi-host': 'investing-cryptocurrency-markets.p.rapidapi.com',
        'x-rapidapi-key': 'de19b552d2mshf72d708fe2d4889p172e0ejsn2263d7aad5f6'
    }
};

export const callCryptoMarket = async (search) => {
    const optionWithSearchedText = { ...options, params: {string: search}};
    const response = await axios.request(optionWithSearchedText);
    return response;
}
