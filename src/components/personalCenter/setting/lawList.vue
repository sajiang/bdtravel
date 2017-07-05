<template>
	<div class="commonQuestionList">
		<div  class="type" @click="toContent(item.content)" v-for="item in lawList">
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
		  	lawList:[],
		}
	},
	created(){
		this.getLawList();
	},
	methods:{
		getLawList(){
			var _this=this;
			this.$http.get('static/data/lawList.json')
			.then(function(data){
				_this.lawList=data.data;
			})
		},
		toContent(content){
			this.$router.push({ path:"/personal_center/setting/content/"+content });
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
