<template>
	<div class="settingIndex">
		<div class="type"  @click="toChangePassword()">
			<span>密码更改</span>
			<span class="fr yellow fontBold">></span>
		</div>
		<div class="type" @click="toCommonQuestionList()">
			<span>常见问题</span>
			<span class="fr yellow fontBold">></span>
		</div>
		<div class="type" @click="toLawList()">
			<span>法律条款</span>
			<span class="fr yellow fontBold">></span>
		</div>
		<div class="loginOut mgt5 yellowBackBtn fontBold textCenter pd5">
			<span>退出登入</span>
		</div>
	</div>
</template>

<script>

export default {
	name: 'settingIndex',
	data () {
		return {
		  	imgPath:"../../../static/",
		}
	},
	methods:{
		toChangePassword(){
			this.$router.push({ path:"/personal_center/setting/get_verify_code" });
		},
		toCommonQuestionList(){
			this.$router.push({ path:"/personal_center/setting/common_question_list" });
		},
		toLawList(){
			this.$router.push({ path:"/personal_center/setting/law_list" });
		},
	}
}
</script>

<style lang='less' scoped>
@import '../../../assets/common.less';
.settingIndex{
	background-color: @backGrey;
	position: fixed;
	top: 0em;
	left: 0em;
	bottom: 0em;
	height: 100%;
	width: 100%;
}
.type{
	.pd10;
	background-color: white;
	border-bottom: 1px solid @borderGrey;
}

</style>
