<template>
	<span class="setSelect" >
		<slot>
	    	座位ｖ
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
			var set=[
				{
					value:"2座",
					text:"2座",
				},
				{
					value:"5座",
					text:"5座",
				},
				{
					value:"7座",
					text:"7座",
				},
				{
					value:"大于7座",
					text:"大于7座",
				}
			];
			this.picker.setData(set);
		
		},
		showSelect(){
			var _this=this;
			this.picker.show(function(items) {
				_this.$emit("setSelected",items);
			});
		}
	}
}
</script>

<style lang='less' scoped>
@import '../../assets/common.less';
</style>
