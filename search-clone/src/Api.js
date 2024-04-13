import axios from 'axios';

const searchImg = async() => {
    const resp = await axios.get(`https://api.unsplash.com/search/photos`, {
        headers: {
            Authorization: "Client-ID EzlK5lpw1PyQniBx3nCf2eRe0NKQ3nHdov4KzijZvnM"
        },
        params: {
            query: 'suit'
        }
    });
    console.log(resp)
    return resp;
}

export default searchImg