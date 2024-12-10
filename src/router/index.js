// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Proteksi rute jika diperlukan
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('auth_token');

  if (to.meta.requiresAuth && !token) {
    next({ path: '/login' });
  } else {
    next();
  }
});

export default router;
