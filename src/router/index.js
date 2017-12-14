import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store'
import HelloWorld from '@/components/HelloWorld'
//import routerArray from './routerArray.js'
const home = r => require.ensure([], () => r(require('../page/Home/Home.vue')),'home');
const detail = r => require.ensure([], () => r(require('../page/detail/detail.vue')),'detail')
const list = r => require.ensure([], () => r(require('../page/list/list.vue')),'list')
Vue.use(Router)
// const addRouter = (arr = []) => {
//   const length = arr.length;
//   for (let i = 0; i < length; i++) {
//     const dir = arr[i].folder + '/' + arr[i].name;

//   }
// }
// addRouter (routerArray);
// let arr = [{
//   path:'/',
//   folder:'list',
//   name:'list',
//   redirect:{
//     name:'home'
//   }
// }];

const router = new Router({
  routes: [
    {
      path: '/',
      redirect:{
        name:'home'
      },
      components: home
    },
    {
      path: '/detail',
      name: 'detail',
      component:detail
    },
    {
      path: '/list',
      name: 'list',
      component:list
    },
    {
      path: '/home',
      name: 'home',
      component:home
    }
  ]
})



export default router
