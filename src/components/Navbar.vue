<template>
  <nav class="navbar">
    <div class="logo">
      <img src="../assets/logo.svg" alt="" />
    </div>
    <ul class="nav-menu">
      <a href="">Home</a>
      <a href="">Projects</a>
      <a href="">About</a>
      <a href="">Contact</a>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {},
  data() {
    return {}
  },
  methods: {},
  mounted() {
    console.log('Navbar mounted')
  },
}
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 2rem 4rem;
}

.logo img {
  height: 50px;
}
.nav-menu {
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  gap: 20px;
}
</style>
