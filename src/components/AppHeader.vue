<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader' // Đổi tên component ở đây
};
</script>

<style scoped>
/* Thêm style cho header nếu cần */
nav {
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  background-color: #f8f8f8;
}
</style>
