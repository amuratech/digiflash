import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Authorization: 'token' + ' ' + JSON.parse(localStorage.getItem("authDetails"))["accessToken"]
  }
});
