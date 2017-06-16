<template>
	<div class="rentCar">
		<div class="filter textCenter">
			<span>取车地点ｖ</span>
			<span>座位ｖ</span>
			<span>品牌ｖ</span>
			<span>类型ｖ</span>
			<span>排序ｖ</span>
		</div>
		<div class="carList">
			<div class="carItem clearfix">
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
						<img v-for="i in 5" :src="imgPath+'/deleteLater.png'" class="icon fr">
					</div>
				</div>
			</div>
			<div class="carItem clearfix">
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
						<img v-for="i in 5" :src="imgPath+'/deleteLater.png'" class="icon fr">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'rentCar',
	data () {
		return {
		  	imgPath:"../../static/",
		}
	}
}
</script>

<style lang='less' scoped>
@import '../assets/common.less';
.rentCar{
	.pd5;
	background-color: @backGrey;
}
.filter{
	background-color: white;
	padding: 0.5em 0em 1em 0em;
	border-bottom: 1px solid @borderGrey;
	color:@fontGrey;
	.fontBold;
}
.carItem{
	.mgt5;
	background-color: white;
	.carImg{
		;
	}
	.carInfo{
		;
	}
	.borderTopGrey{
		border-top: 1px solid @borderGrey;
	}
}
</style>
