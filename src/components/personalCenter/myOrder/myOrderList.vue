<template>
	<div class="myOrder pd10">
		<div class="fontGrey">已完成订单</div>
		<div class="orderList">
			<div class="item mgt5" @click="toOrderDetail">
				<div class="type">
					<span>快车</span>
					<span class="fontGrey fr">已完成></span>
				</div>
				<div class="time fontGrey mgt5">
					<img :src="imgPath+'locationGreen.png'" class="icon">
					<span class="verticalBottom">6月14日 09:30</span>
				</div>
				<div class="from fontGrey">
					<img :src="imgPath+'locationYellow.png'" class="icon">
					<span class="nobr verticalBottom">美兰区.白龙街道.青年路美兰区.白龙街道.青年路</span>
				</div>
				<div class="to fontGrey">
					<img :src="imgPath+'locationBlack.png'" class="icon">
					<span class="nobr verticalBottom">美兰区蓝天路41号、43号南宝商场</span>
				</div>
			</div>
			<div class="item mgt5">
				<div class="type">
					<span>快车</span>
					<span class="fontGrey fr">已完成></span>
				</div>
				<div class="time fontGrey mgt5">
					<img :src="imgPath+'locationGreen.png'" class="icon">
					<span class="verticalBottom">6月14日 09:30</span>
				</div>
				<div class="from fontGrey">
					<img :src="imgPath+'locationYellow.png'" class="icon">
					<span class="nobr verticalBottom">美兰区.白龙街道.青年路美兰区.白龙街道.青年路</span>
				</div>
				<div class="to fontGrey">
					<img :src="imgPath+'locationBlack.png'" class="icon">
					<span class="nobr verticalBottom">美兰区蓝天路41号、43号南宝商场</span>
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
		}
	},
	methods:{
		toOrderDetail(){
			this.$router.push({ path:"/personal_center/my_order/order_detail" });
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
	overflow-y: scroll;
	.orderList{
		.mgt10;
		.item{
			padding: 0.5em;
			background-color: white;
			.time,.from,.to{
				line-height: 1.5em;
			}
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
</style>
