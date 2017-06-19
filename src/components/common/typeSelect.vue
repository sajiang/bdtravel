<template>
	<span class="setSelect" >
		<slot>
	    	类型ｖ
	  	</slot>
	</span>
</template>

<script>
import mui from "mui"
export default {
	name: 'setSelect',
	data () {
		return {
		  	imgPath:"../../static/",
		  	picker:{},
		}
	},
	created:function (argument) {
		mui.init();
		this.popUpSelect();
	},
	props:["is_show"],
	watch:{
		"is_show":function(){
			if (this.is_show) {
				this.showSelect();
			}
		}
	},
	methods:{
		popUpSelect(){
			this.picker = new mui.PopPicker({
				layer: 1
			});
			var type=[
				{
					value:"轿车（含7座商务车）",
					text:"轿车（含7座商务车）",
				},
				{
					value:"越野",
					text:"越野",
				},
				{
					value:"跑车",
					text:"跑车",
				},
				{
					value:"大型客车",
					text:"大型客车",
				},
			];
			this.picker.setData(type);
		
		},
		showSelect(){
			var _this=this;
			this.picker.show(function(items) {
				_this.$emit("typeSelected",items);
			});
		}
	}
}
</script>

<style lang='less' scoped>
@import '../../assets/common.less';
</style>
