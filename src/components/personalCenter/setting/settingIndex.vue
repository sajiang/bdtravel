<template>
	<div class="settingIndex">
		<div class="type"  @click="toRecharge()">
			<span>密码更改</span>
			<span class="fr yellow fontBold">></span>
		</div>
		<div class="type" @click="toLeftMoney()">
			<span>常见问题</span>
			<span class="fr yellow fontBold">></span>
		</div>
		<div class="type" @click="toVoucher()">
			<span>法律条款</span>
			<span class="fr yellow fontBold">></span>
		</div>
		<div class="loginOut mgt5 yellowBackBtn fontBold textCenter pd5">
			<span>下一步</span>
		</div>
	</div>
</template>

<script>

export default {
	name: 'settingIndex',
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
.settingIndex{
	background-color: @backGrey;
	position: fixed;
	top: 0em;
	left: 0em;
	bottom: 0em;
	height: 100%;
	width: 100%;
}
.type{
	.pd10;
	background-color: white;
	border-bottom: 1px solid @borderGrey;
}

</style>
