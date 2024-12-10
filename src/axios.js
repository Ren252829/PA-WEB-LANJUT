import axios from 'axios';

// Atur base URL untuk semua permintaan Axios
axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
axios.defaults.withCredentials = true; // Aktifkan denganCredentials

// Interceptor untuk menambahkan token ke setiap permintaan
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken'); // Ambil token dari localStorage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // Sertakan token dengan format Bearer
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
