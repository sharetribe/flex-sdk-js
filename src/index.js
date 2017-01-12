import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

const getUsers = () => instance.get('/users');

export default getUsers;
