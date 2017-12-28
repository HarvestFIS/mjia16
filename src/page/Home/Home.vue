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
	// import ajax from '@/api/ajax.js'
	import {findLoan} from '@/api/api.js'
	export default {
		methods:{
			push () {
				window.location.href = 'http://localhost:8888/external_page/demo/demo.html'
			},
			back () {
				
			},
			// 这个是原生ajax调用的方法
			getInfotion() {
				// http://www.zalljinfu.com/applyInformation/findLoanIntentionDynamicInfoListForZjf.do
				ajax({
					url: '/applyInformation/findLoanIntentionDynamicInfoListForZjf.do',
					type: 'post',
					beforeSend: function(){
						console.log('这个方法会先执行')
					},
					success: function(data, x) {
						console.log(data)
						console.log(x)
					},
					error: function(status, x) {
						console.log(status)
						console.log(x)
					}
				})
			},

			getInformation() {
				let result = findLoan()
				console.log(result)
			}
		},
		mounted() {
			// this.getInfotion();
			this.getInformation();
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