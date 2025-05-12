import axios from 'axios';

const API = axios.create({
  baseURL: 'https://prodigy-fs-02-d8ac.onrender.com/api',
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;