import axios from 'axios';

// Konfigurasi instance axios jika diperlukan
const instance = axios.create({
  baseURL: 'http://localhost:8000/api', // Ubah URL sesuai dengan kebutuhan
  timeout: 1000,
});

// Ekspor default instance axios
export default instance;
