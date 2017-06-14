<template>
  <div class="hello">
    <div class="nav fontBold">
      <div class="pd10 clearfix">
        <div class="wh10p"><img class="icon" :src="imgPath+'/deleteLater.png'"></div>
        <div class="wh40p textCenter" :class="navInfo.fisrt=='order'?'yellow':''" @click="navInfo.fisrt='order'"><span>打车</span></div>
        <div class="wh40p textCenter" :class="navInfo.fisrt=='drive'?'yellow':''" @click="navInfo.fisrt='drive'"><span>自驾租车</span></div>
        <div class="wh10p"><img class="icon" :src="imgPath+'/deleteLater.png'"></div>
      </div>
      <div class="clearfix">
        <div class="wh50p textRight"><span :class="navInfo.second=='passenger'?'yellowNav':''" class="mgr10 pd5 inlineBlock" @click="navInfo.second='passenger'">{{navInfo.fisrt=='order'?'乘客':'我要租车'}}</span></div>
        <div class="wh50p textLeft"><span :class="navInfo.second=='owner'?'yellowNav':''" class="mgl10 pd5 inlineBlock" @click="navInfo.second='owner'">车主</span><span class="smallFont">注册有奖</span></div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      imgPath:"../../static/",
      navInfo:{
        fisrt:"",
        second:""
      }
    }
  },
  created:function (argument) {
    //初始化navInfo
    let navInfoStr=this.$route.path;
    navInfoStr=navInfoStr.substr(1);
    this.navInfo.fisrt=navInfoStr.split("_")[0];
    this.navInfo.second=navInfoStr.split("_")[1];
  },
  watch:{
    navInfo:{
      handler:function (val , oldval) {
        let path=this.navInfo.fisrt+"_"+this.navInfo.second;
        this.$router.push({ path });
      },
      deep:true
    }
  },
  methods:{
  }
}
</script>

<style lang='less' scoped>
@import '../../assets/common.less';
.nav{
  box-shadow: 0em 0.01em 0.25em #888888;
  color:@fontGrey;
  height: 6em;
}
.yellowNav{
  .yellow;
  border-bottom: 0.2em solid @yellow;
}
</style>
