<template>
	<span class="upToToday">
		<slot>
	    	选择时间
	  	</slot>
	</span>
</template>

<script>
import mui from "mui"
export default {
	name: 'upToToday',
	data () {
		return {
		  	datepicker:{},
		}
	},
	props:['is_show'],
	created:function (argument) {
		mui.init();
		this.popUpSelect();
	},
	watch:{
		"is_show":function(){
			if (this.is_show) {
				this.showSelect();
			}
		}
	},
	methods:{
		popUpSelect(){
			this.datepicker = new mui.DtPicker({
			    type: "date",//设置日历初始视图模式  
			    beginYear:"1950",
			    endDate: new Date(),//设置结束日期 
			    labels: ['年', '月', '日', ],//设置默认标签区域提示语
			}) ;
		},
		showSelect(){
			var _this=this;
			this.datepicker.show(function(items) {
				_this.$emit("dateSelected",items);
			});
		}
	}
}
</script>

<style lang='less' scoped>
@import '../../assets/common.less';
</style>
