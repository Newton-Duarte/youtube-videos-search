import axios from 'axios';

const KEY = 'AIzaSyA2-kGDdZQhAtamm-XR-0m6Cgw8Ofzw0rw';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});