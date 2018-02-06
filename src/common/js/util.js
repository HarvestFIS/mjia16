export function print(){
	console.log(111111);
};

/*
* @params key			名字
* @params value			值
* @params path			路径
* @params expiredays	存取的时间
*/
export function setCookie (key, value, path, expiredays) {
	if (!key || typeof key !== 'string') { return false};
	let extDate = new Date();
	path = 'path=' + ( path || '') +'/;';
	extDate.setDate(extDate.getDate() + (expiredays || 0));
	expiredays = extDate.toGMTString();
	document.cookie = key.trim() + '=' + value + ';' + path + expiredays;
};

export function setLocalSt (key, value) {
	if (!key || typeof key !== 'string' || !window.localStorage) { 
		return false;
	} else {
		window.localStorage.setItem(key.trim(),value);
	}
};

export function setSessionSt (key, value) {
	if (!key ||  typeof key !== 'string' || !window.sessionStorage) { 
		return false;
	} else {
		window.sessionStorage.setItem(key.trim(),value);
	}
};

export function delCookie (key) {
	document.cookie = key + "=; path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
};

export function delLocalSt (key) {
	if (!key || !window.localStorage) { 
		return false;
	} else {
		window.localStorage.removeItem(key);
	}
};

export function delSessionSt (key) {
	if (!key || !window.sessionStorage) { 
		return false;
	} else {
		window.sessionStorage.removeItem(key);
	}
};

export function getCookie (key) {
	if (typeof key !== 'string') {
		return false;
	}
	let cookie = document.cookie.split(";");
	const len = cookie.length;
	for (let i = 0; i < len; i++) {
		if (key.trim() === cookie[i].split("=")[0]) {
			return cookie[i].split("=")[1];
		}
	}
};

export function getLocalSt (key) {
	if (!key || !window.localStorage) { 
		return false;
	} else {
		window.localStorage.getItem(key);
	}
};

export function getSessionSt (key) {
	if (!key || !window.sessionStorage) { 
		return false;
	} else {
		window.sessionStorage.getItem(key);
	}
};
