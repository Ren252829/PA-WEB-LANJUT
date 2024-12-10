<template>
  <form @submit.prevent="submitForm">
    <div class="upForm">
      <div class="leftForm">
        <div class="form-group">
          <div>
            <input type="text" v-model="nama" placeholder="Nama Lengkap" />
          </div>
          <div>
            <input type="email" v-model="email" placeholder="Email" />
          </div>
          <div>
            <input type="text" v-model="noHp" placeholder="Nomor HP" />
          </div>
        </div>
        <div class="form-group-check-box">
          <label>
            <input type="checkbox" value="Videografi" v-model="pilihan" /> Videografi
          </label>
          <label>
            <input type="checkbox" value="Photografi" v-model="pilihan" /> Photografi
          </label>
          <label>
            <input type="checkbox" value="Voice Over" v-model="pilihan" /> Voice Over
          </label>
        </div>
      </div>
      <div class="rightForm">
        <div>
          <input type="text" v-model="deskripsi" placeholder="Deskripsi" />
        </div>
      </div>
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
import axios from '../axios';
export default {
  name: 'FormPemesanan',
  data() {
    return {
      nama: '',
      email: '',
      noHp: '',
      pilihan: [],
      deskripsi: '',
    };
  },
  methods: {
    async submitForm() {
      try {
        console.log({
          name: this.nama,
          email: this.email,
          phone_number: this.noHp,
          description: this.deskripsi,
          type: this.pilihan.join(', '),
        });
        const response = await axios.post('/orders', {
          name: this.nama,
          email: this.email,
          phone_number: this.noHp,
          description: this.deskripsi,
          type: this.pilihan.join(', '),
        });
        console.log('Response:', response.data);
        alert('Form berhasil disubmit!');
      } catch (error) {
        console.error('Error saat mengirim formulir:', error);
        alert('Gagal mengirim formulir');
      }
    },
  },
  mounted() {
    console.log('Navbar mounted');
  },
};
</script>

<style scoped>
/* Gaya CSS untuk Form Pemesanan */
form {
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

.upForm {
  display: flex;
  width: 100%;
  gap: 20px;
}

.leftForm {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.leftForm .form-group input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}

.rightForm {
  width: 50%;
}

.rightForm input {
  height: 230px;
  width: 100%;
  padding: 10px;
}

.bottomForm {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.form-group {
  width: 100%;
}

.form-group-check-box {
  display: flex;
  gap: 10px;
  color: black;
}

h2 {
  color: black;
  font-size: 32px;
  font-weight: bold;
}

button {
  padding: 15px;
  font-size: 14px;
  background-color: rgba(92, 41, 170, 0.8);
  border: none;
  border-radius: 4px;
  color: white;
}

.keterangan {
  color: black;
}
</style>
