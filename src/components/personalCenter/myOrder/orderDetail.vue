<template>
	<div class="orderDetail">
		<div class="driverInfo clearfix" @click="toDriverInfo">
			<div class="wh20p">
				<img class="avatar" :src="imgPath+'deleteLater.png'">
			</div>
			<div class="wh50p">
				<div>
					<span class="">严师傅</span>
					<span class="star">
						<img class="icon starLevel" :src="imgPath+'starYellow.png'">
						<span class="fontGrey smallFont">5.0</span>
					</span>
					<span class="fontGrey smallFont">3802单</span>
				</div>
				<div class="mgt5">
					<span class="plate">琼AZE038</span>
				</div>
				<div class="mgt5">
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
		<div class="orderInfo">
			<div class="textCenter">
				<span class="font2_5">10.50</span>
				<span class="fontGrey smallFont">元</span>
			</div>
			<div class="textCenter fontGrey smallFont mgt5">
				<span class="mgr10">查看明细 ></span>
				<span class="mgl10">开具发票 ></span>
			</div>
			<div class="mgt30 textCenter pd10">
				<div class="fontGrey smallFont">
					匿名评价司机
				</div>
				<div class="mgt10">
					<img :src="imgPath+'starYellow.png'" class="middleIcon">
					<img :src="imgPath+'starYellow.png'" class="middleIcon">
					<img :src="imgPath+'starYellow.png'" class="middleIcon">
					<img :src="imgPath+'starYellow.png'" class="middleIcon">
					<img :src="imgPath+'starGrey.png'" class="middleIcon">
				</div>
			</div>
		</div>
		<div class="mgt10 appraise">
			<textarea placeholder="可以在此输入您对司机的评价。"></textarea>
		</div>
		<div class="submit yellowBackBtn fontBold textCenter pd5">
			<span>提交</span>
		</div>
	</div>
</template>

<script>

export default {
	name: 'orderDetail',
	data () {
		return {
		  	imgPath:"../../../static/",
		}
	},
	methods:{
		toDriverInfo(){
			this.$router.push({ path:"/personal_center/my_order/driver_info" });
		}
	}
}
</script>

<style lang='less' scoped>
@import '../../../assets/common.less';
.orderDetail{
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
</style>
