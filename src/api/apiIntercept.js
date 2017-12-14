// 该文件 集成 后台请求
import axios from 'axios'
import Vue from 'vue'

import { LoadingPlugin, AlertPlugin } from 'vux'

Vue.use(LoadingPlugin)

Vue.use(AlertPlugin)

const loading = Vue.$vux.loading

const alert = Vue.$vux.alert

// 超时时间
axios.defaults.timeout = 100000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
// axios.defaults.baseURL = 'https://www.easy-mock.com/mock/59913879a1d30433d860ebd5/example/';

// http请求拦截器
axios.interceptors.request.use(config => {
  loading.show({
    text: '加载中'
  })
  return config
}, error => {
  loading.hide()
  alert.show({
    content: '加载超时'
  })
  return Promise.reject(error)
})

// http响应拦截器
axios.interceptors.response.use(data => { // 响应成功关闭loading
  loading.hide()
  if (data.data === '') {
    window.location.href = '#/login'
  }
  return data
}, error => {
  loading.hide()
  alert.show({
    content: '加载失败'
  })
  return Promise.reject(error)
})

export default axios
