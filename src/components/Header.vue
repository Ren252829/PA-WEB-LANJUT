<template>
  <header class="header">
    <h1>Welcome To Infinitry</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ipsa
      quo obcaecati nesciunt dignissimos! Unde perferendis, molestias soluta
      minima placeat eaque officiis corrupti dolorem, sed, dignissimos
      laboriosam ab ex totam? Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Numquam dolores aliquam aperiam labore voluptatibus earum quis
      adipisci nulla, atque deserunt suscipit! Provident velit a aliquid,
      aperiam excepturi illum consequuntur quas!
    </p>
    <div class="tombol">
      <a href=""><button>See Projects</button></a>
      <a href=""><button class="contactBtn">Contact</button></a>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
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
.header {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 200px 100px;
  gap: 20px;
}
h1 {
  font-size: 40px;
  font-weight: bold;
}
button {
  padding: 15px;
  border: none;
  border-radius: 4px;
}

.tombol {
  display: flex;
  gap: 10px;
}

.contactBtn {
  background-color: hsla(160, 100%, 37%, 1);
  color: white;
}
</style>
