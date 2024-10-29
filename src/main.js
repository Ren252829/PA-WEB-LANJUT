import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import App from './App.vue'

// Membuat instance router untuk Vue 3
const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Membuat aplikasi Vue 3
const app = createApp(App)

// Menggunakan router dalam aplikasi
app.use(router)

// Mounting aplikasi ke elemen dengan id `app`
app.mount('#app')
