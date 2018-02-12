<template>
		<div id="page1">
			<jia-header :head-title="title" :left-options="leftOptions"></jia-header>
			<div class="content" >
			<div>this is page1</div>
			<div>{{$store.state.count}}</div>
			</div>
			<jia-footer></jia-footer>
		</div>
</template>
<script>
	import JiaHeader from '../component/header.vue'
	import JiaFooter from '../component/footer.vue'
  import * as util from 'jiaUtil'
  import c from '@/common/js/MyClass.js'

  export default {
	  name: 'home',
	  data() {
	  	console.log("page1 load");
		  return {
			  title: 'page1',
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
	  	console.log(new c().count());
	  	console.log(c.pp());
	  	console.log("mounted page1");
	  },
	  activated(){
		  console.log("activated page1");
		  this.$store.commit("increment");
		},
	  deactivated(){
		  console.log("deactivated page1");
		},
	  created(){
			console.log("created page1");
		},
	  destroyed(){
		  console.log("destroyed page1");
		},
	  beforeRouteEnter(to, from, next){
	  	//初始化
			console.log("beforeRouteEnter page1");
		//Vue.$util.print();
		  next();
		},
	  beforeRouteUpdate (to, from, next) {
		  console.log("beforeRouteUpdate page1");

	  },
	  beforeRouteLeave(to, from, next) {
	  	//销毁
		  console.log("beforeRouteLeave page1");
		  next();
	  }
  }
</script>

<style lang = 'less'>
</style>