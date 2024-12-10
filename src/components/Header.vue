<template>
  <header class="header">
    <!-- Gambar slider di belakang konten -->
    <div class="slider-container">
      <div 
        class="slider" 
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div class="slider-item" v-for="(image, index) in images" :key="index">
          <img :src="image" alt="Slider Image" class="slider-image" />
        </div>
      </div>
    </div>

    <!-- Konten header (teks dan tombol) di depan gambar -->
    <div class="header-content">
      <h1>Selamat Datang di Infinitry</h1>
      <p>
        Kami hadir untuk membantu Anda di bidang fotografi, videografi, dan voice over. Infinitry adalah platform yang dirancang untuk mempermudah promosi jasa Anda dan menjangkau lebih banyak pelanggan dengan cara yang efektif. Bersama Infinitry, tingkatkan visibilitas dan potensi usaha Anda. Temukan kemudahan untuk berkembang dan membawa kreativitas Anda ke level berikutnya.
      </p>
      <div class="tombol">
        <a href=""><button>See Projects</button></a>
        <a href=""><button class="contactBtn">Contact</button></a>
      </div>
    </div>

    <!-- Tombol kontrol untuk navigasi slider -->
    <div class="controls">
      <button @click="prevSlide">&#10094;</button>
      <button @click="nextSlide">&#10095;</button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      currentIndex: 0,
      images: [
        'https://i.pinimg.com/736x/62/5b/82/625b824dc1cb31c58361655ff5e47f9b.jpg',
        'https://i.pinimg.com/736x/53/d1/83/53d183c8360c3a75bb137484ac2e8252.jpg',
        'https://i.pinimg.com/736x/fa/b7/47/fab747a7905cb1bc56c68b5edfff490b.jpg',
        'https://i.pinimg.com/736x/78/9f/27/789f27dbbf28f6483f922d1bf08048eb.jpg',
        'https://i.pinimg.com/736x/52/fb/85/52fb85355ab2333fa75794d31016dd16.jpg',
        'https://i.pinimg.com/736x/2f/7f/36/2f7f365141469650ca49d44b384d183d.jpg',
        'https://i.pinimg.com/736x/d4/ec/de/d4ecde0d5df25113423d19bae55084d5.jpg',
        'https://i.pinimg.com/736x/d5/c6/21/d5c6214952b179748460658fa820df5b.jpg',
        'https://i.pinimg.com/736x/35/1c/1c/351c1cd74f5548778df79a7d65b11f4c.jpg',
        'https://i.pinimg.com/736x/2f/96/a3/2f96a3a0ec4d574e4f9a5ce6b48e31e9.jpg'
      ],
    };
  },
  methods: {
    nextSlide() {
      if (this.currentIndex < this.images.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0; // kembali ke awal jika sudah di gambar terakhir
      }
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.images.length - 1; // ke gambar terakhir jika di gambar pertama
      }
    },
  },
  mounted() {
    setInterval(this.nextSlide, 3000); // Ganti gambar setiap 3 detik
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  position: relative; /* Posisi relatif agar elemen bisa diposisikan di atas gambar */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 200px 100px;
  gap: 20px;
  overflow: hidden;
  margin-bottom: 80px;
  margin-top: 130px;
}

h1 {
  font-size: 64px;
  font-weight: bold;
  z-index: 10; /* Pastikan teks berada di atas gambar */
  position: relative; /* Pastikan posisi relatif untuk z-index */
  color: white;
}

p {
  color: white;
  z-index: 10; /* Pastikan teks berada di atas gambar */
  position: relative; /* Pastikan posisi relatif untuk z-index */
}

button {
  padding: 15px;
  border: none;
  border-radius: 4px;
}

button:hover{
  transform: scale(1.2);
  transition: transform 0.3s;
}

.tombol {
  display: flex;
  gap: 10px;
  z-index: 10; /* Pastikan teks berada di atas gambar */
  position: relative; /* Pastikan posisi relatif untuk z-index */
  margin-top: 20px;
  justify-content: center;
}

.contactBtn {
  background-color:rgba(92, 41, 170, 0.8);
  color: white;
}

.slider-container {
  width: 100%;
  overflow: hidden;
  position: absolute; /* Menempatkan gambar di belakang teks */
  top: 0;
  left: 0;
  z-index: 1; /* Gambar berada di bawah konten */
  opacity: 50%;
}

.slider {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slider-item {
  min-width: 100%;
}

.slider-item img {
  width: 100%;
  height: auto;
}

.controls {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
 width: 100%;
  z-index: 3; /* Pastikan tombol kontrol berada di atas gambar */
}

.controls button {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 24px;
  border: none;
  padding: 10px;
  cursor: pointer;
  margin: 20px;
}

.slider-image {
  object-fit: cover; /* Agar gambar tetap memenuhi area dengan proporsi yang tepat */
}
</style>