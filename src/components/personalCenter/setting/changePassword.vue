<template>
	<div class="changePassword">
		<div class="fontGrey font0_9 textCenter mgt10">
			<span>密码由6-16位英文字母，数字或字符组成</span>
		</div>
		<div class="form">
			<span>设置密码</span>
			<input type="text" placeholder="请输入6-16位密码" v-model="newPassword">
		</div>
		<div class="mgt10 fontBold textCenter pd5" :class="newPassword?'yellowBackBtn':'greyBackBtn'" >
			<span>确认</span>
		</div>
	</div>
</template>

<script>

export default {
	name: 'changePassword',
	data () {
		return {
		  	imgPath:"../../static/",
		  	newPassword:'',
		}
	}
}
</script>

<style lang='less' scoped>
@import '../../../assets/common.less';
.changePassword{
	background-color: @backGrey;
	position: fixed;
	top: 0em;
	left: 0em;
	bottom: 0em;
	height: 100%;
	width: 100%;
}
.form{
	background-color: white;
	padding: 0 0.5em;
	line-height: 3em;
	margin-top: 1em;
	input{
		padding-left: 0.5em;
		width: 17em;
		border: none;
		outline: none;
	}
}
.greyBackBtn{
	background-color: @borderGrey;
	color: white;
}
.greyBorderBtn{
	border:1px solid @borderGrey;
	color: @borderGrey;
	line-height: 1em;
	margin-top: 0.75em;
	padding: 0.5em;
	font-size: 0.8em;
	.rounded-corners (0.2em);
}
</style>
