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
              <input type="text" id="link" v-model="link" placeholder="Link" />
            </div>
            <div class="form-group-check-box">
              <input type="checkbox" value="value1" v-model="pilihan" />
              Videografi
              <input type="checkbox" value="value2" v-model="pilihan" />
              Photografi
              <input type="checkbox" value="value3" v-model="pilihan" /> Voice
              Over
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
export default {
  name: 'FormEditProject',
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isUploading: false,
      progress: 0,
      showForm: true,
    }
  },
  methods: {
    // ... (sama seperti komponen FormTambahProject)
    closeForm() {
      this.showForm = false
      this.$router.push('/dashboard')
    },
  },
  mounted() {
    console.log('Navbar mounted')
  },
}
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
  background-color: rgba(92, 41, 170, 0.8);
}

.close-button {
  background-color: rgba(92, 41, 170, 0.8);
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
