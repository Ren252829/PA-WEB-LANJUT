// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../components/Home.vue'
// import FormPemesanan from '../components/FormPemesanan'
import FormLoginAdmin from './components/FormLoginAdmin.vue'
import FormTambahProject from './components/FormTambahProject.vue'
import FormEditProject from './components/FormEditProject.vue'
import ItemList from './components/ItemList.vue'
import ActionButton from './components/ActionButton.vue'

const routes = [
  {
    path: '/login',
    name: 'LoginAdmin',
    component: FormLoginAdmin,
  },
  {
    path: '/add',
    name: 'Add Project',
    component: FormTambahProject,
  },
  {
    path: '/edit',
    name: 'Edit Project',
    component: FormEditProject,
  },
  {
    path: '/dashboard',
    name: 'Admin Dashboard',
    component: ActionButton,
  },
]

// Buat instance router
// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// })

export default routes
