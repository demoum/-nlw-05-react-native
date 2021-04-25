import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/demoum/plantManager-nlw'
});

export default api;