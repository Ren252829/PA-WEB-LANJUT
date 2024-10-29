<template>
  <form class="form-pemesanan">
    <h2>Form Pemesanan</h2>
    <hr />
    <div class="upForm">
      <div class="leftForm">
        <div class="form-group">
          <input
            type="text"
            id="nama"
            v-model="nama"
            placeholder="Nama Lengkap"
          />
        </div>
        <div class="form-group">
          <input type="email" id="email" v-model="email" placeholder="Email" />
        </div>
        <div class="form-group">
          <input
            type="text"
            id="noHp"
            v-model="email"
            placeholder="Nomor Telepon"
          />
        </div>
        <div class="form-group-check-box">
          <input type="checkbox" value="value1" v-model="pilihan" /> Videografi
          <input type="checkbox" value="value2" v-model="pilihan" /> Photografi
          <input type="checkbox" value="value3" v-model="pilihan" /> Voice Over
        </div>
      </div>
      <div class="rightForm">
        <input
          type="text"
          id="nama"
          v-model="deskripsi"
          placeholder="Deskripsi"
        />
      </div>
    </div>
    <div class="bottomForm">
      <p class="keterangan">
        *Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
        ornare vitae amet.
      </p>
      <button type="submit">Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'FormPemesanan',
  data() {
    return {
      nama: '',
      email: '',
      pilihan: [],
    }
  },
  methods: {
    submitForm() {
      // Tambahkan logika untuk mengirimkan data formulir ke server
      console.log('Data formulir:', {
        nama: this.nama,
        email: this.email,
        pilihan: this.pilihan,
      })
    },
  },
  mounted() {
    console.log('Navbar mounted')
  },
}
</script>

<style scoped>
/* Gaya CSS untuk Form Pemesanan */
.form-pemesanan {
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
  background-color: hsla(160, 100%, 37%, 1);
  border: none;
  border-radius: 4px;
}

.keterangan {
  color: black;
}
</style>
