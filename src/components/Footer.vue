<template>
  <footer class="footer">
    <div class="topContainer">
      <div class="logo">
        <img src="../assets/logo.svg" alt="Logo" />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur vel
        quasi amet veniam, pariatur est officia tenetur repudiandae nobis
        quaerat iure, autem voluptatibus ducimus suscipit modi laborum sed!
        Officiis, nulla.
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

nav {
  display: flex;
  flex-direction: column;
  padding: 0px 3rem;
  gap: 1rem;
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
</style>
