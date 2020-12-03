import axios from 'axios';
export default axios.create({
    headers:{
        Authorization: 'Client-ID EzlK5lpw1PyQniBx3nCf2eRe0NKQ3nHdov4KzijZvnM'
    },
    baseURL: 'https://api.unsplash.com'
});