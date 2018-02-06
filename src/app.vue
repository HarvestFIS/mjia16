<template>
	<div id="app">
		<transition name="router-fade" mode="out-in">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</transition>
	</div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang = 'less'>
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import url(./common/less/common.less);
@import url(./common/less/base.less);
.router-fade-enter-active,
.router-fade-leave-active {
	-webkit-transition: opacity 0.1s;
	transition: opacity 0.1s;
}
.router-fade-enter,
.router-fade-leave-active {
	opacity: 0;
}
</style>
