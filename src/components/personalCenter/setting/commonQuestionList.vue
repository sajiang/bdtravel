<template>
	<div class="commonQuestionList">
		<div  class="type" @click="toDetailList(item.id)" v-for="item in commonQuestion">
			<span>{{item.name}}</span>
			<span class="fr fontGrey fontBold">></span>
		</div>
			
	</div>
</template>

<script>

export default {
	name: 'commonQuestionList',
	data () {
		return {
		  	imgPath:"../../../static/",
		  	commonQuestion:[],
		}
	},
	created(){
		this.getCommonQuestionList();
	},
	methods:{
		getCommonQuestionList(){
			var _this=this;
			this.$http.get('static/data/commonQuestionList.json')
			.then(function(data){
				_this.commonQuestion=data.data;
			})
		},
		toDetailList(id){
			this.$router.push({ path:"/personal_center/setting/common_question_detail/"+id });
		}
	}
}
</script>

<style lang='less' scoped>
@import '../../../assets/common.less';
.commonQuestionList{
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
