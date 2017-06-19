<template>
	<div class="rentCar">
		<div class="filter textCenter">
			<span class="w5">取车地点ｖ</span>
			<span class="w3" @click="showSetSelect">
				<v-set-select :is_show="setSelectShow" @setSelected="updateSet($event)">
					<span v-if="setStr" class="yellow">
						{{setStr}}
					</span>
					<span v-else>
						座位ｖ
					</span>
				</v-set-select>
			</span>
			<span class="w3">品牌ｖ</span>
			<span class="w3" @click="showTypeSelect">
				<v-type-select :is_show="typeSelectShow" @typeSelected="updateType($event)">
					<span v-if="typeStr" class="yellow">
						{{typeStr}}
					</span>
					<span v-else>
						类型ｖ
					</span>
				</v-type-select>
			</span>
			<span  class="w3" @click="showOrderSelect">
				<span v-if="orderStr" class="yellow">
					{{orderStr}}
				</span>
				<span v-else>
					排序ｖ
				</span>
			</span>
			<span class="orderSelectPanel" v-show="orderSelectShow">
				<div class="option" @click="orderSelected('price')">
					<img  :src="imgPath+'/deleteLater.png'" class="icon">
					<span>价 格</span>
				</div>
				<div class="option" @click="orderSelected('star')">
					<img  :src="imgPath+'/deleteLater.png'" class="icon">
					<span>星 级</span>
				</div>
			</span>
		</div>
		<div class="carList">
			<div class="carItem clearfix">
				<div class="carImg wh33p">
					<img :src="imgPath+'deleteLater.png'" class="pd10">
				</div>
				<div class="carInfo wh66p">
					<div class="clearfix pd5">
						<div class="wh66p ">
							<div>大众朗逸或同级轿车</div>
							<div class="fontGrey smallFont">
								外牌|自动|5座|1.6L及以上
							</div>
						</div>
						<div class="wh33p"><span class="smallFont">¥</span><span class="bigFont">109</span><span class="smallFont">/天</span></div>
					</div>
					<div class="borderTopGrey clearfix pd5">
						<img v-for="i in 5" :src="imgPath+'/deleteLater.png'" class="icon fr">
					</div>
				</div>
			</div>
			<div class="carItem clearfix">
				<div class="carImg wh33p">
					<img :src="imgPath+'deleteLater.png'" class="pd10">
				</div>
				<div class="carInfo wh66p">
					<div class="clearfix pd5">
						<div class="wh66p ">
							<div>大众朗逸或同级轿车</div>
							<div class="fontGrey smallFont">
								外牌|自动|5座|1.6L及以上
							</div>
						</div>
						<div class="wh33p"><span class="smallFont">¥</span><span class="bigFont">109</span><span class="smallFont">/天</span></div>
					</div>
					<div class="borderTopGrey clearfix pd5">
						<img v-for="i in 5" :src="imgPath+'/deleteLater.png'" class="icon fr">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import setSelect from '@/components/common/setSelect'
import typeSelect from '@/components/common/typeSelect'
export default {
	name: 'rentCar',
	data () {
		return {
		  	imgPath:"../../static/",
		  	maskShow:false,
		  	typeSelectShow:false,
		  	setSelectShow:false,
		  	orderSelectShow:false,
		  	setStr:"",
		  	typeStr:"",
		  	orderStr:"",
		}
	},
	components: {
    	'v-set-select': setSelect,
    	'v-type-select': typeSelect
	},
	methods:{
		showSetSelect(){
			this.maskShow=true;
			this.setSelectShow=true;
		},
		showTypeSelect(){
			this.maskShow=true;
			this.typeSelectShow=true;
		},
		showOrderSelect(){
			this.orderSelectShow=!this.orderSelectShow;
		},
		updateSet(item){
			this.maskShow=false;
			this.setSelectShow=false;
			this.setStr=item[0].value;
		},
		updateType(item){
			this.maskShow=false;
			this.typeSelectShow=false;
			this.typeStr=item[0].value;
		},
		orderSelected(flag){
			this.orderSelectShow=false;
			this.orderStr=flag=="price"?"价格":"星级";
		}
	}
}
</script>

<style lang='less' scoped>
@import '../assets/common.less';
.rentCar{
	.pd5;
	background-color: @backGrey;
}
.filter{
	background-color: white;
	padding: 0.5em 0em 1em 0em;
	border-bottom: 1px solid @borderGrey;
	color:@fontGrey;
	.fontBold;
	.w3{
		width: 3em;
		display: inline-block;
		overflow: hidden;/*内容超出后隐藏*/
		text-overflow: ellipsis;/* 超出内容显示为省略号*/
		white-space: nowrap;/*文本不进行换行*/
	}
	.w5{
		width: 5em;
		display: inline-block;
		overflow: hidden;/*内容超出后隐藏*/
		text-overflow: ellipsis;/* 超出内容显示为省略号*/
		white-space: nowrap;/*文本不进行换行*/
	}
}
.carItem{
	.mgt5;
	background-color: white;
	.carImg{
		;
	}
	.carInfo{
		;
	}
	.borderTopGrey{
		border-top: 1px solid @borderGrey;
	}
}
.orderSelectPanel{
	position: absolute;
	top: 3em;
	right: 0.5em;
	background-color: white;
	.option{
		margin: 0.2em;
		border: 1px solid @yellow;
		padding:0.3em 0.7em;
	}
}
</style>
