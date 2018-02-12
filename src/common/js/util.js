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

/*
* 浏览器版本信息
* @returns String
eg: 'Android-7.0-app-Chrome-62'
{
	isApp:h5/android/ios,
	broswerT: 浏览器类型,
	version: 版本,
	system: 系统,
	systemV: 系统版本
}
*/
export function broswer () {
    var ua = navigator.userAgent;
    var _broswer = {
    	isApp: 'h5',
    	version: '',
    	name: '',
    	system: '',
    	systemV: '',
    };
	if (ua.indexOf('ios/1.0') > -1 || ua.indexOf('android/1.0') > -1) {
		_broswer.isApp = "app";
	} else if (ua.toLowerCase().indexOf("micromessenger") > -1) {
		_broswer.isApp = 'weChat';
	} else {
		_broswer.isApp = 'h5';
	}
	if (ua.indexOf('iPhone') > -1) {
		_broswer.system = "iPhone";
    	var str = ua.toLowerCase(); 
    	var ver = str.match(/cpu iphone os (.*?) like mac os/);
    	_broswer.systemV = ver[1].replace("_",".");
	} else if (ua.indexOf('Android') > -1) {
		_broswer.system = "Android";
		var p = ua.indexOf('Android');
		_broswer.systemV = ua.substr(p+8,3);
	} else if (ua.indexOf('Windows') > -1){
		var p = ua.match(/Windows NT (\d+)\.(\d)/);
		if (!p) {
			p = ua.match(/Windows Phone (\d+)\.(\d)/);
			_broswer.system = 'Windows Phone';
		} else {
			_broswer.system = 'Windows';
		}
		_broswer.systemV = p[1] + '.' + p[2];
	} else {
		_broswer.system = 'Other';
		_broswer.systemV = '0';
	}

    var M,tem;
    M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem =  /\brv[ :]+(\d+)/g.exec(ua) || [];
        _broswer.name = 'IE';
      	_broswer.version = tem[1] || '';
        return _broswer;
    }
    if(M[1] === 'Chrome'){
        tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem != null) {
        	var arr = tem.slice(1).join(' ').replace('OPR', 'Opera').split(' ');
        	_broswer.name = arr[0];
        	_broswer.version = arr[1];
        	return _broswer;
        } 
    }
    M = M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
  	_broswer.name = M[0];
  	_broswer.version = M[1];
    return _broswer;
}

/*
* 简单的页面跳转
* @params path  
* 默认值Y 自刷新
* -1 1 后退一页 前进一页
* 页面跳转 
*/
export function jumpUrl (path = 'Y') {
	if (path === 'Y') {
		location.reload();
	} else if ( typeof path === 'number') {
		history.go(path);
	} else {
		window.location.href = window.origin + "/" + path;
	}
}
