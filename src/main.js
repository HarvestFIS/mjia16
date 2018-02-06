// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// 引入Vuex框架
import Vuex from 'vuex'
Vue.use(Vuex);

//引入路由
import router from './router'

// 引入 promise 兼容
import es6_promise from 'es6-promise'
es6_promise.polyfill();

//引入自定义工具类
import * as util from 'jiaUtil'
//Vue.prototype.$util = util;

//引入vue过滤器
import './common/vueFilter/vueFilter'
//引入Vuex
import store from './store/store'

//Vue配置
//Vue.config.productionTip = false;

import App from './app'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})

// const history = window.sessionStorage;
// history.clear();
// let historyCount = history.getItem('count') * 1 || 0
// history.setItem('/', 0)
// history.setItem('/home', 0)
//
// router.beforeEach(function (to, from, next) {
//   store.commit('updateLoadingStatus', {isLoading: true})
//   const toIndex = history.getItem(to.path)
//   const fromIndex = history.getItem(from.path)
//   if (toIndex) {
//     if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
//       store.commit('updateDirection', {direction: 'forward'})
//     } else {
//       store.commit('updateDirection', {direction: 'reverse'})
//     }
//   } else {
//     ++historyCount
//     history.setItem('count', historyCount)
//     to.path !== '/' && history.setItem(to.path, historyCount)
//     store.commit('updateDirection', {direction: 'forward'})
//   }
//
//   // if (/\/http/.test(to.path)) {
//   //   let url = to.path.split('http')[1]
//   //   window.location.href = `http${url}`
//   // } else {
//   //   next()
//   // }
// })
//
// router.afterEach(function (to) {
//   store.commit('updateLoadingStatus', {isLoading: false})
// })



console.info("app init start ");
util.print();
util.setCookie();
console.info("app init end ");