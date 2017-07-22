<template>
  <div class="hello">
    <div class="nav fontBold">
      <div class="pd10 clearfix">
        <div class="wh10p" @click="showPersonalCenter"><img class="icon" :src="imgPath+'person.png'"></div>
        <div class="wh40p textCenter" :class="navInfo.fisrt=='order'?'yellow':''" @click="navInfo.fisrt='order'"><span>打车</span></div>
        <div class="wh40p textCenter" :class="navInfo.fisrt=='drive'?'yellow':''" @click="navInfo.fisrt='drive'"><span>自驾租车</span></div>
        <div class="wh10p"><img class="icon" :src="imgPath+'/info.png'" style="position: absolute;top: 1.2em;right: 1em;"></div> <!--spf-->
      </div>
      <div class="clearfix">
      	<!--spf-->
        <div class="wh50p textRight"><span :class="navInfo.second=='passenger'?'yellowNav':''" class="mgr10 pd4 inlineBlock" @click="navInfo.second='passenger'">{{navInfo.fisrt=='order'?'乘客':'我要租车'}}</span></div>
        <div class="wh50p textLeft"><span :class="navInfo.second=='owner'?'yellowNav':''" class="mgl10 pd4 inlineBlock" @click="navInfo.second='owner'">{{navInfo.fisrt=='order'?'司机':'车主'}}</span><span class="smallFont saleBack">注册有奖</span></div>
        
      </div>
    </div>
    <div v-show="personalCenterShow" @click="personalCenterShow=!personalCenterShow" class="ivu-modal-mask"></div>
    <div class="personalCenter" v-show="personalCenterShow">
      <div class="userName textCenter pd10">
        <img class="icon" :src="imgPath+'person.png'">
        <span>155*****246</span>
      </div>
      <div class="menu mgt10">
        <div class="pd5" @click="toMyOrder">
          <img class="middleIcon" :src="imgPath+'order.png'">
          <span class="verticalBottom">订单</span>
        </div>
        <div class="pd5" @click="toAccount">
          <img class="middleIcon" :src="imgPath+'account.png'">
          <span class="verticalBottom">钱袋</span>
        </div>
        <div class="pd5" @click="toSetting">
          <img class="middleIcon" :src="imgPath+'setting.png'">
          <span class="verticalBottom">设置</span>
        </div>
        <div class="pd5" @click="toFeedback">
          <img class="middleIcon" :src="imgPath+'feedback.png'">
          <span class="verticalBottom">您的反馈</span>
        </div>
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
      },
      personalCenterShow:false,
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
        if (this.navInfo.fisrt=="order"||this.navInfo.fisrt=="drive"){
          let path=this.navInfo.fisrt+"_"+this.navInfo.second;
          this.$router.push({ path });
        }
      },
      deep:true
    },
    "$route":function (val , oldval) {
      let navInfoStr=this.$route.path;
      navInfoStr=navInfoStr.substr(1);
      this.navInfo.fisrt=navInfoStr.split("_")[0];
      this.navInfo.second=navInfoStr.split("_")[1];
    }
  },
  methods:{
    showPersonalCenter(){
      this.personalCenterShow=true;
    },
    toMyOrder(){
      this.$router.push({ path:"/personal_center/my_order/my_order_list" });
    },
    toAccount(){
      this.$router.push({ path:"/personal_center/account/account_type" });
    },
    toSetting(){
      this.$router.push({ path:"/personal_center/setting/setting_index" });
    },
    toFeedback(){
      this.$router.push({ path:"/personal_center/feedback" });
    },
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
.saleBack{
  background-image: url("../../../static/sale.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .inlineBlock;
  .textRight;
  padding: 0.3em 1em;
}
.personalCenter{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: white;
  width: 70%;
  z-index: 1001;
}

</style>
