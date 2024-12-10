import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import App from './App.vue'
import { VueEmailPlugin } from 'vue-email'
import store from './store' // Pastikan ini mengarah ke store Vuex Anda

// Membuat instance router untuk Vue 3
const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Membuat aplikasi Vue 3
const app = createApp(App)

// Menggunakan store dan router dalam aplikasi
app.use(store) // Pastikan untuk menggunakan store di sini
app.use(router)

//email
app.use(VueEmailPlugin, {
  baseUrl: 'https://google.com',
})

// Memeriksa sesi saat aplikasi dimulai
store.dispatch('checkSession')

// Mounting aplikasi ke elemen dengan id `app`
app.mount('#app')
