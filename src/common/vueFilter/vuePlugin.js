/**
 * Created by xtao on 2018/1/17.
 */
import util from 'jiaUtil'

const vuePlugin ={
	install : function (Vue, options) {
		// 1. 添加全局方法或属性
		Vue.$util = util;
	}
}

export default vuePlugin;