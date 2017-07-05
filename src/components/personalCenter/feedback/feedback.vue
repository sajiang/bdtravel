<template>
	<div class="feedback">
		<div class="title">
			我的反馈
		</div>
		<div class="textCenter">
			<textarea placeholder="请填写您的反馈意见"></textarea>
		</div>
		<div class="submit mgt10 yellowBackBtn fontBold textCenter pd5">
			<span>提交</span>
		</div>
	</div>
</template>

<script>

export default {
	name: 'feedback',
	data () {
		return {
		  	imgPath:"../../static/",
		}
	}
}
</script>

<style lang='less' scoped>
@import '../../../assets/common.less';
.feedback{
	background-color: @backGrey;
	position: fixed;
	top: 0em;
	left: 0em;
	bottom: 0em;
	height: 100%;
	width: 100%;
	.textCenter;
	.title{
		.textCenter;
		color: @yellow;
		.font1_1;
		.fontBold;
		.pd5;
		border-bottom: 1px solid @borderGrey;
		background-color: white;
	}
	textarea{
		border: none;
		outline: none;
		height: 20em;
		width: 90%;
		.pd10;
		.mgt10;
	}
	.submit{
		width: 90%;
		display: inline-block;
	}
}

</style>
