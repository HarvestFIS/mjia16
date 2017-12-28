<template>
	<div class="list">
		<button @click='push'>
			这是list
		</button>
	</div>
</template>
<script type="text/javascript">
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