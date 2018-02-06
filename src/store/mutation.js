import * as util from 'jiaUtil'
export default {
	add (state, obj) {
		if (typeof obj !== 'object') {
			return false;
		} else {
			if (obj.type === 1) {
				util.setCookie(obj.name, obj.value);
				state = { ...state, obj.name: util.getCookie(obj.name) || ''};
			} else if (obj.type === 2) {
				util.setLocalSt(obj.name, obj.value);
				state = { ...state, obj.name: util.getLocalSt(obj.name) || ''};
			} else if (obj.type === 3) {
				util.setSessionSt(obj.name, obj.value);
				state = { ...state, obj.name: util.getSessionSt(obj.name) || ''};
			} else {
				state[obj.name] = obj.value;
			}
		}
	},
	del (state, obj) {

	},
	get (state, obj) {

	}
}