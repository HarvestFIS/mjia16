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
    var sUserAgent = navigator.userAgent;
    var _broswer = {
    	isApp: 'h5',
    	version: '',
    	name: '',
    	system: '',
    	systemV: '',
    };
	if (sUserAgent.indexOf('ios/1.0') > -1 || sUserAgent.indexOf('android/1.0') > -1) {
		_broswer.isApp = "app";
	} else if (sUserAgent.toLowerCase().indexOf("micromessenger") > -1) {
		_broswer.isApp = 'weChat';
	} else {
		_broswer.isApp = 'h5';
	}
	if (sUserAgent.indexOf('iPhone') > -1) {
		_broswer.system = "iPhone";
    	var str = sUserAgent.toLowerCase(); 
    	var ver = str.match(/cpu iphone os (.*?) like mac os/);
    	_broswer.systemV = ver[1].replace("_",".");
	} else if (sUserAgent.indexOf('Android') > -1) {
		_broswer.system = "Android";
		var p = sUserAgent.indexOf('Android');
		_broswer.systemV = sUserAgent.substr(p+8,3);
	} else if (sUserAgent.indexOf('Windows') > -1){
		var p = sUserAgent.match(/Windows NT (\d+)\.(\d)/);
		if (!p) {
			p = sUserAgent.match(/Windows Phone (\d+)\.(\d)/);
			_broswer.system = 'Windows Phone';
		} else {
			_broswer.system = 'Windows';
		}
		_broswer.systemV = p[1] + '.' + p[2];
	} else {
		_broswer.system = 'Other';
		_broswer.systemV = '0';
	}

    var isOpera = sUserAgent.indexOf("Opera") > -1 || sUserAgent.indexOf("OPR") > -1;
    if (isOpera) {
        //首先检测Opera是否进行了伪装
        if (navigator.appName == 'Opera') {
            //如果没有进行伪装，则直接后去版本号
            _broswer.version = parseFloat(navigator.appVersion);
        } else {
            var reOperaVersion = new RegExp("Opera (\\d+.\\d+)");
            //使用正则表达式的test方法测试并将版本号保存在RegExp.$1中
            reOperaVersion.test(sUserAgent);
            _broswer.version = parseFloat(RegExp['$1']);
        }
        _broswer.opera = true;
        _broswer.name = 'opera';
    }
    var isChrome = sUserAgent.indexOf("Chrome") > -1;
    if (isChrome) {
        var reChorme = new RegExp("Chrome/(\\d+\\.\\d+(?:\\.\\d+\\.\\d+))?");
        reChorme.test(sUserAgent);
        _broswer.version = parseFloat(RegExp['$1']);
        _broswer.chrome = true;
        _broswer.name = 'chrome';
    }
    //排除Chrome信息，因为在Chrome的user-agent字符串中会出现Konqueror/Safari的关键字
    var isKHTML = (sUserAgent.indexOf("KHTML") > -1
        || sUserAgent.indexOf("Konqueror") > -1 || sUserAgent
            .indexOf("AppleWebKit") > -1)
        && !isChrome;
    if (isKHTML) {//判断是否基于KHTML，如果时的话在继续判断属于何种KHTML浏览器
        var isSafari = sUserAgent.indexOf("AppleWebKit") > -1;
        var isKonq = sUserAgent.indexOf("Konqueror") > -1;
        if (isSafari) {
            var reAppleWebKit = new RegExp("Version/(\\d+(?:\\.\\d*)?)");
            reAppleWebKit.test(sUserAgent);
            var fAppleWebKitVersion = parseFloat(RegExp["$1"]);             
            _broswer.version = parseFloat(RegExp['$1']);
            _broswer.safari = true;
            _broswer.name = 'safari';
        } else if (isKonq) {
            var reKong = new RegExp(
                "Konqueror/(\\d+(?:\\.\\d+(?\\.\\d)?)?)");
            reKong.test(sUserAgent);
            _broswer.version = parseFloat(RegExp['$1']);
            _broswer.konqueror = true;
            _broswer.name = 'konqueror';
        }
    }
    // !isOpera 避免是由Opera伪装成的IE
    var isIE = sUserAgent.indexOf("compatible") > -1
        && sUserAgent.indexOf("MSIE") > -1 && !isOpera;
    if (isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(sUserAgent);
        _broswer.version = parseFloat(RegExp['$1']);
        _broswer.msie = true;
        _broswer.name = 'msie';
    }
    /*Edge 浏览器*/
    var isEdge = sUserAgent.indexOf('Edge') > -1;
    if (isEdge) {
    	var reEdge = new RegExp("Edge/(\\d+\\.\\d+)");
        _broswer.version = parseFloat(RegExp['$1']);
        _broswer.edge = true;
        _broswer.name = 'edge';    	
    }

    // 火狐浏览器 排除Chrome 及 Konqueror/Safari 的伪装
    var isMoz = sUserAgent.indexOf("Gecko") > -1 && !isChrome && !isKHTML;
    if (isMoz) {
        var reMoz = new RegExp("rv:(\\d+\\.\\d+(?:\\.\\d+)?)");
        reMoz.test(sUserAgent);
        _broswer.version = parseFloat(RegExp['$1']);
        _broswer.mozilla = true;
        _broswer.name = 'mozilla';
    }
    /*{"bower":system + '-' + systemV + '-' + isApp + '-' + broswerT + '-' + version};*/
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
