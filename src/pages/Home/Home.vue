<template>
  <div class="homeHeader">
    <hdWraper></hdWraper>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import hdWraper from '../../components/hdWraper/hdWraper.vue'  
  export default {
    components:{
      hdWraper
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>


</style>
