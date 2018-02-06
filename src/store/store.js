import Vue from 'vue'
import Vuex from 'vuex'
import * as util from 'jiaUtil'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		count: 0
	},
	mutations: {
		increment (state) {
			state.count++
		}
	}
})

export default store;