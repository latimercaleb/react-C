import axios from 'axios';
const ytKey = 'AIzaSyBCqX8V2TEpP8mfufs-YXzSpwDyeax3o_w';

export const DEFAULT_PARAMS = {
    part: "snippet",
    maxResults: 5,
    key: ytKey,
    type: "video"
}

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'
});