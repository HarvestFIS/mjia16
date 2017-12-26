import axios from './apiIntercept.js'
const  createPromise = (url = "", data = {}, method = 'GET') => {
	let _params; 
	if(url.indexOf("undefined")){
		console.log('%c'+url,'color:red','请检查请求参数');
		//return Promise.reject(url)
	}
	if(method.toLowerCase() == 'get'){
		_params = {
        method: method,
        url: url,
        params:data
    	}
	} else {
		_params = {
        method: method,
        url: url,
        data:data
    	}
	}
  return new Promise((resolve, reject) => {
    axios(_params).then(function(result) {
      resolve(result)
    })
  })
}
export default createPromise