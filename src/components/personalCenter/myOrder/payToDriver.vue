<template>
	<div class="payToDriver">
		<div class="mgt30 info pd5">
			<div class="pd10 borderBottom clearfix" >
				<span class="mgt10 inlineBlock">车费</span>
				<span class="fr mgt10 mgl10 inlineBlock">元</span>
				<span class="font2 yellow fr fontBold ">78.8</span>
			</div>
			<div class="pd10  clearfix" @click="toSelectVoucher">
				<span class="">打车券抵扣</span>
				<span class="fr mgl10 fontGrey">></span>
				<span class="fr yellow">-6元</span>
			</div>
		</div>
		<div class="yellowBackBtn payBtn rounded-corners fontBold textCenter pd5" @click="toPay">
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
	methods:{
		toPay(){
			this.$router.push({ path:"/personal_center/account/pay/1" });
		},
		toSelectVoucher(){
			this.$router.push({ path:"/personal_center/account/voucher/1" });
		}
	}
}
</script>

<style lang='less' scoped>
@import '../../../assets/common.less';
.payToDriver{
	background-color: @backGrey;
	position: fixed;
	top: 0em;
	left: 0em;
	bottom: 0em;
	height: 100%;
	width: 100%;
	padding: 1em;
}
.info{
	background-color: white;
	.rounded-corners(6px);
}
.payBtn{
	.rounded-corners(6px);
	margin-top: 4em;
}

</style>
