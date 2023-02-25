import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
        'Bearer N239cQ-wna81lAmtbdS7vyAUDScUcfKopTxHUJwDHpDCsbuNOFIQNY9sjEVKX8gmjeSMfxMTXwGv9Ero_QhLoWYRIBEgleBa3aLIdqcd0kuNtfNtbXpbXMDY00LzY3Yx'
    }
});