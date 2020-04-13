import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Authorization: 'token e2cebc6fdbb19fbef777d06912b1b30dcffb25a7'
  }
});