<template>
	<div class="list">

		<router-link to="/detail">详情</router-link>
		<router-link to="/home">首页</router-link>
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
				
			},
			closePopup () {
			}
		},
		components:{
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