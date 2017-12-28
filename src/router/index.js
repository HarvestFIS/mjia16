import Vue from 'vue'
import Router from 'vue-router'
const home = r => require.ensure([], () => r(require('../page/Home/Home.vue')), 'Home')
const detail = r => require.ensure([], () => r(require('../page/detail/detail.vue')), 'detail')
const list = r => require.ensure([], () => r(require('../page/list/list.vue')), 'list')
Vue.use(Router)


const router = new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'home'
      },
      component: home
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/home',
      name: 'home',
      component: home
    }]
})



export default router
