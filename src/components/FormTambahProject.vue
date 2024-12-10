<template>
  <div v-if="showForm" class="overlay">
    <div class="tambah-project">
      <button class="close-button" @click="closeForm">&times;</button>
      <h2>Tambah Proyek</h2>
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
              <label>
                <input type="radio" value="Videografi" v-model="type" />
                Videografi
              </label>
              <label>
                <input type="radio" value="Photografi" v-model="type" />
                Photografi
              </label>
              <label>
                <input type="radio" value="Voice Over" v-model="type" />
                Voice Over
              </label>
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
        <button type="submit" :disabled="isUploading">Tambah</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'FormTambahProject',
  data() {
    return {
      title: '',
      link: '',
      description: '',
      type: '', // Simpan hanya satu jenis proyek, tidak sebagai array
      image: null,
      imageUrl: null,
      isUploading: false,
      progress: 0,
      showForm: true,
    };
  },
  methods: {
    onImageChange(event) {
      if (event.target.files.length) {
        this.image = event.target.files[0];
        const reader = new FileReader();
        reader.onload = e => {
          this.imageUrl = e.target.result;
        };
        reader.readAsDataURL(this.image);
      }
    },
    async handleSubmit() {
      
  if (!this.image) {
    alert('Gambar proyek harus diunggah!');
    return;
  }

  if (!this.type) {
    alert('Silakan pilih jenis proyek!');
    return;
  }

  this.isUploading = true;

  const token = localStorage.getItem('token');
  console.log('Token yang digunakan untuk request:', token);

  if (!token) {
    alert('Token tidak ditemukan, silakan login kembali!');
    this.isUploading = false;
    return;
  }

  const formData = new FormData();
  formData.append('title', this.title);
  formData.append('link', this.link);
  formData.append('description', this.description);
  formData.append('thumbnail', this.image);
  formData.append('type', this.type);

  try {
    const response = await axios.post('/projects', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`, // Sertakan token di header
      },
      onUploadProgress: progressEvent => {
        this.progress = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
      },
    });

    console.log('Proyek berhasil ditambahkan:', response.data);
    alert(response.data.message);
    this.resetForm();
  } catch (error) {
    console.error('Terjadi kesalahan:', error.response?.data || error);
    alert('Terjadi kesalahan!');
  } finally {
    this.isUploading = false;
  }
},
    resetForm() {
      this.title = '';
      this.link = '';
      this.description = '';
      this.type = '';
      this.image = null;
      this.imageUrl = null;
      this.progress = 0;
    },
    closeForm() {
      this.showForm = false;
      this.$router.push('/dashboard');
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
  background-color: rgba(0, 0, 0, 0.5);
  /* Latar belakang gelap transparan */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  /* Pastikan overlay berada di atas komponen lain */
}

.tambah-project {
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
  background-color:rgba(92, 41, 170, 0.8);
}

.close-button {
  background-color:rgba(92, 41, 170, 0.8);
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
  border: 2px dashed rgba(92, 41, 170, 0.8);
  border-radius: 5px;
  padding: 20px;
  width: 100%;
  height: 300px;
}

form button {
  padding: 15px;
  font-size: 14px;
  background-color: rgba(92, 41, 170, 0.8);
  border: none;
  border-radius: 4px;
  width: 100px;
}
</style>
