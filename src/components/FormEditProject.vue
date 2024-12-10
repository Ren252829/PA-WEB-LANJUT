<template>
  <div v-if="showForm" class="overlay">
    <div class="edit-project">
      <button class="close-button" @click="closeForm">&times;</button>
      <h2>Edit Proyek</h2>
      <hr />
      <form @submit.prevent="handleSubmit">
        <div class="topForm">
          <div class="leftForm">
            <div>
              <input
                type="text"
                id="title"
                v-model="title"
                required
                placeholder="Title"
              />
            </div>
            <div>
              <input
                type="text"
                id="link"
                v-model="link"
                placeholder="Link"
              />
            </div>
            <div class="form-group-check-box">
              <input type="checkbox" value="Videografi" v-model="pilihan" />
              Videografi
              <input type="checkbox" value="Photografi" v-model="pilihan" />
              Photografi
              <input type="checkbox" value="Voice Over" v-model="pilihan" />
              Voice Over
            </div>
            <div>
              <textarea
                id="description"
                v-model="description"
                required
                placeholder="Deskripsi"
              ></textarea>
            </div>
          </div>
          <div class="rightForm">
            <div class="image-upload">
              <input type="file" id="image" @change="onImageChange" />
              <img :src="imageUrl" alt="Preview Gambar" v-if="imageUrl" />
            </div>
            <div class="progress-bar" v-if="isUploading">
              <div
                class="progress-bar-fill"
                :style="{ width: progress + '%' }"
              ></div>
            </div>
          </div>
        </div>
        <button type="submit" :disabled="isUploading">Simpan Perubahan</button>
      </form>
      <button class="delete-button" @click="handleDelete">Hapus Proyek</button>
    </div>
  </div>
</template>

<script>
import axios from '../axios';
import { getProjectById } from '../services/projectService';


export default {
  name: 'FormEditProject',
  data() {
    return {
      isUploading: false,
      progress: 0,
      showForm: true,
      title: '',
      link: '',
      description: '',
      pilihan: [],
      imageFile: null,
      imageUrl: '',
      projectId: null,
    };
  },
  async mounted() {
    try {
      console.log('Route Params:', this.$route.params); // Debugging untuk memeriksa route params
      const { projectId } = this.$route.params;
      if (projectId) {
        // Simpan projectId ke properti data
        this.projectId = projectId;
        const projectData = await getProjectById(projectId);
        
        this.title = projectData.title || '';
        this.link = projectData.link || '';
        this.description = projectData.description || '';
        this.pilihan = projectData.type ? projectData.type.split(',') : [];
        this.imageUrl = projectData.thumbnail || '';
      } else {
        console.error('ProjectId tidak ditemukan di route params');
        alert('Gagal memuat proyek, silakan coba lagi');
      }
    } catch (error) {
      console.error('Error loading project details:', error);
      alert('Terjadi kesalahan saat memuat proyek');
    }
  },
  methods: {
    closeForm() {
      this.showForm = false;
      this.$router.push('/dashboard');
    },
    onImageChange(e) {
      const file = e.target.files[0];
      if (file && file.type.startsWith('image/')) {
        this.imageFile = file;
        this.imageUrl = URL.createObjectURL(file);
      } else {
        alert('File yang dipilih bukan gambar yang valid');
      }
    },
    async handleSubmit() {
      try {
        if (!this.projectId) {
          alert('ID proyek tidak ditemukan');
          return;
        }

        this.isUploading = true;

        const formData = new FormData();
        formData.append('title', this.title);
        formData.append('link', this.link);
        formData.append('description', this.description);
        formData.append('type', this.pilihan.join(','));

        if (this.imageFile) {
          formData.append('thumbnail', this.imageFile);
        }

        const token = localStorage.getItem('token');
        if (!token) {
          alert('Token tidak ditemukan, silakan login kembali!');
          this.isUploading = false;
          return;
        }

        const response = await axios.put(
          `/projects/${this.$route.params.projectId}`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: `Bearer ${token}`,
            },
            onUploadProgress: (progressEvent) => {
              this.progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            },
          }
        );

        alert(response.data.message);
        this.isUploading = false;
        this.closeForm();
      } catch (error) {
        console.error('Error while updating project:', error);
        alert('Gagal memperbarui proyek');
        this.isUploading = false;
      }
      console.log({
      title: this.title,
      link: this.link,
      description: this.description,
      type: this.pilihan.join(','),
      imageFile: this.imageFile,
    });
    },
    async handleDelete() {
      if (!this.projectId) {
        alert('ID proyek tidak ditemukan');
        return;
      }
      const token = localStorage.getItem('token');
      if (!token) {
        alert('Token tidak ditemukan, silakan login kembali!');
        return;
      }

      try {
        const confirmDelete = confirm('Apakah Anda yakin ingin menghapus proyek ini?');
        if (!confirmDelete) return;

        const response = await axios.delete(`/projects/${this.projectId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        alert(response.data.message);
        this.closeForm();
      } catch (error) {
        console.error('Error while deleting project:', error);
        alert('Gagal menghapus proyek');
      }
    },
  },
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* Latar belakang gelap transparan */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Pastikan overlay berada di atas komponen lain */
}

.edit-project {
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 50px 200px;
  border-radius: 20px;
  margin: 4rem;
}

hr {
  height: 20px;
  background-color: hsla(160, 100%, 37%, 1);
}

.close-button {
  background-color: hsla(160, 100%, 37%, 1);
  border: none;
  border-radius: 4px;
  color: black;
  cursor: pointer;
  font-size: 1.6em;
  width: 30px;
  position: absolute;
  right: 200px;
}

h2 {
  color: black;
  font-size: 32px;
  font-weight: bold;
}

form {
  width: 100%;
  display: flex;
  flex-direction: column;
}

form .topForm {
  display: flex;
  gap: 20px;
}

.leftForm {
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.leftForm input[type='text'] {
  width: 100%;
  padding: 10px;
}

.rightForm {
  width: 30%;
}

.form-group-check-box {
  display: flex;
  gap: 10px;
  color: black;
}

#description {
  width: 100%;
  height: 100px;
  padding: 10px;
}

.image-upload {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 2px dashed hsla(160, 100%, 37%, 1);
  border-radius: 5px;
  padding: 20px;
  width: 100%;
  height: 300px;
}

form button {
  padding: 15px;
  font-size: 14px;
  background-color: hsla(160, 100%, 37%, 1);
  border: none;
  border-radius: 4px;
  width: 100px;
}
</style>
