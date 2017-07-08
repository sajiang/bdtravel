<template>
	<div class="makeCommentOnCar">
		<div class="driverInfo clearfix">
			<div class="wh30p">
				<img class="avatar" :src="imgPath+'deleteLater.png'">
			</div>
			<div class="wh70p">
				<div class="mgt5">
					<span class="">比亚迪秦或同级轿车</span>
				</div>
				<div class="mgt5">
					<span class="fontGrey smallFont">沪牌 |</span>
					<span class="fontGrey smallFont">自动 |</span>
					<span class="fontGrey smallFont">5座 |</span>
					<span class="fontGrey smallFont">1.5T混动</span>
				</div>
			</div>
		</div>
		<div class="orderInfo">
			<div class="textCenter">
				<span class="font2_5">185.00</span>
				<span class="fontGrey smallFont">元</span>
			</div>
			<div class="textCenter pd10">
				<div class="">
					<img :src="imgPath+'starYellow.png'" class="middleIcon">
					<img :src="imgPath+'starYellow.png'" class="middleIcon">
					<img :src="imgPath+'starYellow.png'" class="middleIcon">
					<img :src="imgPath+'starYellow.png'" class="middleIcon">
					<img :src="imgPath+'starGrey.png'" class="middleIcon">
				</div>
			</div>
			<div class="tags">
				<span class="chosenTag">神准时</span>
				<span class="tag">颜值爆表</span>
				<span class="tag">非常有礼貌</span>
				<span class="tag">神准时</span>
				<span class="tag">神准时</span>
				<span class="tag">神准时</span>
				<span class="tag">神准时</span>
				<span class="tag">神准时</span>
				<span class="tag">神准时</span>
			</div>
		</div>
		<div class="mgt10 appraise">
			<textarea placeholder="可以在此输入您对车的评价。"></textarea>
		</div>
		<div class="submit yellowBackBtn fontBold textCenter pd5">
			<span>提交</span>
		</div>
	</div>
</template>

<script>

export default {
	name: 'makeCommentOnCar',
	data () {
		return {
		  	imgPath:"../../../static/",
		}
	},
	methods:{
	}
}
</script>

<style lang='less' scoped>
@import '../../../assets/common.less';
.makeCommentOnCar{
	.backGrey;
	.pd5;
	position: fixed;
	top: 0em;
	left: 0em;
	bottom: 0em;
	height: 100%;
	width: 100%;
	overflow-y: scroll;
}

.driverInfo{
	.pd5;
	.avatar{
	.imgpx(4em,4em);
		.rounded-corners (@radius: 2em);
	}
	background-color: white;
	.plate{
		.fontGrey;
		.font0_9;
		.backGrey;
		padding: 0.2em;
	}
	.middleIcon{
		.imgpx(2.5em,2.5em);
	}
}
.orderInfo{
	background-color: white;
	padding-top: 2em;
}
.appraise{
	background-color: white;
	textarea{
		width: 100%;
		height: 7em;
		padding: 0.5em;
		border: none;
	}
}
.submit{
	position: fixed;
	left: 0.5em;
	right: 0.5em;
	bottom: 0.5em;
}
.starLevel{
	margin-top: -0.5em;
}
.tags{
	.pd5;

	.tag{
		padding: 0.5em 1em;
		line-height: 3em;
		border:1px solid @borderGrey;
		white-space: nowrap;
		.fontGrey;
	}
	.chosenTag{
		padding: 0.5em 1em;
		line-height: 3em;
		white-space: nowrap;
		.fontGrey;
		border: 1px solid @yellow;
		background-color: @yellow;
	}
}
</style>
