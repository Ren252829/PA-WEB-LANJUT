<template>
  <div class="item-list">
    <div class="item" v-for="item in items" :key="item.id">
      <img :src="item.imageUrl" alt="Image" />
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
    </div>
  </div>
  <h1>Projects</h1>
  <h1 class="comingSoon">Coming Soon</h1>
</template>

<script>
export default {
  name: 'ItemList',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    console.log('Navbar mounted')
  },
}
</script>

<style scoped>
/* Gaya CSS untuk ItemList */
.item-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.item {
  width: calc(33.33% - 20px); /* Sesuaikan dengan lebar item */
  margin-bottom: 20px;
}

h1 {
  text-align: center;
  font-weight: bold;
}

.comingSoon {
  color: hsla(160, 100%, 37%, 1);
}

/* Gaya lainnya sesuai dengan wireframe */
</style>
