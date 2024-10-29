// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../components/Home.vue'
// import FormPemesanan from '../components/FormPemesanan'
import FormLoginAdmin from './components/FormLoginAdmin.vue'

const routes = [
  {
    path: '/login',
    name: 'LoginAdmin',
    component: FormLoginAdmin,
  },
  // {
  //   path: '/', // Route untuk form
  //   name: 'FormPemesanan',
  //   component: FormPemesanan,
  // },
]

// Buat instance router
// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// })

export default router
