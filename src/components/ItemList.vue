<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
  />

  <div class="item-list">
    <div class="item" v-for="item in items" :key="item.id" @click="onProjectClick(item)">
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
    <div class="menu-item active" @click="toast" id="photography">
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
import ActionButton from './ActionButton.vue';
import { mapGetters } from 'vuex';
import { getAllProjects, getProjectById } from '../services/projectService.js';

import { defineComponent } from 'vue'
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'

export default {
  name: 'ItemList',
  components: {
    ActionButton,
  },
  setup(){
    const toast = () => {
        createToast('Wow, easy')
    }
    return { toast }
  },
  computed: {
    ...mapGetters(['isLoggedIn', 'getUser']), // Menggunakan getters dari Vuex
    user() {
      return this.getUser; // Ambil informasi user dari Vuex
    },
  },
  data() {
    return {
      items: [], // Daftar proyek yang akan ditampilkan
    };
  },
  async mounted() {
    console.log('Component mounted');
    await this.loadProjects();
  },
  methods: {
    async loadProjects() {
      try {
        const projects = await getAllProjects();
        // Pastikan setiap project memiliki URL gambar yang benar
        this.items = projects.map((project) => ({
          ...project,
          imageUrl: project.thumbnail, // Gunakan thumbnail sebagai imageUrl
        }));
        console.log('Fetched projects:', this.items);
      } catch (error) {
        console.error('Failed to load projects:', error);
      }
    },
    async fetchProjectDetails(projectId) {
      try {
        const projectDetails = await getProjectById(projectId);
        console.log('Fetched project details:', projectDetails);
      } catch (error) {
        console.error('Error fetching project by ID:', error);
      }
    },
    async onProjectClick(project) {
      console.log('Clicked project:', project);
      try {
        // Cek validitas sebelum mengarahkan ke FormEditProject
        if (project && project.id) {
          // Mengarahkan ke FormEditProject dengan projectId sebagai parameter
          this.$router.push({ name: 'FormEditProject', params: { projectId: project.id } });
        } else {
          console.error('Invalid project clicked');
        }
      } catch (error) {
        console.error('Error handling project click:', error);
      }
    },
  },
};

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
