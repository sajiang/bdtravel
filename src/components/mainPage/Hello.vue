<template>
  <div class="hello">
    <div class="nav fontBold">
      <div class="pd10 clearfix">
        <div class="wh10p"><img class="icon" :src="imgPath+'/deleteLater.png'"></div>
        <div class="wh40p textCenter"><span>打车</span></div>
        <div class="wh40p textCenter"><span>自驾租车</span></div>
        <div class="wh10p"><img class="icon" :src="imgPath+'/deleteLater.png'"></div>
      </div>
      <div class="clearfix">
        <div class="wh50p textRight"><span class="mgr10 pd5 inlineBlock">乘客</span></div>
        <div class="wh50p textLeft"><span class="mgl10 pd5 inlineBlock">车主</span><span class="smallFont">注册有奖</span></div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import nav from '@/components/nav'
export default {
  name: 'hello',
  data () {
    return {
      imgPath:"../../static/",
    }
  },
  components: {
    'v-nav': nav
  }
}
</script>

<style lang='less' scoped>
@import '../../assets/common.less';
.nav{
  box-shadow: 0em 0.01em 0.25em #888888;
  color:@fontGrey;
}
</style>
