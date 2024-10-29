<template>
  <div class="login-form">
    <button class="close-button">&times;</button>
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
</template>

<script>
export default {
  name: 'FormLoginAdmin',
  data() {
    return {
      username: '',
      password: '',
      remember: false,
    }
  },
  methods: {
    handleSubmit() {
      // Logika untuk mengirimkan data login ke server
      console.log('Username:', this.username)
      console.log('Password:', this.password)
      console.log('Ingat saya:', this.remember)

      // Ganti dengan logika autentikasi Anda
      // Misalnya, kirim data ke API backend menggunakan axios
      axios
        .post('/api/login', {
          username: this.username,
          password: this.password,
        })
        .then(response => {
          // Handle response sukses
          console.log('Login berhasil:', response.data)
          // Redirect ke halaman dashboard atau halaman utama
          this.$router.push('/dashboard')
        })
        .catch(error => {
          // Handle error
          console.error('Login gagal:', error.response.data)
        })
    },
  },
  mounted() {
    console.log('Navbar mounted')
  },
}
</script>

<style scoped>
/* Gaya CSS untuk form login */
.login-form {
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 50px 200px;
  border-radius: 20px;
  margin: 4rem;
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
  right: 200px;
}

h2 {
  color: black;
  font-size: 32px;
  font-weight: bold;
}

hr {
  height: 20px;
  background-color: hsla(160, 100%, 37%, 1);
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
