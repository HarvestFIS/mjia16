<template>
	<div id="page3">
		<jia-header :head-title="title" :left-options="leftOptions"></jia-header>
		<div class="content" >
			<div>this is page3</div>
		</div>
		<jia-footer></jia-footer>
	</div>
</template>
<script>
	import JiaHeader from '../component/header.vue'
	import JiaFooter from '../component/footer.vue'
	export default {
		name: 'page3',
		data() {
			console.log("page3 load");
			return {
				title: 'page3',
				leftOptions: {
					showBack: false
				},
				msg: '关于卓尔金融系统升级影响正常访问的报告',
				banner: [],
				changeCount: 0,
				loanDyamicList: []
			}
		},
		components: {
			JiaHeader,
			JiaFooter
		},
		methods: {},
	  mounted() {
		  console.log("mounted page3");
	  },
	  activated(){
		  console.log("activated page3");
	  },
	  deactivated(){
		  console.log("deactivated page3");
	  },
	  created(){
		  console.log("created page3");
	  },
	  destroyed(){
		  console.log("destroyed page3");
	  },
	  beforeRouteEnter(to, from, next){
		  console.log("beforeRouteEnter page3");
		next();
	  },
	  beforeRouteLeave(to, from, next) {
		  console.log("beforeRouteLeave page3");
		next();
	  }
	}
</script>

<style lang = 'less'>
</style>