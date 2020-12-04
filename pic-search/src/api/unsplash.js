import axios from 'axios';
export default axios.create({
    headers:{
        Authorization: 'Client-ID KeyFromUnsplash'
    },
    baseURL: 'https://api.unsplash.com'
});