import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store'

Vue.use(Router);

const page1 = r => require.ensure([], () => r(require('../page/page1.vue')),'page1');
const page2 = r => require.ensure([], () => r(require('../page/page2.vue')),'page2')
const page3 = r => require.ensure([], () => r(require('../page/page3.vue')),'page3')

const router = new Router({
  routes: [
    {
      path: '/',
      redirect:{
        name:'page1'
      }
    },
    {
      path: '/page2',
      name: 'page2',
      component:page2
    },
    {
      path: '/page3',
      name: 'page3',
      component:page3
    },
    {
      path: '/page1',
      name: 'page1',
      component:page1
    }
  ]
})

//这里可以增加登录校验
router.beforeEach((to, from, next) => {
	console.log("router beforeEach");
	console.log("get->"+store.state.count);
	next();
})



export default router
