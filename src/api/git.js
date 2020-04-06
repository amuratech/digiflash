import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.github.com',
  auth: {
    username: 'sonali-amura',
    password: 's0n@l!0609'
  }
});