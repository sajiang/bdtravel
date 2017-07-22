<template>
	<div class="drivePassenger">
		<div class="main">
			<div class="slogan clearfix pd5 greyBottomBorder">
				<div class="wh80p textCenter mgt5">
					<div class="fontBold">轻松租车，随借随还，分时租赁！</div>
				</div>
				<div class="wh20p textCenter">
					<img class="bigIcon" :src="imgPath+'event.png'">
				</div>
			</div>
			<div class="info greyBottomBorder mgt5">
				<div class="pd10" @click="isCityFromSelectShow=true;">
					<img class="cIcon" :src="imgPath+'locationYellow.png'" style="vertical-align: -0.3em;">  <!--spf-->
					<v-position-select :message="isCityFromSelectShow" @cancelSelect="cancelPositionFromSelect()" @placeSelected="placeFromSelected($event)">
						<span v-if="positionFrom">{{positionFrom}}</span>
						<span v-else>
							<span class="fontBold">您在哪儿取车？</span>
							<span class="smallFont">（免费送车）</span>
						</span>
					</v-position-select>
					
				</div>
				<div class="pd10">
					<img class="cIcon" :src="imgPath+'locationBlack.png'" style="vertical-align: -0.3em;">  <!--spf-->
					<span class="fontBold">分时租赁</span>
					<span class="smallFont">（查找离您最近的闲置车辆）</span>
				</div>
			</div>
		</div>
		<div class=" yellowBackBtn bigFont fontBold textCenter pd5 btns" @click="toRentCar">
			<span>开始租车</span>
		</div>
		<div class=" yellowBorderBtn fontBold textCenter pd5  btns">
			<span>我要买车出租，点这分期付款，无压力！</span>
		</div>
	</div>
</template>

<script>
import positonSelect from '@/components/common/positonSelect'
export default {
	name: 'drivePassenger',
	data () {
		return {
		  	imgPath:"../../static/",
		  	positionFrom:"",
		  	isCityFromSelectShow:false,
		}
	},
	components: {
    	'v-position-select': positonSelect,
	},
	methods:{
		toRentCar(){
			this.$router.push({path:"/rent_car"});
		},
		cancelPositionFromSelect(){
			this.isCityFromSelectShow=false;
		},
		placeFromSelected(item){
			this.isCityFromSelectShow=false;
			this.positionFrom=item.name;
		},
	}
}
</script>

<style lang='less' scoped>
@import '../../assets/common.less';
.drivePassenger{
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
