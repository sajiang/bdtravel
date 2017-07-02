<template>
	<div class="getVerifyCode">
		<div class="fontGrey font0_9 textCenter mgt10">
			<span>设置密码需要验证您的手机号</span>
			<span>155****6246</span>
		</div>
		<div class="form">
			<span>验证码</span>
			<input type="text" placeholder="请输入验证码" v-model="code">
			<span class="fr greyBorderBtn">获取验证码</span>
		</div>
		<div class="mgt10 fontBold textCenter pd5" :class="code?'yellowBackBtn':'greyBackBtn'" @click="toChangePassword">
			<span>下一步</span>
		</div>
	</div>
</template>

<script>

export default {
	name: 'getVerifyCode',
	data () {
		return {
		  	imgPath:"../../static/",
		  	code:"",
		}
	},
	methods:{
		toChangePassword(){
			this.$router.push({path:'/personal_center/setting/change_password'})
		}
	}
}
</script>

<style lang='less' scoped>
@import '../../../assets/common.less';
.getVerifyCode{
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
	span{
		vertical-align: middle;
	}
	input{
		padding-left: 0.5em;
		width: 11em;
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
