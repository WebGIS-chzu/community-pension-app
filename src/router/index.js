import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '布局-状态栏',
    component: () => import('../views/LayOut.vue'),
    redirect: '/login',
    children:[
      {
        path:'/login',
        name: '登录界面',
        component: () => import('../views/login/Login.vue'),
      },
      {
        path:'/older',
        name: '养老-导航栏',
        component: () => import('../views/older/Older.vue'),
        children:[
          {
            path:'/older/home',
            name: '养老社区',
            component: () => import('../views/older/home/Home.vue'),
          },
          {
            path:'/older/information',
            name: '养老社交',
            component: () => import('../views/older/information/Information.vue'),
          },
          {
            path:'/older/personal',
            name: '养老我的',
            component: () => import('../views/older/personal/Personal.vue'),
          },
        ],
      },
      {
        path:'/worker',
        name: '护工-导航栏',
        component: () => import('../views/worker/Worker.vue'),
        children:[
          {
            path:'/worker/home',
            name: '护工首页',
            component: () => import('../views/worker/home/Home.vue'),
          },
          {
            path:'/worker/order',
            name: '护工订单',
            component: () => import('../views/worker/order/Order.vue'),
          },
          {
            path:'/worker/information',
            name: '护工消息',
            component: () => import('../views/worker/information/Information.vue'),
          },
          {
            path:'/worker/personal',
            name: '护工我的',
            component: () => import('../views/worker/personal/Personal.vue'),
          },
        ],
      },
      {
        path:'/children',
        name: '子女',
        component: () => import('../views/children/Children.vue'),
        children:[
          {
            path:'/children/home',
            name: '子女首页',
            component: () => import('../views/children/home/Home.vue'),
          },
          {
            path:'/children/monitor',
            name: '子女监控',
            component: () => import('../views/children/monitor/Monitor.vue'),
          },
          {
            path:'/children/information',
            name: '子女消息',
            component: () => import('../views/children/information/Information.vue'),
          },
          {
            path:'/children/personal',
            name: '子女我的',
            component: () => import('../views/children/personal/Personal.vue'),
          },
        ],
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
