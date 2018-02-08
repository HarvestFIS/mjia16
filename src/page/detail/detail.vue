<template>
	<div class="detail">
		<button @click='back'>
			back返回
		</button>
		<button @click='push'>
			这是detail1111
		</button>

		<router-link to="/home">首页</router-link>
		<router-link to="/list">列表</router-link>
	</div>
</template>
<script type="text/javascript">
	export default {
		methods:{
			push () {
				//this.$router.push({name:'list'})
				window.location.href = 'http://localhost:8888/external_page/demo/demo.html'
			},
			back () {
				this.$router.push({name:'home'})
			}
		},
		data () {
			return {
				imgs:[]
			}
		}
	}
</script>
<style lang="less">
	.detail{
		width: 100%;
		height: 400px;
		background-color: red;
	}
	.img{
		width: 100px;
		height: 100px;
		img{
			width: 100%;
			height: 100%;
		}
	}
</style>