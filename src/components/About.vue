<template>
  <section class="about">
    <div class="about-image">
      <img src="../assets/infinitrylogopurple.png" alt="Gambar Tentang Kami" />
    </div>
    <div class="about-content">
      <h1>Tentang Kami</h1>
      <p>
        Selamat datang di Infinitry, platform yang dirancang khusus untuk mendukung para pelaku usaha kreatif di bidang fotografi, videografi, dan voice over. Kami memahami tantangan yang sering dihadapi dalam memasarkan produk dan jasa secara efektif, itulah mengapa kami hadir untuk menjadi solusi Anda. Infinitry bertujuan untuk memudahkan interaksi antara penyedia jasa dan pelanggan. Melalui fitur-fitur kami yang dirancang secara cermat, Anda dapat mempromosikan karya dan jasa dengan lebih mudah, meningkatkan visibilitas usaha Anda, dan memperluas jangkauan pasar Anda.
      </p>
      <p>
        Proses pengembangan Infinitry menggunakan pendekatan Agile, mencakup analisis kebutuhan, desain intuitif, implementasi yang matang, serta pengujian menyeluruh. Hasilnya adalah sebuah platform yang tidak hanya membantu Anda menjangkau lebih banyak pelanggan, tetapi juga memberikan pengalaman pengguna yang efisien dan nyaman. Kami percaya bahwa kreativitas tidak memiliki batas. Bersama Infinitry, mari kita tumbuh dan berkembang bersama untuk memajukan industri kreatif di Indonesia.Jadikan Kreativitas Anda Tak Terbatas!
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
  mounted() {
    console.log('Navbar mounted')
  },
}
</script>

<style scoped>
/* Gaya CSS untuk About */
.about {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 50px;
  margin: 50px 0px;

  background-color: #fefefe;
}

h1 {
  color: black;
  font-size: 32px;
  font-weight: 600;
}

p {
  color: black;
}

.about-image {
  width: 30%;
  padding: 30px;
  border-radius: 12px;
}

img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.about-content {
  width: 60%;
}

/* Gaya lainnya sesuai dengan wireframe */
</style>
