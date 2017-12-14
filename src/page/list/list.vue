<template>
	<div class="list">
		<button @click='push'>
			这是list
		</button>
		<popup :show='show' v-on:onLeft='closePopup'></popup>
	</div>
</template>
<script type="text/javascript">
import Popup from '@/components/popup.vue'
	export default {
		data () {
			return {
				show:false	
			}
		},
		methods:{
			push () {
				this.show = true;
				this.$M.setCookie();
			},
			closePopup () {
				this.show = false;
			}
		},
		components:{
			Popup
		}
	}
</script>

<style lang="less">
	.list{
		width: 100%;
		height: 400px;
		background-color: yellow;
	}
</style>