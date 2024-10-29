<template>
  <section class="about">
    <div class="about-image">
      <img src="../assets/logo.svg" alt="Gambar Tentang Kami" />
    </div>
    <div class="about-content">
      <h1>Tentang Kami</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        labore facere est eveniet eligendi quidem laborum reiciendis
        dignissimos, tempora numquam enim exercitationem. Aliquam eum distinctio
        ipsum. Quod nulla beatae nostrum? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Beatae maxime id ipsa autem fugit tempora placeat sed
        temporibus laudantium! Excepturi beatae deleniti molestiae ipsum
        cupiditate! Labore corrupti aspernatur soluta quidem?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cupiditate
        unde necessitatibus voluptates tenetur incidunt ab, nemo quidem sint sit
        culpa commodi animi doloremque maxime, sed provident possimus libero
        voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Eveniet impedit eos unde necessitatibus nam minus aliquam vitae
        exercitationem dolores adipisci dignissimos aliquid, quibusdam esse
        ratione nulla? Aliquid cupiditate suscipit dolorem. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Ratione voluptatibus eos sint
        dolorum officiis, sit vel minima, sed, numquam laboriosam libero. Alias
        odit sed voluptate provident nam incidunt molestiae omnis.
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

  background-color: hsla(160, 100%, 37%, 1);
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
  width: 20%;
  background-color: black;
  padding: 30px;
  border-radius: 12px;
}

.about-content {
  width: 60%;
}

/* Gaya lainnya sesuai dengan wireframe */
</style>
