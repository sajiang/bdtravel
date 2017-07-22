<template>
	<span class="timeSelect" @click="showSelect">
		<slot>
	    	选择时间
	  	</slot>
	  	<div class="ivu-modal-mask" v-show="maskShow" @click.stop="hidePicker"></div>
	</span>
</template>

<script>
import mui from "mui"
export default {
	name: 'timeSelect',
	data () {
		return {
		  	imgPath:"../../static/",
		  	picker:{},
		  	maskShow:false,
		}
	},
	created:function (argument) {
		mui.init();
		this.popUpSelect();
	},
	methods:{
		hidePicker(){
			this.maskShow=false;
			this.picker.hide();
		},
		popUpSelect(){
			this.picker = new mui.PopPicker({
				layer: 3
			});
			var today=new Date();
			var hmTime=(new Date()).getTime();
			var oneDay=24*60*60*1000;
			var timeData=[
				{
					value: (today.getMonth()+1)+"-"+(today.getDate()),
					text: '今天',
					children:[],
				},
				{
					value:  ((new Date(hmTime+3*oneDay)).getMonth()+1)+"-"+(new Date(hmTime+3*oneDay)).getDate(),
					text: '明天',
					children:[],
				},
				{
					value:  ((new Date(hmTime+3*oneDay)).getMonth()+1)+"-"+(new Date(hmTime+3*oneDay)).getDate(),
					text: '后天',
					children:[],
				},
				{
					value:  ((new Date(hmTime+3*oneDay)).getMonth()+1)+"-"+(new Date(hmTime+3*oneDay)).getDate(),
					text: ((new Date(hmTime+3*oneDay)).getMonth()+1)+"-"+(new Date(hmTime+3*oneDay)).getDate(),
					children:[],
				}

			];
			var fullMinArr=[];
			for(var i=0;i<60;i+=5){
				fullMinArr.push({
					value:i,
					text:i+"分"
				})
			}
			for(var i =1 ;i <timeData.length;i++){
				for(var j=0;j<24;j++){
					timeData[i].children.push({
						value:j,
						text:j+"点",
						children:fullMinArr,
					});
				}
			}
			
			var startH=today.getHours();
			var startMIN=today.getMinutes();
			if(startMIN>55){
				startH++; 
				startMIN=0;
			}
			for(var i=startH;i<24;i++){
				timeData[0].children.push({
					value:i,
					text:i+"点",
					children:fullMinArr,
				});
			}
			if (startMIN%10<6&&startMIN%10>0) {
				startMIN=(parseInt(startMIN/10))*10+5;
			}else{
				startMIN=(parseInt(startMIN/10)+1)*10
			}
			timeData[0].children[0].children=[];
			for(var i=startMIN;i<60;i+=5){
				timeData[0].children[0].children.push({
					value:i,
					text:i+"分"
				
				})
			}
			this.picker.setData(timeData);
		
		},
		showSelect(){
			var _this=this;
			this.maskShow=true;
			this.picker.show(function(items) {
				_this.$emit("timeSelected",items);
				_this.maskShow=false;
			});
		}
	}
}
</script>

<style lang='less' scoped>
@import '../../assets/common.less';
</style>
