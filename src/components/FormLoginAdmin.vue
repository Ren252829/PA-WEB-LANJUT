<template>
  <div v-if="showLoginForm" class="overlay">
    <div class="login-form">
      <button class="close-button" @click="closeLoginForm">&times;</button>
      <h2>Login Admin</h2>
      <hr />
      <form @submit.prevent="handleSubmit">
        <div>
          <input
            type="email"
            name="email"
            id="email"
            v-model="email"
            required
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            id="password"
            v-model="password"
            required
            placeholder="Password"
          />
        </div>
        <div class="checkbox-item">
          <input type="checkbox" id="remember" v-model="remember" />
          <label for="remember">Remember Me</label>
        </div>
        <button type="submit">Login</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import axios from '../axios' // Pastikan axios sudah terpasang

export default {
  name: 'FormLoginAdmin',
  data() {
    return {
      email: '',
      password: '',
      remember: false,
      showLoginForm: true,
      errorMessage: '',
    }
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post('/login', {
          email: this.email,
          password: this.password,
        });
        console.log('Login successful:', response.data);
        // Simpan token di localStorage
    if (response.data?.token) {
      localStorage.setItem('token', response.data.token);
      alert('Login berhasil');
    } else {
      alert('Login gagal, token tidak ditemukan');
    }
        // Jika berhasil login, arahkan ke halaman dashboard
        this.$router.push('/dashboard');
      } catch (error) {
        // Tangani error dengan lebih detail
        if (error.response) {
          console.error('Response error:', error.response.data);
          this.errorMessage = error.response.data.message || 'Login failed';
        } else if (error.request) {
          console.error('No response received:', error.request);
          this.errorMessage = 'No response from the server. Please try again later.';
        } else {
          console.error('Error during request setup:', error.message);
          this.errorMessage = 'An error occurred. Please try again.';
        }
      }
    },
    closeLoginForm() {
      this.showLoginForm = false;
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
/* Gaya CSS untuk form login tetap sama seperti sebelumnya */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.login-form {
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 50px 200px;
  border-radius: 20px;
  z-index: 1001;
  position: relative;
}

.close-button {
  background-color: rgba(92, 41, 170, 0.8);
  border: none;
  border-radius: 4px;
  color: black;
  cursor: pointer;
  font-size: 1.6em;
  width: 30px;
  position: absolute;
  top: 10px;
  right: 10px;
}

h2 {
  color: black;
  font-size: 32px;
  font-weight: bold;
}

hr {
  height: 2px;
  background-color: rgba(92, 41, 170, 0.8);
  border: none;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}

form input {
  width: 400px;
  padding: 10px;
}

form .checkbox-item {
  display: block;
}

#remember {
  width: 30px;
}

label {
  color: black;
}

form button {
  padding: 15px;
  font-size: 14px;
  background-color: rgba(92, 41, 170, 0.8);
  border: none;
  border-radius: 4px;
}

button {
  color: white;
  transition: transform 0.3s, text-shadow 0.3s; /* Transisi untuk transform dan text-shadow */
}

button:hover {
  transform: scale(1.2);
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.8), 0 0 10px rgba(255, 255, 255, 0.6); /* Efek bercahaya */
}

.error {
  color: red;
  font-size: 14px;
  text-align: center;
}

</style>
