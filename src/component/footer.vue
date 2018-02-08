<template>
    <div id="footer">
      <div class="footer-in" @click="to('page1')" :class="{active:$route.name == 'home'}">
        <div class="nav"> <i class="icon iconfont icon-home"></i> </div>
        <div class="front-12 title">首页</div>
      </div>
      <div class="footer-in" @click="to('page2')" :class="{active:$route.name == 'financingService'}">
        <div class="nav"><i class="icon iconfont" :class="{iconJRFW:$route.name !== 'financingService',iconQB:$route.name == 'financingService'}"></i></div>
        <div class="front-12 title">服务</div>
      </div>
      <div class="footer-in" @click="to('page3')" :class="{active:$route.name =='tempFinanceCenter'}">
        <div class="nav"><i class="icon iconfont" :class="{iconJRZL:$route.name !== 'tempFinanceCenter',iconJRZLFull:$route.name == 'tempFinanceCenter'}"></i></div>
        <div class="front-12 title">助理</div>
      </div>
    </div>
</template>

<script>
 export default {
    methods:{
      to (name) {
        this.$router.push(name);
      }
    }
 }
</script>

<style scoped lang="less"  rel="stylesheet/less">
@import url( '../common/less/common.less');
#footer {
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    -webkit-box-shadow: 0 -0.02667rem 0.05333rem rgba(0, 0, 0, 0.1);
    box-shadow: 0 -0.02667rem 0.05333rem rgba(0, 0, 0, 0.1);
    .flexbox();
    height: 55px;
    background: #F7F7F7;
    -webkit-align-items: center;
    align-items: center;
    .title {
        margin-top: 8/@fontRemBase;
    }
    .footer-in {
        .flexN(1);
        color: #676767;
        text-align: center;
        &.active{
          color: #FF7900;
        }
    }
    .nav {
        width: 50/@fontRemBase;
        height: 50/@fontRemBase;
        margin: 0 auto;
        i{
          font-size: 50/@fontRemBase;
        }
    }

}
</style>
