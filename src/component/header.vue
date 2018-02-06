<template>
<div id="header" :class="_headClass">
    <!-- 标题 -->
    <span class="header" v-if="headTitle">{{headTitle}}</span>
    <!-- 返回按钮 -->
    <a class="back icon iconfont icon-leftBack " @click="onClickBack" v-if="_leftOptions.showBack"></a>
    <!-- 左边文字 -->
    <a class="front-14 header-right" v-if="_rightOptions.showMore" v-bind:href="_rightOptions.href">{{_rightOptions.name}}</a>

    <!-- 融资服务自定义头部 -->
    <slot name="service"></slot>
    <!-- 右边自定义 -->
    <slot name="header-right"></slot>
</div>
</template>

<script>
import objectAssign from 'object-assign'
export default {
  data() {
    return {

    }
  },
  props: {
    headTitle: String,
    headClass: String,
    leftOptions: Object,
    rightOptions: Object
  },
  computed: {
    _leftOptions () {
      return objectAssign({
        showBack: true,
        preventGoBack: false
      }, this.leftOptions || {})
    },
    _rightOptions (){
      return objectAssign({
        showMore: false,
        name: this.$route.meta.rightName,
        href: this.$route.meta.rightHref
      }, this.rightOptions || {})
    },
    // title () {
    //   return this.$route.meta.name
    // },
    rightContent () {
      return this.$route.meta.rightName
    },
    // 这里两个地方都可以传值，路由里面和页面里面都可以传值
    _headClass (){
      return this.headClass || this.$route.meta.headerClass
    }
  },
  methods: {
    onClickBack () {
      if (this._leftOptions.preventGoBack) {
        this.$emit('on-click-back')
      } else {
        this.$router ? this.$router.back() : window.history.back()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" rel="stylesheet/less">
#header {
  height: 40px;
  line-height: 40px;
  background: #ffffff;
  color: #000000;
  font-weight: bold;
  text-align: center;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
    &.light {
        background-color: #FE6600;
        color: #fff;
        .back {
            color: #ffffff;
        }
    }
    .header {
        display: inline-block;
    }
    .back {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        padding: 0 15px;
        font-size: 20px;
        color: #000000;
    }
    .header-right{
      display: block;
      position: absolute;
      top: 0;
      right: 10px;
      color: #000000;
    }
}

</style>
