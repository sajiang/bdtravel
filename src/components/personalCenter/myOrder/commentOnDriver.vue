<template>
	<div class="commentOnDriver">
		<div class="driverInfo clearfix" >
			<div class="wh25p">
				<img class="avatar" :src="imgPath+'deleteLater.png'">
			</div>
			<div class="wh25p">
				<div class="mgt5">
					<span class="">严师傅</span>
				</div>
				<div class="mgt5">
					<span class="fontGrey smallFont">3802单</span>
				</div>
			</div>
			<div class="wh50p">
				<div class="mgt20" >
					<span class="font0_9">评价</span>
					<img :src="imgPath+'starYellow.png'" class="icon">
					<img :src="imgPath+'starYellow.png'" class="icon">
					<img :src="imgPath+'starYellow.png'" class="icon">
					<img :src="imgPath+'starYellow.png'" class="icon">
					<img :src="imgPath+'starGrey.png'" class="icon">
				</div>
			</div>
		</div>
		<div class="orderInfo">
			<div class="tags">
				<span class="tag">神准时 15</span>
				<span class="tag">颜值爆表 11</span>
				<span class="tag">非常有礼貌 8</span>
				<span class="tag">神准时</span>
				<span class="tag">神准时</span>
				<span class="tag">神准时</span>
				<span class="tag">神准时</span>
				<span class="tag">神准时</span>
				<span class="tag">神准时</span>
			</div>
		</div>
		<div class="appraiseList">
			<div class="item clearfix">
				<div class="wh20p">
					<img :src="imgPath+'deleteLater.png'" class="avatar">
				</div>
				<div class="wh80p">
					<div>
						<span class="font1_1">18709988****</span>
						<span class="smallFont fr fontGrey">2017.06.27</span>
					</div>
					<div class="mgt5">
						<img :src="imgPath+'starYellow.png'" class="icon">
						<img :src="imgPath+'starYellow.png'" class="icon">
						<img :src="imgPath+'starYellow.png'" class="icon">
						<img :src="imgPath+'starYellow.png'" class="icon">
						<img :src="imgPath+'starGrey.png'" class="icon">
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
	name: 'commentOnDriver',
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
.commentOnDriver{
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
	padding-top: 1em;
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
}
.appraiseList{
	.item{
		background-color: white;
		.pd5;
		.mgt5;
		.avatar{
			.imgpx(3em,3em);
			.rounded-corners (@radius: 2em);
		}
	}
}
</style>
