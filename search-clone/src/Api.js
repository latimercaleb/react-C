import axios from 'axios';

const searchImg = async(text) => {
    const resp = await axios.get(`https://api.unsplash.com/search/photos`, {
        headers: {
            Authorization: "Client-ID EzlK5lpw1PyQniBx3nCf2eRe0NKQ3nHdov4KzijZvnM"
        },
        params: {
            query: text
        }
    });
    console.log(resp)
    const responseBody = resp.data.results;
    return responseBody;
}

export default searchImg