<template>
	<div class="orderPassenger">
		<div class="main">
			<div class="slogan clearfix pd5 greyBottomBorder">
				<div class="wh80p textCenter mgt5">
					<div class="fontBold">拒绝黑车！拒绝超载！保险承保！</div>
					<div class="smallFont mgt5">越用越安全</div>
				</div>
				<div class="wh20p textCenter">
					<img class="bigIcon" :src="imgPath+'deleteLater.png'">
				</div>
			</div>
			<div class="info greyBottomBorder mgt5">
				<div class="pd10">
					<img class="icon" :src="imgPath+'deleteLater.png'">
					<span class="fontBold">您在哪儿上车？</span>
				</div>
				<div class="pd10">
					<img class="icon" :src="imgPath+'deleteLater.png'">
					<span class="fontBold">您要去哪儿？</span>
				</div>
				<div class="clearfix pd10">
					<div class="wh50p ">
						<img class="icon" :src="imgPath+'deleteLater.png'">
						<span class="fontBold">0人</span>
					</div>
					<div class="wh50p">
						<img class="icon" :src="imgPath+'deleteLater.png'">
						<span class="fontBold">06/08 13:00</span>
					</div>
				</div>
				<div class="clearfix greyBottomBorder pd10">
					<div class="wh50p textCenter">
						<div>
							<span class="">拼座</span>
							<span class="smallFont">三折</span>
						</div>
						<div class="yellow">
							<span class="biggerFont fontBold">12.5</span>
							<span class="smallFont">元/起</span>
						</div>
						
					</div>
					<div class="wh50p textCenter">
						<div>
							<span class="">不拼座</span>
						</div>
						<div class="yellow">
							<span class="biggerFont fontBold">80</span>
							<span class="smallFont">元</span>
						</div>
					</div>
				</div>
			</div>
			
		</div>
		<div class=" yellowBackBtn bigFont fontBold textCenter pd5 btns">
			<span>开始预约</span>
		</div>
		<div class=" yellowBorderBtn fontBold textCenter pd5  btns">
			<span>我想成为司机，点这儿月赚16888</span>
		</div>
	</div>
</template>

<script>

export default {
	name: 'orderPassenger',
	data () {
		return {
		  	imgPath:"../../static/",
		}
	}
}
</script>

<style lang='less' scoped>
@import '../../assets/common.less';
.orderPassenger{
	position: absolute;
	width: 100%;
	top: 6em;
	bottom: 0;
	background-color: @backGrey;
	color:@fontGrey;
}
.main{
	margin: 0.5em;
	background-color: white;
	box-shadow: 0em 0.1em 0em #DDD;
	
}
.btns{
	margin: 1em 0.5em 0em 0.5em;
}
.greyBottomBorder{
	border-bottom: 1px solid @backGrey ;
}
</style>
