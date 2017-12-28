<template>
  <div id="app">
    <transition :name="'mjia-fade-'+(direction === 'forward'?'out':'in')">
      <router-view ></router-view>
    </transition>  
    {{ddd}}
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'app',
  data () {
    return {
 
    }
  },
  computed:{
    ...mapState({
      direction: state => state.routerView.direction
    }),
    ddd () {
      return this.direction;
    }
  }
}
</script>

<style lang = 'less'>
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import url(./common/less/common.less);
@import url(./common/less/base.less);
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.mjia-fade-out-enter-active,
.mjia-fade-out-leave-active,
.mjia-fade-in-enter-active,
.mjia-fade-in-leave-active {
  will-change: transform;
  transition: all 500ms;
  height: 100%;
  top: 46px;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}
.mjia-fade-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.mjia-fade-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.mjia-fade-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.mjia-fade-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
