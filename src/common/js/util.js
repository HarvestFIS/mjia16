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
	if (!key) { return console.warn("key值为空");};
	let extDate = new Date();
	path = 'path=' + ( path || '') +'/;';
	extDate.setDate(extDate.getDate() + (expiredays || 0));
	expiredays = extDate.toGMTString();
	document.cookie = key.trim() + '=' + value + ';' + path + expiredays;
};

export function setLocalSt (key, value) {
	if (!key || !window.localStorage) { 
		console.warn("存储出错");
		return ;
	} else {
		window.localStorage.setItem(key.trim(),value);
	}
};

export function setSessionSt (key, value) {
	if (!key || !window.sessionStorage) { 
		console.warn("存储出错");
		return ;
	} else {
		window.sessionStorage.setItem(key.trim(),value);
	}
};

export function delCookie (key) {
	document.cookie = key + "=; path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
};

export function delLocalSt (key) {
	if (!key || !window.localStorage) { 
		console.warn("存储出错");
		return ;
	} else {
		window.localStorage.removeItem(key);
	}
};

export function delSessionSt (key) {
	if (!key || !window.sessionStorage) { 
		console.warn("存储出错");
		return ;
	} else {
		window.sessionStorage.removeItem(key);
	}
};

export function getCookie (key) {
	if (!key) {
		console.warn("key值为空");
		return ;
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
		console.warn("存储出错");
		return ;
	} else {
		window.localStorage.getItem(key);
	}
};

export function getSessionSt (key) {
	if (!key || !window.sessionStorage) { 
		console.warn("存储出错");
		return ;
	} else {
		window.sessionStorage.getItem(key);
	}
};
