<template>
	<div class="driverInfo">
		<div class="info clearfix" @click="toDriverInfo">
			<div class="wh20p">
				<img class="avatar" :src="imgPath+'deleteLater.png'">
			</div>
			<div class="wh50p">
				<div>
					<span class="">严师傅</span>
					<span class="star">
						<img class="icon" :src="imgPath+'deleteLater.png'">
						<span class="fontGrey smallFont">5.0</span>
					</span>
					<span class="fontGrey smallFont">3802单</span>
				</div>
				<div>
					<span class="plate">琼AZE038</span>
				</div>
				<div>
					<span class="carType smallFont fontGrey">白·丰田普锐斯</span>
				</div>
			</div>
			<div class="wh30p">
				<div class="mgt5 fr">
					<img class="middleIcon" :src="imgPath+'message.png'">
					<img class="middleIcon" :src="imgPath+'phoneCall.png'">
				</div>
			</div>
		</div>
		<div class="appraiseList">
			<div class="banner">
				<span class="mgt10">评价</span>
			</div>
			<div class="item clearfix">
				<div class="wh20p">
					<img :src="imgPath+'deleteLater.png'" class="avatar">
				</div>
				<div class="wh80p">
					<div>
						<span class="font1_1">XFT2354509</span>
						<span class="smallFont fr fontGrey">2017.06.27</span>
					</div>
					<div class="mgt5">
						<img :src="imgPath+'deleteLater.png'" class="icon">
						<img :src="imgPath+'deleteLater.png'" class="icon">
						<img :src="imgPath+'deleteLater.png'" class="icon">
						<img :src="imgPath+'deleteLater.png'" class="icon">
						<img :src="imgPath+'deleteLater.png'" class="icon">
					</div>
					<div class="mgt5">
						两份给恐龙当家撒龙岗街道山卡拉几个了收订金数据库刚拉开激光雕刻辣鸡狗来接打暑假工
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'driverInfo',
	data () {
		return {
		  	imgPath:"../../../static/",
		}
	}
}
</script>

<style lang='less' scoped>
@import '../../../assets/common.less';
.driverInfo{
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
.info{
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
.banner{
	background-color: white;
	.textCenter;
	span{
		color:@yellow;
		.bigFont;
		.fontBold;
		width: 5em;
		display: inline-block;
		border-bottom: 2px solid @yellow;
	}
}
.item{
	background-color: white;
	.pd5;
	.mgt5;
	.avatar{
		.imgpx(3em,3em);
		.rounded-corners (@radius: 2em);
	}
}
</style>
