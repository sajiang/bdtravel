<template>
	<div class="pay">
		<div class="mgt30 fontGrey pd5">
			选择支付方式
		</div>
		<div class="payType">
			<div class="wapper" @click="payType=1">
				<img class="bigIcon" :src="imgPath+'aliPay.png'">
				<span class="mgl10">支付宝支付</span>
				<img class="fr middleIcon mgt2" :src="payType==1?(imgPath+'checked.png'):(imgPath+'unchecked.png')">
			</div>
		</div>
		<div class="payType" @click="payType=2">
			<div class="wapper">
				<img class="bigIcon" :src="imgPath+'wechat.png'">
				<span class="mgl10">微信支付</span>
				<img class="fr middleIcon mgt2" :src="payType==2?(imgPath+'checked.png'):(imgPath+'unchecked.png')">
			</div>
		</div>
		<div class="payType" @click="payType=3">
			<div class="wapper">
				<img class="bigIcon" :src="imgPath+'unionPay.png'">
				<span class="mgl10">银行卡支付</span>
				<img class="fr middleIcon mgt2" :src="payType==3?(imgPath+'checked.png'):(imgPath+'unchecked.png')">
			</div>
		</div>
		<div class="payType" @click="payType=4" v-if="$route.params.showLeftMoney==1">
			<div class="wapper">
				<img class="bigIcon" :src="imgPath+'leftMoney.png'">
				<span class="mgl10">余额支付</span>
				<img class="fr middleIcon mgt2" :src="payType==4?(imgPath+'checked.png'):(imgPath+'unchecked.png')">
			</div>
		</div>
		<div class="nextStep yellowBackBtn fontBold textCenter pd5">
			<span>确认支付</span>
		</div>
	</div>
</template>

<script>

export default {
	name: 'pay',
	data () {
		return {
		  	imgPath:"../../../static/",
		  	payType:1
		}
	},
	created(){}
}
</script>

<style lang='less' scoped>
@import '../../../assets/common.less';
.pay{
	background-color: @backGrey;
	position: fixed;
	top: 0em;
	left: 0em;
	bottom: 0em;
	height: 100%;
	width: 100%;
}
.payType{
	.wapper{
		padding: 0.5em 1em;
		background-color: white;
		border-bottom: 1px solid @borderGrey;
		line-height: 2em;
		.fontBold;
		.bigIcon{
			width: 2em;
			height: 2em;
		}
	}
}
.nextStep{
	position: fixed;
	bottom: 0.5em;
	left: 0.5em;
	right: 0.5em;
}
.mgt2{
	margin-top: 0.2em;
}
</style>
