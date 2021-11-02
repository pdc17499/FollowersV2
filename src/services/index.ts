import * as API from './apiCall';
import axios from 'axios';
import { baseURL } from './apiURL';

export const INSTANCE = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // Authorization: _retrieveData(),
  },
});

export * from './apiURL';
export { API };
