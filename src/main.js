import './assets/main.css'

import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import router from '././router'

// const app = createApp(App)

Vue.use(VueRouter) // Gunakan router
// app.mount('#app')

const router = new VueRouter({
  routes,
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
})
