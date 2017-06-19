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
				<div class="pd10">
					<img class="icon" :src="imgPath+'locationBlack.png'">
					<span class="fontBold">您在哪儿上车？</span>
				</div>
				<div class="pd10">
					<img class="icon" :src="imgPath+'locationBlack.png'">
					<span class="fontBold">您要去哪儿？</span>
				</div>
				<div class="clearfix pd10">
					<div class="wh50p " @click="showPeopleNumPicker">
						<img class="icon" :src="imgPath+'personNum.png'">
						<span class="fontBold">{{peopleNum}}人</span>
					</div>
					<div class="wh50p">
						<img class="icon" :src="imgPath+'time.png'">
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
		<div class=" yellowBorderBtn fontBold textCenter pd5  btns">
			<span>我想成为司机，点这儿月赚16888</span>
		</div>
	</div>
</template>

<script>
import timeSelect from '@/components/common/timeSelect'
export default {
	name: 'orderPassenger',
	data () {
		return {
		  	imgPath:"../../static/",
		  	timeObj:{},
		  	timeMsg:"",
		  	peopleNum:0,
		  	peopleNumPicker:{},
		}
	},
	components: {
    	'v-time-select': timeSelect,
	},
	created(){
		this.initPeopleNumPicker();
	},
	methods:{
		startOrder(){
			this.$router.push({path:"/order_car"});
		},
		showPeopleNumPicker(){
			var _this=this;
			this.peopleNumPicker.show(function(selectedItem) {
			    _this.peopleNum=selectedItem[0].value;
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
		}
	}

}
</script>

<style lang='less' scoped>
@import '../../assets/common.less';
.orderPassenger{
	position: absolute;
	width: 100%;
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
