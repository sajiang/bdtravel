<template>
	<div class="myOrder">
		<div class="tab clearfix textCenter ">
			<div class="wh50p pd5" @click="changeType(1)"><span class="pd5" :class="type=='1'?'borderBottom':''">打车</span></div>
			<div class="wh50p pd5" @click="changeType(2)"><span class="pd5" :class="type=='2'?'borderBottom':''">自驾租车</span></div>
		</div>
		<div class="orderList" v-show="type==1">
			<div class="item mgt5" @click="toPayToDriver">
				<div class="type">
					<span>快车</span>
					<span class="fontGrey fr">待支付></span>
				</div>
				<div class="time fontGrey mgt5">
					<img :src="imgPath+'locationGreen.png'" class="cIcon">
					<span class="verticalBottom">6月14日 09:30</span>
				</div>
				<div class="from fontGrey">
					<img :src="imgPath+'locationYellow.png'" class="cIcon">
					<span class="nobr verticalBottom">美兰区.白龙街道.青年路美兰区.白龙街道.青年路</span>
				</div>
				<div class="to fontGrey">
					<img :src="imgPath+'locationBlack.png'" class="cIcon">
					<span class="nobr verticalBottom">美兰区蓝天路41号、43号南宝商场</span>
				</div>
			</div>
			<div class="item mgt5" @click="toCommentOnDriver">
				<div class="type">
					<span>快车</span>
					<span class="fontGrey fr">已完成></span>
				</div>
				<div class="time fontGrey mgt5">
					<img :src="imgPath+'locationGreen.png'" class="cIcon">
					<span class="verticalBottom">6月14日 09:30</span>
				</div>
				<div class="from fontGrey">
					<img :src="imgPath+'locationYellow.png'" class="cIcon">
					<span class="nobr verticalBottom">美兰区.白龙街道.青年路美兰区.白龙街道.青年路</span>
				</div>
				<div class="to fontGrey">
					<img :src="imgPath+'locationBlack.png'" class="cIcon">
					<span class="nobr verticalBottom">美兰区蓝天路41号、43号南宝商场</span>
				</div>
			</div>
			<div class="item mgt5"  @click="toMakeCommentOnDriver">
				<div class="type">
					<span>快车</span>
					<span class="fontGrey fr">待评价></span>
				</div>
				<div class="time fontGrey mgt5">
					<img :src="imgPath+'locationGreen.png'" class="cIcon">
					<span class="verticalBottom">6月14日 09:30</span>
				</div>
				<div class="from fontGrey">
					<img :src="imgPath+'locationYellow.png'" class="cIcon">
					<span class="nobr verticalBottom">美兰区.白龙街道.青年路美兰区.白龙街道.青年路</span>
				</div>
				<div class="to fontGrey">
					<img :src="imgPath+'locationBlack.png'" class="cIcon">
					<span class="nobr verticalBottom">美兰区蓝天路41号、43号南宝商场</span>
				</div>
			</div>
		</div>
		<div class="rentList" v-show="type==2">
			<div class="item mgt5" @click="toSureOrder">
				<div>
					<span class="fontBold">订单编号<span>A1324309</span></span>
					<span class="fontGrey fr">待支付></span>
				</div>	
				<div class="clearfix">
					<div class="carImg wh33p">
						<img :src="imgPath+'deleteLater.png'" class="pd10">
					</div>
					<div class="carInfo wh66p">
						<div class="clearfix pd5">
							<div class="wh66p ">
								<div>大众朗逸或同级轿车</div>
								<div class="fontGrey smallFont">
									外牌|自动|5座|1.6L及以上
								</div>
							</div>
							<div class="wh33p"><span class="smallFont">¥</span><span class="bigFont">109</span><span class="smallFont">/天</span></div>
						</div>
						<div class="borderTopGrey clearfix pd5">
							<img v-for="i in 5" :src="imgPath+'/starYellow.png'" class="icon fr">
						</div>
					</div>
				</div>
			</div>
			<div class="item mgt5" @click="toCommentOnCar">
				<div>
					<span class="fontBold">订单编号<span>A1324309</span></span>
					<span class="fontGrey fr">已完成></span>
				</div>	
				<div class="clearfix">
					<div class="carImg wh33p">
						<img :src="imgPath+'deleteLater.png'" class="pd10">
					</div>
					<div class="carInfo wh66p">
						<div class="clearfix pd5">
							<div class="wh66p ">
								<div>大众朗逸或同级轿车</div>
								<div class="fontGrey smallFont">
									外牌|自动|5座|1.6L及以上
								</div>
							</div>
							<div class="wh33p"><span class="smallFont">¥</span><span class="bigFont">109</span><span class="smallFont">/天</span></div>
						</div>
						<div class="borderTopGrey clearfix pd5">
							<img v-for="i in 5" :src="imgPath+'/starYellow.png'" class="icon fr">
						</div>
					</div>
				</div>
			</div>
			<div class="item mgt5" @click="toMakeCommentOnCar">
				<div>
					<span class="fontBold">订单编号<span>A1324309</span></span>
					<span class="fontGrey fr">待评价></span>
				</div>	
				<div class="clearfix">
					<div class="carImg wh33p">
						<img :src="imgPath+'deleteLater.png'" class="pd10">
					</div>
					<div class="carInfo wh66p">
						<div class="clearfix pd5">
							<div class="wh66p ">
								<div>大众朗逸或同级轿车</div>
								<div class="fontGrey smallFont">
									外牌|自动|5座|1.6L及以上
								</div>
							</div>
							<div class="wh33p"><span class="smallFont">¥</span><span class="bigFont">109</span><span class="smallFont">/天</span></div>
						</div>
						<div class="borderTopGrey clearfix pd5">
							<img v-for="i in 5" :src="imgPath+'/starYellow.png'" class="icon fr">
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'myOrder',
	data () {
		return {
		  	imgPath:"../../../static/",
		  	type:1,
		}
	},
	methods:{
		toPayToDriver(){
			this.$router.push({ path:"/personal_center/my_order/pay_to_driver" });
		},
		toSureOrder(){
			this.$router.push({ path:"/rent_car/sure_order" });
		},
		toCommentOnCar(){
			this.$router.push({ path:"/personal_center/my_order/comment_on_car" });
		},
		toMakeCommentOnCar(){
			this.$router.push({ path:"/personal_center/my_order/make_comment_on_car" });
		},
		toCommentOnDriver(){
			this.$router.push({ path:"/personal_center/my_order/comment_on_driver" });
		},
		toMakeCommentOnDriver(){
			this.$router.push({ path:"/personal_center/my_order/make_comment_on_driver" });
		},
		changeType(type){
			this.type=type;
		}
	}
}
</script>

<style lang='less' scoped>
@import '../../../assets/common.less';
.myOrder{
	background-color: @backGrey;
	position: fixed;
	top: 0em;
	left: 0em;
	bottom: 0em;
	height: 100%;
	width: 100%;
	padding: 0 1em;
	overflow-y: scroll;
	.tab{
		background-color: white;
	}
	.orderList{
		.item{
			padding: 0.5em;
			background-color: white;
			.time,.from,.to{
				line-height: 1.5em;
			}
		}
	}
	.rentList{
		.item{
			padding: 0.5em;
			background-color: white;
		}
	}
}
.nobr{
	display: inline-block;
	width: 90%;
	overflow: hidden;/*内容超出后隐藏*/
	text-overflow: ellipsis;/* 超出内容显示为省略号*/
	white-space: nowrap;/*文本不进行换行*/
}
.borderBottom{
	color: @yellow;
	border-bottom: 2px solid @yellow;
}
</style>
