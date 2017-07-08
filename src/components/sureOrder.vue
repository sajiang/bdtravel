<template>
	<div class="sureOrder">
		<div class="sureOrderBody">
			<div class="carInfo clearfix">
				<div class="wh70p">
					<div>大众捷达或同级轿车</div>
					<div class="mgt5">外牌|经济型</div>
					<div class="mgt5 font0_9 orange">《北斗租车协议》</div>
				</div>
				<div class="wh30p">
					<img :src="imgPath+'deleteLater.png'">
				</div>
			</div>
			<div class="orderInfo mgt10">
				<div class="mgt5">
					<span>车辆租金</span>
					<span class="yellow">（天）</span>
					<span class="fr">178元</span>
				</div>
				<div class="mgt10">
					<span>基本保险费</span>
					<span class="yellow">！</span>
					<span class="fr">
						<span class="font0_9 fontGrey mgr10">40×2</span>
						<span>80元</span>
						<i-switch v-model="switchInsurance" size="small" @on-change="change"></i-switch>
					</span>
				</div>
				<div class="mgt10">
					<span>租车押金</span>
					<span class="yellow">（还车时释放）</span>
					<span class="fr bigFont">
						<span>1500元</span>
					</span>
				</div>
				<div class="mgt10">
					<span>全面保障服务</span>
					<span class="yellow">！</span>
					<span class="fr bigFont">
						<span class="font0_9 fontGrey mgr10">50×2</span>
						<span>100元</span>
					</span>
				</div>
				<div class="mgt10">
					<span class=" fontBold">初次费用合计</span>
					<span class="yellow">（租金+保险+押金）</span>
					<span class="fr bigFont">
						<span>1858元</span>
					</span>
				</div>
			</div>
			<div class="ruleInfo fontGrey font1_1 fontBold">
				<span>规则说明</span>
				<span class="fr">></span>
			</div>
			<div class="remind fontGrey">
				<div class="font1_1 fontBold">温馨提示</div>
				<div class="smallFont mgt5">
					<p>1.取车时需携带下单人本人身份证和本人驾驶证</p>
					<p>2.取车前3小时可免费取消，否则定金不退不换</p>
					<p>3.还车后将冻结1500元违章押金，还车15天后无违章，将返还该笔押金<span class="orange">为避免押金退还纠纷，尽量在北斗出行中立平台支付！</span></p>
				</div>
			</div>
		</div>
		
		<div class="bottom clearfix">
			<div class="wh70p smallFont">
				<div class="fontGrey">
					<span>定金</span>
					<span class="bigFont orange fontBold">185.8</span>
					<span>元(总金额10%，订单完成退还)</span>
				</div>
				<div class="orange">
					为避免押金退还纠纷，请在中立平台支付！
				</div>
			</div>
			<div class="wh30p">
				<div class=" yellowBackBtn fontBold textCenter" @click="toPayPage()">
					<span>立即租车</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import iSwitch from 'iview/src/components/switch';
export default {
	name: 'sureOrder',
	data () {
		return {
		  	imgPath:"../../static/",
		  	switchInsurance:true,
		}
	},
	components:{
		"i-switch":iSwitch,
	},
	methods:{
		change (status) {
			console.log(status)
		},
		toPayPage(){
			this.$router.push({ path:"/personal_center/account/pay/1" });
		}
	}
}
</script>

<style lang='less' scoped>
@import '../assets/common.less';
.sureOrderBody{
	background-color: @backGrey;
	padding: 0.5em;
	position: absolute;
	bottom :5em;
	top: 0em;
}
.carInfo{
	background-color: white;
	padding:1em ;
}
.orderInfo{
	background-color: white;
	padding:1em;
}
.ivu-switch-checked{
	border-color: @yellow;
    background-color: @yellow;
}
.ruleInfo{
	background-color: white;
	.pd10;
	.mgt10;
}
.remind{
	background-color: white;
	.pd10;
	.mgt10;
	p{
		line-height: 1.2em;
	}
}
.bottom{
	position: fixed;
	bottom: 0em;
	width: 100%;
	background-color: white;
	padding: 1em 0.5em;
	height: 5em;
	.yellowBackBtn{
		padding: 1em 0em;
		vertical-align: middle;
		display: inline-block;
		width: 6em;
	}
}
</style>
