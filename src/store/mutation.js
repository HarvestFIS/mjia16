import * as util from 'jiaUtil'
export default {
  	updateLoadingStatus (state, {status}) {
    	state.isLoading = status
  	},
  	updateDirection (state, {direction}) {
    	state.direction = direction
  	},
	increment (state) {
		state.count++
	},
	setUserInfo (state, userInfo) {
		const keys = Object.keys(userInfo);
		keys.forEach(function (value, index) {
			util.setSessionSt(value,userInfo[value]);
			state.userInfo[value] = userInfo[value];
		})
	},
	delUserInfo (state) {
		const keys = Object.keys(state.userInfo);
		keys.forEach(function (value, index) {
			util.delSessionSt(value);
			state.userInfo[value] = undefined;
		})	
	}
}