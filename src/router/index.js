import VueRouter from 'vue-router'

const router = new VueRouter({
  // mode: 'history', // 路由history模式，地址栏不会出现丑丑的 #
  routes: [
    {
      path: '/home',
      component: () => import('@/views/home/index'),
      meta: { title: 'Home' }
    },
    {
      path: '/participants',
      component: () => import('@/views/participants/index'),
      meta: { title: 'Home' }
    },
    {
      path: '/data',
      component: () => import('@/views/data/index'),
      meta: { title: 'Home' }
    },
    {
      path: '/publications',
      component: () => import('@/views/publications/index'),
      meta: { title: 'Home' }
    },
    {
      path: '/about',
      component: () => import('@/views/about/index'),
      meta: { title: 'Home' }
    }
  ]
})
// 全局后置路由守卫 用于更改页签标题
router.afterEach((to) => {
  const affix = 'CPC'
  const title = to.meta.title
  document.title = title ? `${title} - ${affix}` : affix
})


export default router