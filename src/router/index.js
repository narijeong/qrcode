// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/components/Home.vue'),
    children: [
      {
        path: '/generate',
        name: 'Generate',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "generate" */ '@/components/Generate.vue'),
      },
      {
        path: '/scan',
        name: 'Scan',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "scan" */ '@/components/Scan.vue'),
      },
      {
        path: '/qrlist',
        name: 'QRList',
        component: () => import(/* webpackChunkName: "QRList" */ '@/components/QRList.vue'),
        childrean: [
          {
            path: '/qrlist/1',
            name: 'qrcode1',
            component: () => import(/* webpackChunkName: "QRList" */ '@/components/QRCode1.vue'),
          },
        ]
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
