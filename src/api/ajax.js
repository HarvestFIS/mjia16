// 将json格式的参数转成get形式
const jsonToGet = (data) => {
    var urlStr = '';

    for (const i in data) {
        urlStr = i + '=' + data[i] + '&';
    }
    // 去掉最后的那个&
    urlStr = urlStr.replace(/&+$/, '');

    return urlStr;
}

// 合并参数
const merage = (params) => {
    let config = {
        type: 'GET',
        url: '',
        async: true, // 是否异步
        cache: false, // 是否缓存，默认不缓存
        data: {}, // 默认以json格式
        // 请求成功后的回调函数 
        success: function () {

        },
        // 发送请求之前要执行的回调函数 可以放在open之前或者send之前 
        beforeSend: function () {

        },
        // 请求完成无论 成功或失败都要执行。 是readyState==4 请求完成。 
        complete: function () {

        },
        // 失败后要执行的
        error: function() {

        }
    }

    // 判断是否有值传
    params = params || {};

    for (const key in config) {
        config[key] = params[key] === undefined ? config[key] : params[key];
    }

    return config;
}

const ajax = (config) => {
    // 进行参数合并
    config = merage(config);

    // 创建ajax对象
    let xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('microsoft.XMLHTTP');

    
    // 用于清除缓存
    let random = Math.random();

    let type = config.type.toUpperCase();

    // 这个不管是不是get,post都转
    config.data = jsonToGet(config.data);

    if(type !== 'POST') {
        // 判断是否需要缓存 判断url里面是否有？
        config.url += (config.url.indexOf('?') > -1 ? '&' : '?') + (config.cache ? '' : 't=' + random) + '&' + config.data;
    }

    // 打开地址
    xhr.open(config.type, config.url, config.async);

    // 添加主动头部
    if(type === 'POST') {
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    }

    // 注意这个地方一定要是方法
    if (typeof config.beforeSend === 'function') {
        config.beforeSend();
    }

    xhr.send(config.data);

    // 添加事件监听
    xhr.onreadystatechange = function() {
        // 判断是否完成
        if(xhr.readyState === 4) {
            if(typeof config.complete === 'function') {
                config.complete(xhr.status, xhr);
            }

            if(xhr.status === 200) {
                if(typeof config.success === 'function') {
                    config.success(xhr.responseText, xhr);
                }
            } else {
                if(typeof config.error === 'function') {
                    config.error(xhr.status, xhr); 
                }
            }
        }
    }
}


export default ajax