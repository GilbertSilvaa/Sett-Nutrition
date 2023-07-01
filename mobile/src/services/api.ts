import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://26.149.147.169:4000',
});