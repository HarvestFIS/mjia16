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
export function isBroswer () {
	var u = navigator.userAgent;
	var  broswerT = broswer().name,
		  version = broswer().version,
		  	isApp = '',
		   system = '',
		  systemV = '';
	if (u.indexOf('ios/1.0') > -1 || u.indexOf('android/1.0') > -1) {
		isApp = "app";
	} else if (u.toLowerCase().indexOf("micromessenger") >= -1) {
		isApp = 'weChat';
	} else {
		isApp = 'h5';
	}
	if (u.indexOf('iPhone') > -1) {
		system = "iPhone";
    	var str = u.toLowerCase(); 
    	var ver = str.match(/cpu iphone os (.*?) like mac os/);
    	systemV = ver[1].replace("_",".");
	} else if (u.indexOf('Android') > -1) {
		system = "Android";
		var p = u.indexOf('Android');
		systemV = u.substr(p+8,3);
	} else {
		system = 'Other';
	}
	return {"bower":system + '-' + systemV + '-' + isApp + '-' + broswerT + '-' + version};
}

export function broswer () {//检测浏览器内核--返回的是两个key，name：浏览器内核的名称---version：浏览器的版本号
    var _broswer = {};
    var sUserAgent = navigator.userAgent;
    var isOpera = sUserAgent.indexOf("Opera") > -1;
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
    // 排除Chrome 及 Konqueror/Safari 的伪装
    var isMoz = sUserAgent.indexOf("Gecko") > -1 && !isChrome && !isKHTML;
    if (isMoz) {
        var reMoz = new RegExp("rv:(\\d+\\.\\d+(?:\\.\\d+)?)");
        reMoz.test(sUserAgent);
        _broswer.version = parseFloat(RegExp['$1']);
        _broswer.mozilla = true;
        _broswer.name = 'mozilla';
    }
    return _broswer;
}
