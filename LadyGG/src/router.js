import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('./views/index.vue')
    },
    {
      path: '/card',
      name: 'card',
      component: () => import('./views/card.vue'),
      meta: { auth: true },
    },
    {
      path: '/sign',
      name: 'sign',
      component: () => import('./views/sign.vue'),
      meta: { auth: true }
    },
    {
      path: '/Literature',
      name: 'Literature',
      component: () => import('./views/Literature.vue'),
      meta: { auth: true }
    },
    {
      path: '/video',
      name: 'video',
      component: () => import('./views/video.vue'),
      meta: { auth: true }
    },
    {
      path: '/bindSuccess',
      name: 'bindSuccess',
      component: () => import('./views/bindSuccess.vue'),
      meta: { auth: true }
    },
    {
      path: '/bind',
      name: 'bind',
      component: () => import('./views/bind.vue'),
      meta: { auth: true },
      children: [
        {
          path: 'phone',
          name: 'phone',
          component: () => import('./components/phone.vue')
        },

        {
          path: 'email',
          name: 'email',
          component: () => import('./components/email.vue')
        }
      ]
    },
    {
      path: '/edit',
      name: 'edit',
      component: () => import('./views/edit.vue'),
      meta: { auth: true }
    },
    {
      path: '/star',
      name: 'star',
      component: () => import('./views/star.vue'),
      meta: { auth: true },
    },
    {
      path: '/literatureDetail',
      name: 'literatureDetail',
      component: () => import('./components/literatureDetail.vue')
    },
    {
      path: '/videoDetail',
      name: 'videoDetail',
      component: () => import('./components/videoDetail.vue')
    }
  ]
})
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(m => m.meta.auth)) {
//     if (store.getters.userInfo) {
//       next()
//     } else if (to.path !== '/') {
//       next({ path: '/' })
//       console.log('检测到您还未登录,请登录后操作！')
//     }
//   } else {
//     next()
//   }
// })
export default router