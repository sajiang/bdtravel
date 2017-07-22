<template>
	<div class="preview">
		<div class="drivingLicensePreview">
			<div class="title"><span class="bigFont fontBold">驾驶证信息</span></div>
			<div class="mgt10">
				<span class="itemName ">真实姓名</span>
				<span>李敏</span>
			</div>
			<div class="mgt10">
				<span class="itemName ">驾驶证号</span>
				<span>460006198501250017</span>
			</div>
		</div>
		<div class="vehicleLicensePreview mgt10">
			<div class="title"><span class="bigFont fontBold">行驶证信息</span></div>
			<div class="mgt10">
				<span class="itemName ">车牌号码</span>
				<span>琼AXD3121</span>
			</div>
			<div class="mgt10">
				<span class="itemName ">车辆所有人</span>
				<span>李敏</span>
			</div>
			<div class="mgt10">
				<span class="itemName ">车辆品牌</span>
				<span>丰田 威驰 红色</span>
			</div>
			<div class="mgt10">
				<span class="itemName ">注册日期</span>
				<span>2017-01-01</span>
			</div>
		</div>
		<div class="needHelp mgt10">
			需要帮助 >
		</div>
		<div class="bottom">
			<div class="remind">
				提交资料表示同意<span class="orange">《合乘协议》</span>
			</div>
			<div class="yellowBackBtn fontBold textCenter submit" >
				<span>提交</span>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'preview',
	data () {
		return {
		  	imgPath:"../../static/",
		}
	}
}
</script>

<style lang='less' scoped>
@import '../../assets/common.less';
.preview{
	background-color: @backGrey;
	padding: 0.5em 0.5em 8em 0.5em;
}
.drivingLicensePreview,.vehicleLicensePreview{
	background-color: white;
	padding: 1em;
	.title{
		padding-bottom: 1em;
		border-bottom: 1px solid @borderGrey;
	}
	.itemName{
		color:@fontGrey;
		display: inline-block;
		width: 6em;
	}
}
.needHelp{
	.textCenter;
	.mgt10;
	.smallFont;
	color:#E37E49;
}
.bottom{
	background-color: white;
	position: fixed;
	bottom:0em;
	width: 100%;
	.textCenter;
	.remind{
		margin: 1em 0em;
		.orange{
			color: #E37E49;
		}
	}
	
	.submit{
		padding: 1em;
		margin: 1em 0em;
	}
}
</style>
