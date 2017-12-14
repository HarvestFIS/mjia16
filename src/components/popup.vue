<template>
	<div id="popup">
		<div v-transfer-dom>
			<popup position="bottom" v-show="show" :hide-on-deactivated ='true' height="100%">
				<header class="popupHeader">
					<span @click ="close"><</span>
				</header>
				<iframe :src='src' frameborder="0" scrolling="auto" style="width:100%;height:100%;"></iframe>
			</popup>
		</div>
	</div>
</template>

<script type="text/javascript">
import TransferDom from 'vux/src/directives/transfer-dom/index.js'
import PopupHeader from 'vux/src/components/popup-header/index.vue'
import Popup from 'vux/src/components/popup/index.vue'
import Group from 'vux/src/components/Group/index.vue'
//https://www.jia16.com/static/press/notices/notice-20171110.2.html?mgnlChannel=smartphone
export default {
	directives:{
		TransferDom
	},
	props:['show','src'],
	data () {
		return {
			text:'返回',
		}
	},
	methods:{
		close () {
			this.$emit("onLeft");
		},
		init () {
			//初始化数据方法
		}
	},
	components:{
		Popup,
		Group,
		PopupHeader
	},
	mounted () {
		
	} 
}
</script>

<style lang="less">
	.v-transfer-dom{
		.popupHeader{
			padding: 0 20px;
		}
	}
</style>
