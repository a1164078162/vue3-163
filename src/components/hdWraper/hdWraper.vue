<template>
  <div class="hdWraper">
    <div class="homeHeader">
      <a href="javascript:;" class="logo">
        <img
          src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png"
          alt="logo"
        />
      </a>
      <div class="topinput">
        <i class="iconfont iconfangdajing"></i>
        <span class="placeholder">搜索商品, 共21735款好物</span>
      </div>
      <div class="loginBtn">登录</div>
    </div>
    <div class="tabWraper" ref="bsheader">
      <header>
        <ul class="tabList">
          <li class="tab active">推荐</li>
          <li class="tab">居家生活</li>
          <li class="tab">服饰鞋包</li>
          <li class="tab">美食酒水</li>
          <li class="tab">个人清洁</li>
          <li class="tab">母婴亲子</li>
          <li class="tab">运动旅行</li>
          <li class="tab">数码家电</li>
          <li class="tab">全球特色</li>
        </ul>
      </header>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from "@better-scroll/core";
export default {
  mounted() {
    new BScroll(this.$refs.bsheader, {
      scrollX: true
    });
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.hdWraper
  height 148px
  position flex
  top 0
  left 0
  background #ffffff
  .homeHeader
    height 56px
    display flex
    padding 16px 30px
    line-height 56px
    text-align center
    .logo
      width 138px
      height 40px
      line-height 40px
      margin 8px 20px 0 0
    .topinput
      display flex
      justify-content center
      width 442px
      height 56px
      background-color #ededed
      border-radius 10px
      font-size 28px
      .iconfont
        font-size 36px
        padding-right 10px
      .placeholder
        color #666
    .loginBtn
      width 74px
      height 40px
      line-height 40px
      margin 8px 0 0 16px
      text-align center
      color #b4282d
      border 1px solid #b4282d
      border-radius 8px
      font-size 24px
  .tabWraper
    width 85%
    height 60px
    overflow hidden
    header
      display flex
      width 1430px
      height 60px
      margin-bottom -1px
      .tabList
        display flex
        justify-content space-around
        width 100%
        height 60px
        padding 0 20px
        .tab
          font-size 28px
          color #333
          margin-top 13px
          text-align center
          &.active
            width 100px
            color #b4282d
            border-bottom 4px solid #b4282d
</style>
