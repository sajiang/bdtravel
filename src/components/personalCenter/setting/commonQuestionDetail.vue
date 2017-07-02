<template>
	<div class="commonQuestionDetail">
		<div class="clearfix">
			<div class="wh50p textCenter pd10 fontBold" :class="showType=='passenger'?'chosenType':''" @click="changeShowType('passenger')">乘客</div>
			<div class="wh50p textCenter pd10 fontBold" :class="showType=='passenger'?'':'chosenType'" @click="changeShowType('driver')">车主</div>
		</div>
		<div v-if="showType=='passenger'">
			<div class="pd10 fontGrey backGrey">常见问题</div>
			<div>
				<div @click="toContent(item.content)"  class="item" v-for="item in list.passenger.common">
					<span>{{item.name}}</span>
					<span class="fr fontGrey fontBold">></span>
				</div>
			</div>
			<div class="pd10 fontGrey backGrey">更多问题</div>
			<div>
				<div @click="toContent(item.content)"  class="item" v-for="item in list.passenger.more">
					<span>{{item.name}}</span>
					<span class="fr fontGrey fontBold">></span>
				</div>
			</div>
		</div>
		<div v-else>
			<div class="pd10 fontGrey backGrey">常见问题</div>
			<div>
				<div @click="toContent(item.content)"  class="item" v-for="item in list.driver.common">
					<span>{{item.name}}</span>
					<span class="fr fontGrey fontBold">></span>
				</div>
			</div>
			<div class="pd10 fontGrey backGrey">更多问题</div>
			<div>
				<div @click="toContent(item.content)"  class="item" v-for="item in list.driver.more">
					<span>{{item.name}}</span>
					<span class="fr fontGrey fontBold">></span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'commonQuestionDetail',
	data () {
		return {
		  	imgPath:"../../static/",
		  	showType:"passenger",
		  	list:{passenger:{common:{},more:{}},driver:{common:{},more:{}}},
		}
	},
	created(){
		this.getDetail();
	},
	activated(){
		this.getDetail();
	},
	methods:{
		getDetail(){
			var _this=this;
			this.$http.get('static/data/'+this.$route.params.id+'.json')
			.then(function (data) {
				if (data.data) {
					_this.list=data.data;
				}
				else{
					_this.list={passenger:{common:{},more:{}},driver:{common:{},more:{}}}
				}
			})
		},
		changeShowType(flag){
			this.showType=flag;
		},
		toContent(content){
			this.$router.push({ path:"/personal_center/setting/content/"+content });
		}
	}
}
</script>

<style lang='less' scoped>
@import '../../../assets/common.less';
.item{
	.pd10;
	background-color: white;
	border-bottom: 1px solid @borderGrey;
}
.chosenType{
	color: @yellow;
	border-bottom: 2px solid @yellow;
}
</style>
