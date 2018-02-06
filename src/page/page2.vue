<template>
	<div id="page2">
		<jia-header :head-title="title" :left-options="leftOptions"></jia-header>
		<div class="content" >
			<div>this is page2</div>
			<div>{{'dddddddddddfasdf' | formatTitle}}</div>
		</div>
		<jia-footer></jia-footer>
	</div>
</template>
<script>
	import JiaHeader from '../component/header.vue'
	import JiaFooter from '../component/footer.vue'
	export default {
		name: 'page2',
		data() {
			console.log("page2 load");
			return {
				title: 'page2',
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
		  console.log("mounted page2");
	  },
	  activated(){
		  console.log("activated page2");
	  },
	  deactivated(){
		  console.log("deactivated page2");
	  },
	  created(){
		  console.log("created page2");
	  },
	  destroyed(){
		  console.log("destroyed page2");
	  },
	  beforeRouteEnter(to, from, next){
		  console.log("beforeRouteEnter page2");
		next();
	  },
	  beforeRouteLeave(to, from, next) {
		  console.log("beforeRouteLeave page2");
		next();
	  }
	}
</script>

<style lang = 'less'>
</style>