<template>
  <div id="app">
    <Navbar />
    <Header />
    <ItemList :items="itemsData" />
    <About />
    <FormPemesanan />
    <Footer />
    <!-- <router-link to="/login">Login</router-link>
    <router-view></router-view> -->
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'
import ItemList from './components/ItemList.vue'
import About from './components/About.vue'
import FormPemesanan from './components/FormPemesanan.vue'
import FormLoginAdmin from './components/FormLoginAdmin.vue'
import FormTambahProject from './components/FormTambahProject.vue'
import FormEditProject from './components/FormEditProject.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Header,
    ItemList,
    About,
    FormPemesanan,
    Footer,
    FormLoginAdmin,
    FormEditProject,
    FormTambahProject,
  },
  data() {
    return {
      itemsData: [
        // Data untuk komponen ItemList
      ],
    }
  },
}
</script>

<style scoped>
/* App.vue */
</style>
