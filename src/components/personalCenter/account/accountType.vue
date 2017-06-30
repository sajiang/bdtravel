<template>
	<div class="accountType">
		<div class="type"  @click="toRecharge()">
			<img :src="imgPath+'recharge.png'" class="middleIcon">
			<span>充值</span>
			<span class="fr yellow fontBold">></span>
		</div>
		<div class="type" @click="toLeftMoney()">
			<img :src="imgPath+'leftMoney.png'" class="middleIcon" >
			<span>余额</span>
			<span class="fr yellow fontBold">></span>
			<span class="fr yellow fontBold mgr10">0.00元</span>
		</div>
		<div class="type" @click="toVoucher()">
			<img :src="imgPath+'voucher.png'" class="middleIcon">
			<span>代金券</span>
			<span class="fr yellow fontBold">></span>
			<span class="fr yellow fontBold mgr10">0张</span>
		</div>
	</div>
</template>

<script>

export default {
	name: 'accountType',
	data () {
		return {
		  	imgPath:"../../../static/",
		}
	},
	methods:{
		toRecharge(){
			this.$router.push({ path:"/personal_center/account/recharge" });
		},
		toLeftMoney(){
			this.$router.push({ path:"/personal_center/account/left_money" });
		},
		toVoucher(){
			this.$router.push({ path:"/personal_center/account/voucher" });
		},
	}
}
</script>

<style lang='less' scoped>
@import '../../../assets/common.less';
.accountType{
	background-color: @backGrey;
	position: fixed;
	top: 0em;
	left: 0em;
	bottom: 0em;
	height: 100%;
	width: 100%;
}
.type{
	.mgt5;
	.pd10;
	background-color: white;
}
</style>
