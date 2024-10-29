<template>
  <div id="app">
    <Navbar />
    <Header />
    <router-view></router-view>
    <ItemList :items="itemsData" />
    <About />
    <FormPemesanan />
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

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
  computed: {
    ...mapGetters(['allItems']),
    items() {
      return this.allItems
    },
  },
  created() {
    this.$store.dispatch('fetchItems')
  },
}
</script>

<style scoped>
/* App.vue */
</style>
