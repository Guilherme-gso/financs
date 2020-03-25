import axios from 'axios';
import {getToken} from './auth';

const api = axios.create({
  baseURL: "http://localhost:3002"
});

api.interceptors.request.use(config => {
  const token = getToken();

  if(token) config.headers.authorization = `Bearer ${token}`;

  return config;
});

export {api};