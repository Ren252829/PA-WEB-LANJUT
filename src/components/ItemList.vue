<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
  />

  <div class="item-list">
    <div class="item" v-for="item in items" :key="item.id">
      <img :src="item.imageUrl" alt="Image" />
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
    </div>
  </div>

  <h1>Projects</h1>
  <div v-if="isLoggedIn">
    <ActionButton />
  </div>

  <div class="menu">
    <div class="menu-item active" id="photography">
      <i class="icon">&#128247;</i>
      <!-- Icon Photography -->
      <span>Photography</span>
    </div>
    <div class="menu-item" id="videography">
      <i class="icon">&#127909;</i>
      <!-- Icon Videography -->
      <span>Videography</span>
    </div>
    <div class="menu-item" id="voice-over">
      <i class="icon">&#127908;</i>
      <!-- Icon Voice Over -->
      <span>Voice Over</span>
    </div>
  </div>

  <h1 class="comingSoon">Coming Soon</h1>
</template>

<script>
import ActionButton from './ActionButton.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'ItemList',
  components: {
    ActionButton,
  },
  computed: {
    ...mapGetters(['isLoggedIn', 'getUser']), // Menggunakan getters dari Vuex
    user() {
      return this.getUser // Ambil informasi user dari Vuex
    },
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    console.log('Navbar mounted')
  },
  created() {
    this.$store.dispatch('checkSession') // Memeriksa sesi saat komponen di-mount
  },
}

// Set Photography as default active on page load
document.addEventListener('DOMContentLoaded', function () {
  // const defaultItem = document.querySelector('#photography')
  // defaultItem.classList.add('active')
})

// Add event listeners to menu items
document.querySelectorAll('.menu-item').forEach(item => {
  item.addEventListener('click', function () {
    // Remove 'active' class from all items
    alert('tekan')
    document.querySelectorAll('.menu-item').forEach(i => {
      i.classList.remove('active')
    })

    // Add 'active' class to the clicked item
    this.classList.add('active')
  })
})
</script>

<style scoped>
/* Gaya CSS untuk ItemList */
.item-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.item {
  width: calc(33.33% - 20px); /* Sesuaikan dengan lebar item */
  margin-bottom: 20px;
}

h1 {
  text-align: center;
  font-weight: bold;
}

.tombol-tombol {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

button {
  padding: 10px 20px;
  border: none;
  background-color: #333;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
}

.comingSoon {
  color: hsla(160, 100%, 37%, 1);
}
.menu {
  display: flex;
  /* border: 1px dashed #c4c4c4; */
  padding: 10px;
  align-items: center;
  justify-content: center;
}

.menu-item {
  display: flex;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
  font-size: 14px;
  color: #333;
}

.icon {
  margin-right: 5px;
  font-size: 18px;
}

.menu-item span {
  font-weight: bold;
  color: #999;
}

.menu-item:not(:last-child)::after {
  content: '|';
  margin-left: 10px;
  color: #999;
}

.menu-item.active span {
  color: white; /* Warna teks aktif */
  border-bottom: 2px solid white; /* Garis bawah untuk item aktif */
}

/* Gaya lainnya sesuai dengan wireframe */
</style>
