<template>
    <div>
      <AppHeader />
      <main>
        <router-view /> <!-- Hiển thị nội dung của các route tại đây -->
      </main>
      <!-- <Footer /> -->
    </div>
  </template>
  
  <script>
    import AppHeader from '@/components/AppHeader.vue';

//   import Header from '@/components/Header.vue';
//   import Footer from '@/components/Footer.vue';
  
  export default {
    name: 'MainLayout',
    components: {
        AppHeader
    //   Footer
    }
  };
  </script>
  
  <style scoped>
  /* Thêm style cho layout nếu cần */
  main {
    min-height: calc(100vh - 120px); /* Tính toán chiều cao của main nội dung */
    padding: 1rem;
  }
  </style>