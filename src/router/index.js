import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomePage.vue';
import About from '../views/AboutPage.vue';
import MainLayout from '@/layouts/MainLayout.vue';

// Định nghĩa các routes
const routes = [
    {
        path: '/',
        component: MainLayout, // Sử dụng MainLayout
        children: [
            {
            path: '/',
            name: 'HomePage',
            component: Home
            },
            {
            path: '/about',
            name: 'AboutPage',
            component: About
            }
        ]
      }
];

// Tạo router với lịch sử điều hướng
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
