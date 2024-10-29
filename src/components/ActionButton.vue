<template>
  <div class="tombol-tombol">
    <router-link to="/add"
      ><button><i class="fas fa-plus"></i></button
    ></router-link>
    <router-link to="/edit"
      ><button><i class="fas fa-edit"></i></button
    ></router-link>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: 'ActionButton',
  mounted() {
    console.log('Navbar mounted')
  },
}
</script>

<style scoped>
.tombol-tombol {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

button {
  padding: 10px 20px;
  border: none;
  background-color: #333;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
}
</style>
