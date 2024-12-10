<template>
  <nav :class="['navbar', { 'scrolled': isScrolled }]">
    <div class="logo">
      <img src="../assets/infinitrylogowhite.png" alt="" />
    </div>
    <ul class="nav-menu">
      <a href="">Home</a>
      <a href="">Projects</a>
      <a href="">About</a>
      <a href="">Contact</a>
      <div v-if="isLoggedIn">
        <p>Welcome, {{ user.username }}!</p>
        <button>Log Out</button>
      </div>
      <div v-else>
        <router-link to="/login"><button>Login</button></router-link>
      </div>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Navbar',
  data() {
    return {
      isScrolled: false, // State untuk mendeteksi scroll
    }
  },
  computed: {
    ...mapGetters(['isLoggedIn', 'getUser ']),
    user() {
      return this.getUser    
    },
  },
  created() {
    this.$store.dispatch('checkSession') // Memeriksa sesi saat komponen di-mount
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll) // Menambahkan event listener scroll
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll) // Menghapus event listener saat komponen dihapus
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50; // Ubah nilai isScrolled berdasarkan posisi scroll
    },
  },
}
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 2rem 12rem; /* Padding default */
  transition: padding 0.3s ease, background 0.3s ease; /* Transisi untuk padding dan background */
  position: fixed; /* Membuat navbar tetap di atas */
  top: 0; /* Posisi di atas */
  left: 0; /* Posisi di kiri */
  right: 0; /* Posisi di kanan */
  background: linear-gradient(135deg, rgba(92, 41, 170, 0.8), rgba(198, 144, 255, 0.4)); /* Gradasi dengan opacity 80% */
  z-index: 1000; /* Pastikan navbar berada di atas konten lainnya */
}

.navbar.scrolled {
  padding: 1rem 16rem; /* Padding saat di-scroll */
  background: linear-gradient(135deg, rgba(92, 41, 170, 0.8), rgba(198, 144, 255, 0.4)); /* Gradasi saat di-scroll dengan opacity 80% */
}

.logo img {
  width: 100px;
}

.nav-menu {
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  gap: 20px;
}

button {
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: white;
  color: rgba(92, 41, 170, 0.8);
  transition: transform 0.3s, text-shadow 0.3s;;

}

button:hover{
  transform: scale(1.2);
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.8), 0 0 10px rgba(255, 255, 255, 0.6); /* Efek bercahaya */
}

a {
  color: white;
  transition: transform 0.3s, text-shadow 0.3s; /* Transisi untuk transform dan text-shadow */
}

a:hover {
  transform: scale(1.2);
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.8), 0 0 10px rgba(255, 255, 255, 0.6); /* Efek bercahaya */
}
</style>