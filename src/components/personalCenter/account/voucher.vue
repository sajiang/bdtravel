<template>
	<div class="voucher">
		<div class="item">
			<div class="clearfix">
				<span class="bigFont inlineBlock mgt5 fontGrey">代驾券·新用户专享</span>
				<span class="fr yellow">
					<span>¥</span>
					<span class="font2_5">8</span>
				</span>
			</div>
			<div class="mgt5">
				<span class="yellow smallFont">有效期值2017-06-27</span>
			</div>
			<div class="mgt5">
				<span class="fontGrey smallFont">限代驾服务使用</span>
			</div>
		</div>
		<div class="textCenter mgt10">
			<span class="font0_9 fontGrey">没有更多可用券</span>
			<span class="font0_9 yellow">兑换出行券 >></span>
		</div>
	</div>
</template>

<script>

export default {
	name: 'voucher',
	data () {
		return {
		  	imgPath:"../../../static/",
		}
	}
}
</script>

<style lang='less' scoped>
@import '../../../assets/common.less';
.voucher{
	background-color: @backGrey;
	position: fixed;
	top: 0em;
	left: 0em;
	bottom: 0em;
	height: 100%;
	width: 100%;
	.pd5;
}
.item{
	background-color: white;
	.pd5;
	border-bottom: 4px solid @borderGrey;
}
</style>
