<template>
  <div v-if="showLoginForm" class="overlay">
    <div class="login-form">
      <button class="close-button" @click="closeLoginForm">&times;</button>
      <h2>Login Admin</h2>
      <hr />
      <form @submit.prevent="handleSubmit">
        <div>
          <input
            type="text"
            id="username"
            v-model="username"
            required
            placeholder="Username"
          />
        </div>
        <div>
          <input
            type="password"
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormLoginAdmin',
  data() {
    return {
      username: '',
      password: '',
      remember: false,
      showLoginForm: true, // Mengontrol tampilan form login
    }
  },
  methods: {
    handleSubmit() {
      // Logika untuk mengirimkan data login ke server
      console.log('Username:', this.username)
      console.log('Password:', this.password)
      console.log('Ingat saya:', this.remember)

      // Logika autentikasi ke server, misalnya menggunakan axios
      axios
        .post('/api/login', {
          username: this.username,
          password: this.password,
        })
        .then(response => {
          console.log('Login berhasil:', response.data)
          this.$router.push('/dashboard')
        })
        .catch(error => {
          console.error('Login gagal:', error.response.data)
        })
    },
    closeLoginForm() {
      this.showLoginForm = false
      this.$router.push('/')
    },
  },
}
</script>

<style scoped>
/* Gaya CSS untuk form login */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* Latar belakang gelap transparan */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Pastikan overlay berada di atas komponen lain */
}

.login-form {
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 50px 200px;
  border-radius: 20px;
  z-index: 1001; /* Form berada di atas overlay */
  position: relative;
}

.close-button {
  background-color: hsla(160, 100%, 37%, 1);
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
  background-color: hsla(160, 100%, 37%, 1);
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

form .chechbox-item {
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
  background-color: hsla(160, 100%, 37%, 1);
  border: none;
  border-radius: 4px;
}
</style>
