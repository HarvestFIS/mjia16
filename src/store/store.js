import Vue from 'vue'
import Vuex from 'vuex'
import routerView from './routerView.js'
Vue.use(Vuex)
export default new Vuex.Store({
	modules:{
		routerView,
	}
})