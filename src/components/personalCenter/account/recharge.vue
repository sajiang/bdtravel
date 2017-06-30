<template>
	<div class="recharge">
		<div class="payType">
			<div class="wapper">
				<img :src="imgPath+'onlinePayment.png'">
			</div>
		</div>
		<div class="payType">
			<div class="wapper">
				<img :src="imgPath+'aliPay.png'">
			</div>
		</div>
		<div class="payType">
			<div class="wapper">
				<img :src="imgPath+'wechatPay.png'">
			</div>
		</div>
		<div class="nextStep yellowBackBtn fontBold textCenter pd5">
			<span>下一步</span>
		</div>
	</div>
</template>

<script>

export default {
	name: 'recharge',
	data () {
		return {
		  	imgPath:"../../../static/",
		}
	}
}
</script>

<style lang='less' scoped>
@import '../../../assets/common.less';
.recharge{
	background-color: @backGrey;
	position: fixed;
	top: 0em;
	left: 0em;
	bottom: 0em;
	height: 100%;
	width: 100%;
}
.payType{
	margin-left: 3em;
	padding: 1em;
	.wapper{
		background-color: white;
		display: inline-block;
	}
	img{
		width: 7em;
	}
}
.nextStep{
	position: fixed;
	bottom: 0.5em;
	left: 0.5em;
	right: 0.5em;
}
</style>
