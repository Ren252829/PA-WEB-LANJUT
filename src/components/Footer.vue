<template>
  <footer class="footer">
    <div class="topContainer">
      <div class="logo">
        <img src="../assets/infinitrylogowhite.png" alt="Logo" />
      </div>
      <p>
        Dengan pendekatan pengembangan yang cermat, Infinitry hadir sebagai solusi efektif untuk membawa kreativitas
        Anda ke level berikutnya. Mari bersama memajukan industri kreatif di Indonesia.
      </p>
      <nav>
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
      <div class="social-media">
        <a href="#"><img src="./icons/icon-facebook.png" alt="" /></a>
        <a href="#"><img src="./icons/icon-globe.png" alt="" /></a>
        <a href="#"><img src="./icons/icon-instagram.png" alt="" /></a>
        <a href="#"><img src="./icons/icon-linkedin.png" alt="" /></a>
        <a href="#"><img src="./icons/icon-mail.png" alt="" /></a>
        <a href="#"><img src="./icons/icon-twitter.png" alt="" /></a>
        <a href="#"><img src="./icons/icon-youtube.png" alt="" /></a>
      </div>
    </div>
    <hr />
    <div class="bottomContainer">
      <div class="copyright">
        <p>Copyright © 2022 Company Name. All rights reserved.</p>
        <div class="link">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  mounted() {
    console.log('Navbar mounted')
  },
}
</script>

<style scoped>
/* Gaya CSS untuk Footer */
.footer {
  background-color: #333;
  color: #fff;
  padding: 4rem;
  display: flex;
  width: 100%;
  flex-direction: column;
}

.topContainer {
  display: flex;
  gap: 20px;
}

.logo {
  width: 250px;
}

.logo img {
  width: 100%;
}

nav {
  display: flex;
  flex-direction: column;
  padding: 0px 3rem;
  gap: 1rem;
}

nav a {
  color: white;
}

.social-media {
  display: flex;
  gap: 10px;
}

hr {
  margin: 20px 0px;
}

.copyright {
  display: flex;
  justify-content: space-between;
}

.link {
  display: flex;
  gap: 10px;
}

.link a {
  color: #ffffff;
}

a {
  color: white;
  transition: transform 0.3s, text-shadow 0.3s; /* Transisi untuk transform dan text-shadow */
}

a:hover {
  transform: scale(1.2);
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.8), 0 0 10px rgba(255, 255, 255, 0.6); /* Efek bercahaya */
}
</style>
