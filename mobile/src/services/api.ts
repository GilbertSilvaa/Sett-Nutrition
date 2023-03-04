import axios from 'axios';
import { getAccessToken } from '../utils/access-token';

export const api = axios.create({
  baseURL: 'http://192.168.0.109:4000'
});