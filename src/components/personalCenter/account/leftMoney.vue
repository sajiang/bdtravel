<template>
	<div class="leftMoney">
		<div class="main">
			<div>
				<span>余额（元）</span>
				<span class="fr font0_9 fontGrey">常见问题</span>
				<img class="icon fr" :src="imgPath+'questionmark.png'">
			</div>
			<div class="mgt20">
				<span class="font2_5 yellow">0.00</span>
			</div>
			<div class="smallFont mgt10">
				<span class="fontGrey">如需提现，请先进行</span>
				<span class="yellow">实名认证></span>
			</div>
		</div>
		<div class="textCenter mgt10">
			<span class="font0_9 fontGrey">暂无明细</span>
		</div>
		<div class="withdrawCash yellowBackBtn fontBold textCenter pd5">
			<span>提现</span>
		</div>
	</div>
</template>

<script>

export default {
	name: 'leftMoney',
	data () {
		return {
		  	imgPath:"../../../static/",
		}
	}
}
</script>

<style lang='less' scoped>
@import '../../../assets/common.less';
.leftMoney{
	background-color: @backGrey;
	position: fixed;
	top: 0em;
	left: 0em;
	bottom: 0em;
	height: 100%;
	width: 100%;
	.pd5;
}
.main{
	background-color: white;
	.pd5;
}
.withdrawCash{
	position: fixed;
	bottom: 0.5em;
	left: 0.5em;
	right: 0.5em;
}
</style>
