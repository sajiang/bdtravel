<template>
	<div class="orderPassenger">
		<div class="main">
			<div class="slogan clearfix pd5 greyBottomBorder">
				<div class="wh80p textCenter mgt5">
					<div class="fontBold">拒绝黑车！拒绝超载！保险承保！</div>
					<div class="smallFont mgt5">越用越安全</div>
				</div>
				<div class="wh20p textCenter">
					<img class="bigIcon" :src="imgPath+'event.png'">
				</div>
			</div>
			<div class="info greyBottomBorder mgt5">
				<div class="pd10" @click="isCityFromSelectShow=true;">
					<img class="cIcon" :src="imgPath+'locationYellow.png'" style="vertical-align: -0.3em;">  <!--spf-->
					<span class="fontBold"><v-position-select :message="isCityFromSelectShow" @cancelSelect="cancelPositionFromSelect()" @placeSelected="placeFromSelected($event)">{{positionFrom?positionFrom:"您在哪儿上车？"}}</v-position-select></span>
				</div>
				<div class="pd10" @click="isCityToSelectShow=true;">
					<img class="cIcon" :src="imgPath+'locationBlack.png'" style="vertical-align: -0.3em;">  <!--spf-->
					<span class="fontBold"><v-position-select :message="isCityToSelectShow" @cancelSelect="cancelPositionToSelect()" @placeSelected="placeToSelected($event)">{{positionTo?positionTo:"您要去哪儿？"}}</v-position-select></span>
				</div>
				<div class="clearfix pd10">
					<div class="wh50p " @click="showPeopleNumPicker">
						<img class="icon" :src="imgPath+'personNum.png' "style="vertical-align: -0.1em;"> <!--spf-->
						<span class="fontBold">{{peopleNum}}人</span>
					</div>
					<div class="wh50p">
						<img class="icon" :src="imgPath+'time.png'" style="vertical-align: -0.15em;"> <!--spf-->
						<span class="fontBold">
							<v-time-select @timeSelected="updateTime($event)">{{timeMsg?timeMsg:"选择时间"}}</v-time-select>
						</span>
					</div>
				</div>
				<div class="clearfix greyBottomBorder pd10">
					<div class="wh50p textCenter">
						<div>
							<span class="">拼座</span>
							<span class="smallFont">三折</span>
						</div>
						<div class="yellow">
							<span class="biggerFont fontBold">12.5</span>
							<span class="smallFont">元/起</span>
						</div>
						
					</div>
					<div class="wh50p textCenter">
						<div>
							<span class="">不拼座</span>
						</div>
						<div class="yellow">
							<span class="biggerFont fontBold">80</span>
							<span class="smallFont">元</span>
						</div>
					</div>
				</div>
			</div>
			
		</div>
		<div class=" yellowBackBtn bigFont fontBold textCenter pd5 btns" @click="startOrder">
			<span>开始预约</span>
		</div>
		<div @click="toDiverOwner" class=" yellowBorderBtn fontBold textCenter pd5  btns">
			<span>我想成为司机，点这儿月赚16888</span>
		</div>
		<div class="ivu-modal-mask" v-show="maskShow" @click="hidePicker"></div>
	</div>
</template>

<script>
import timeSelect from '@/components/common/timeSelect'
import positonSelect from '@/components/common/positonSelect'
export default {
	name: 'orderPassenger',
	data () {
		return {
		  	imgPath:"../../static/",
		  	timeObj:{},
		  	timeMsg:"",
		  	peopleNum:0,
		  	peopleNumPicker:{},
		  	isCityFromSelectShow:false,
		  	isCityToSelectShow:false,
		  	positionFrom:"",
		  	positionTo:"",
		  	maskShow:false
		}
	},
	components: {
    	'v-time-select': timeSelect,
    	'v-position-select': positonSelect,
	},
	created(){
		this.initPeopleNumPicker();
	},
	methods:{
		hidePicker(){
			this.maskShow=false;
			this.peopleNumPicker.hide();
		},
		startOrder(){
			this.$router.push({path:"/order_car"});
		},
		showPeopleNumPicker(){
			var _this=this;
			this.maskShow=true;
			this.peopleNumPicker.show(function(selectedItem) {
			    _this.peopleNum=selectedItem[0].value;
			    _this.maskShow=false;
			});
		},
		initPeopleNumPicker(){
			this.peopleNumPicker = new mui.PopPicker();
			this.peopleNumPicker.setData([{
				    value: "1",
				    text: "1",
				}, {
				    value: "2",
				    text: "2"
				}, {
				    value: "3",
				    text: "3"
				}, {
				    value: "4",
				    text: "4"
				}
			]);
		},
		updateTime(timeObj){
			this.timeObj=timeObj;
			this.timeMsg=timeObj[0].text+" "+timeObj[1].value+":"+timeObj[2].value
		},
		cancelPositionFromSelect(){
			this.isCityFromSelectShow=false;
		},
		placeFromSelected(item){
			this.isCityFromSelectShow=false;
			this.positionFrom=item.name;
		},
		cancelPositionToSelect(){
			this.isCityToSelectShow=false;
		},
		placeToSelected(item){
			this.isCityToSelectShow=false;
			this.positionTo=item.name;
		},
		toDiverOwner(){
			this.$router.push({path:"/order_owner"});
		},
	}

}
</script>

<style lang='less' scoped>
@import '../../assets/common.less';
.orderPassenger{
	
	position: absolute;
	width: 100%;
	height:100%;/*spf*/
	top: 6em;
	bottom: 0;
	background-color: @backGrey;
	color:@fontGrey;
}
.main{
	margin: 0.5em;
	background-color: white;
	box-shadow: 0em 0.1em 0em #DDD;
	
}
.btns{
	margin: 1em 0.5em 0em 0.5em;
}
.greyBottomBorder{
	border-bottom: 1px solid @backGrey ;
}
</style>
