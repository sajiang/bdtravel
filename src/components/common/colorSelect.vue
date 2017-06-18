<template>
	<span class="colorSelect" >
		<slot>
	    	归属地
	  	</slot>
	</span>
</template>

<script>
import mui from "mui"
export default {
	name: 'colorSelect',
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
			var color=[
				{
					value:"黑色",
					text:"<span style='color:black'>黑色</span>",
				},
				{
					value:"白色",
					text:"<span style='color:white'>白色</span>",
				},
				{
					value:"灰色",
					text:"<span style='color:gray'>灰色</span>",
				},
				{
					value:"红色",
					text:"<span style='color:red'>红色</span>",
				},
				{
					value:"橙色",
					text:"<span style='color:orange'>橙色</span>",
				},
				{
					value:"绿色",
					text:"<span style='color:green'>绿色</span>",
				},
				{
					value:"紫色",
					text:"<span style='color:purple'>紫色</span>",
				},
				{
					value:"粉色",
					text:"<span style='color:pink'>粉色</span>",
				},
				{
					value:"黄色",
					text:"<span style='color:yellow'>黄色</span>",
				},
				{
					value:"棕色",
					text:"<span style='color:brown'>棕色</span>",
				},
			];
			this.picker.setData(color);
		
		},
		showSelect(){
			var _this=this;
			this.picker.show(function(items) {
				_this.$emit("colorSelected",items);
			});
		}
	}
}
</script>

<style lang='less' scoped>
@import '../../assets/common.less';
</style>
