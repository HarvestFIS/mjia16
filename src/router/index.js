import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store'

Vue.use(Router);

const page1 = r => require.ensure([], () => r(require('../page/page1.vue')),'page1');
const page2 = r => require.ensure([], () => r(require('../page/page2.vue')),'page2')
const page3 = r => require.ensure([], () => r(require('../page/page3.vue')),'page3')


// 引入状态管理
store.registerModule('vux', {
  state: {
    direction: 'forward'
  },
  mutations: {
    updateDirection(state, payload) {
      state.direction = payload.direction
    }
  }
})
Vue.use(store)  


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


// history management
const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)
router.beforeEach((to, from, next) => {
  // store.commit('updateLoadingStatus', {
  //   isLoading: true
  // })
  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)
  // console.log("toIndex >", toIndex)
  // console.log("fromIndex >", fromIndex)
  // console.log(historyCount)
  if (toIndex) {
    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
      store.commit('updateDirection', {
        direction: 'forward'
      })
    } else {
      store.commit('updateDirection', {
        direction: 'reverse'
      })
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    store.commit('updateDirection', {
      direction: 'forward'
    })
  }
  // console.log('路由开始')
  /**
   * 这里设置需要拦截的页面
   */
  if (to.matched.some(res => res.meta.requireAuth)) {
    let token = getStore('userToken')
    if (token && token !== 'null') {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})

router.afterEach(function (to) {
  // console.log('路由结束')
})



export default router
