<template>
	<div class="home">
		<button @click='back'>
			back返回
		</button>
		<button @click='push'>
			这是home
		</button>
	</div>
</template>
<script type="text/javascript">
	export default {
		methods:{
			push () {
				window.location.href = 'http://localhost:8888/external_page/demo/demo.html'
			},
			back () {
				
			}
		}
	}
</script>

<style lang="less">
	.home{
		width: 100%;
		height: 400px;
		background-color: blue;
	}
</style>