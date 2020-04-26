import axios from 'axios';

export default axios.create({
  baseURL: 'https://github.com/',
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
});
