import { createRouter, createWebHashHistory } from 'vue-router';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/baldwin-home'),
    },
    {
      path: '/music',
      name: 'Music',
      component: () => import('../views/baldwin-music'),
    },
    {
      path: '/archive',
      name: 'Archive',
      component: () => import('../views/baldwin-archive'),
    },
    {
      path: '/bio',
      name: 'Bio',
      component: () => import('../views/baldwin-bio'),
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/baldwin-contact'),
    },
    {
      path: '/news',
      name: 'News',
      component: () => import('../views/baldwin-news'),
    },
    {
      path: '/store',
      name: 'Store',
      component: () => import('../views/baldwin-store'),
    },
    {
      path: '/writing',
      name: 'Writing',
      component: () => import('../views/baldwin-writing'),
    },
    {
      path: '/album/:id',
      name: 'Album',
      component: () => import('../views/album/album-details'),
    },
  ],
});
