<template>
  <footer class="footer_guide">
    <a href="javascript:;" class="guide_item" :class="{on: isCurrent('/home')}" @click="goTo('/home')">
      <span class="item_icon">
        <i class="iconfont iconshouye"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: isCurrent('/classify')}" @click="goTo('/classify')">
      <span class="item_icon">
        <i class="iconfont iconchuangtougui"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: isCurrent('/general')}" @click="goTo('/general')">
      <span class="item_icon">
        <i class="iconfont iconimage-outline"></i>
      </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:  isCurrent('/shopping')}" @click="goTo('/shopping')">
      <span class="item_icon">
        <i class="iconfont icongouwuchekong"></i>
      </span>
      <span>购物车</span>
    </a>
     <a href="javascript:;" class="guide_item" :class="{on: isCurrent('/personage')}" @click="goTo('/personage')">
      <span class="item_icon">
        <i class="iconfont icongerenzhongxin"></i>
      </span>
      <span>我的</span>
    </a>
  </footer>
</template>

<script type="text/ecmascript-6">
export default {
  methods:{
    goTo(path){
      this.$router.replace(path)
    },
    isCurrent(path){
     return this.$route.path === path
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.footer_guide
  width 100%
  height 98px
  position fixed
  left 0
  bottom 0
  background #ffffff
  z-index 100
  display flex
  align-items center
  .guide_item
    display flex
    flex 1
    text-align center
    flex-direction column
    .item_icon
      padding-bottom 8px
    &.on
      color #f40
    .iconfont
      font-size 40px

</style>
