import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.github.com',
  auth: {
    username: 'shekhar-amura',
    password: '2769ea6e5ea9e0fd6d045756798cfa1f56b1bdba'
  }
});
