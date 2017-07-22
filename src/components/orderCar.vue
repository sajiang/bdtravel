<template>
	<div class="orderCar">
		<div class="info">
			<div class="top clearfix">
				<span class="fontBold">平均接单</span>
				<span class="yellow fontBold">10-25分钟</span>
				<span class="fontBold">请耐心等待</span>
				<span class="fr fontGrey">取消预约</span>
			</div>
			<div class="orderInfo fontGrey fontBold">
				<div>
					<img :src="imgPath+'/locationYellow.png'" class="cIcon">
					<span>出发：海口-海涯国际大厦</span>
				</div>
				<div class="mgt5">
					<img :src="imgPath+'/locationBlack.png'" class="cIcon">
					<span>出发：文昌-维佳大酒店</span>
				</div>
				<div class="mgt5">
					<img :src="imgPath+'/deleteLater.png'" class="icon">
					<span>时间：06/08 13:15</span>
					<span class="fontGreen">（1人 拼座）</span>
				</div>
			</div>
			<div class="clearfix bottom">
				<div class="wh50p textCenter borderRight pd10" @click="cellphoneModel=true">
					<img :src="imgPath+'/orderForFriend.png'" class="icon2">
					<span class="orange font1_1">替人下单</span>
				</div>
				<div class="wh50p textCenter pd10">
					<span class="orange font1_1">约</span>
					<span class="bigFont fontBlack">¥12.</span>
					<span >5元</span>
				</div>
			</div>
			<div class="rentPersonInfo clearfix" v-show="rentForSbShow">
				<div class="wh50p textCenter borderRight pd10" >
					<span class="">{{cellphoneNumber}}</span>
				</div>
				<div class="wh50p textCenter pd10">
					<span >{{name}}</span>
				</div>
			</div>
		</div>
		<div class="matchCarOwner">
			<div class="">
				<span>5</span>
				<span>位顺路车主</span>
			</div>
			<div class="carOwnerList mgt10">
				<div class="carOwnerItem">
					<div class="title clearfix">
						<div class="avatar wh15p">
							<img :src="imgPath+'deleteLater.png'">
						</div>
						<div class="wh60p pd5">
							<div class="fontBold bigFont">
								<span class="textOverflow">专线文昌_海口很多字。，，</span>
								<img :src="imgPath+'/deleteLater.png'" class="icon">
							</div>
							<div class="fontGrey">丰田卡罗拉</div>
						</div>
						<div class="wh25p mgt5" @click="toPayToDriver">
							<span class="orange">点击预定</span>
						</div>
					</div>
					<div class="info">
						<div>
							<img :src="imgPath+'/deleteLater.png'" class="icon">
							<span>发车时间：客满就走</span>
						</div>
						<div class="mgt5">
							<img :src="imgPath+'/locationYellow.png'" class="cIcon">
							<span>车辆位置：海口市-海口日月广场</span>
							<span class="fontGrey smallFont">国兴大道 4.3km</span>
						</div>
						<div class="mgt5">
							<img :src="imgPath+'/deleteLater.png'" class="icon">
							<span>评价详情</span>
							<span class="orange" @click="toCommentOnDriver">（好评率95%）</span><!--spf-->
						</div>
					</div>
					<div class="status">
						<span class="orange">正在寻找乘客（</span>
						<span class="fontGreen">1</span>
						<span class="orange">位）</span>
						<span class="fr">
							<img :src="imgPath+'/deleteLater.png'" class="icon">
							<img :src="imgPath+'/deleteLater.png'" class="icon">
							<img :src="imgPath+'/deleteLater.png'" class="icon">
							<img :src="imgPath+'/deleteLater.png'" class="icon">
						</span>
					</div>
				</div>
			</div>
		</div>
		<Modal v-model="cellphoneModel"  class-name="vertical-center-modal">
	        <div class="mgt20">
	        	<div class="pd10 borderTopBottom">
	        		<span class="mgr10">手机号码</span>
	        		<input type="text" name="" class="noBorder" placeholder="中国大陆手机号码"  v-model="cellphoneNumber">
	        	</div>
	        	<div class="pd10 borderTopBottom mgt10 relative">
	        		<span class="mgr15 mgl15">姓名</span>
	        		<input type="text" name="" class="noBorder" placeholder="请输入乘车人姓名" v-model="name">
	        	</div>
	        </div>
	        <div slot="footer">
	            <div class=" yellowBackBtn fontBold textCenter pd5" @click="sureToRentCarForSb">
					<span>下一步</span>
				</div>
	        </div>
	    </Modal>
	    <Modal v-model="warning" title="提示" :closable="false" class-name="vertical-center-modal">
	        <p>{{warningInfo}}</p>
	        <div slot="footer">
	            <span class="yellow" @click="warning = false">确定</span>
	        </div>
	    </Modal>
	</div>
</template>

<script>
import Modal from 'iview/src/components/modal';
export default {
	name: 'orderCar',
	data () {
		return {
		  	imgPath:"../../static/",
		  	cellphoneModel: false,
		  	warning:false,
		  	cellphoneNumber:"",
		  	name:'',
		  	rentForSbShow:false,
		  	warningInfo:"",
		}
	},
	components:{
		"Modal":Modal,
	},
	methods:{
		toCommentOnDriver(){
			this.$router.push({ path:"/personal_center/my_order/comment_on_driver" });/*spf*/
		},
		sureToRentCarForSb(){
			
			let pattern=/^1\d{10}$/;

        	if(!pattern.test(this.cellphoneNumber)){
        		//next
        		this.warning=true;
        		this.warningInfo="请输入正确的手机号";
        	}else if(this.name==""){
        		//alert
        		this.warning=true;
        		this.warningInfo="请输入乘车人姓名";
        	}else{
        		this.rentForSbShow=true;
        		this.cellphoneModel=false;
        	}
		},
		toPayToDriver(){
			this.$router.push({ path:"/personal_center/my_order/pay_to_driver"});
		}
	}
}
</script>

<style lang='less' scoped>
@import '../assets/common.less';
.info{
	
	.top{
		.pd10;
		border-bottom: 1px solid @borderGrey;
	}
	.orderInfo{
		.pd10;
	}
	.bottom{
		border-top: 1px solid @borderGrey;
		
	}
}
.matchCarOwner{
	.pd10;
	margin-top: -0.5em;
	background-color: @backGrey;
	box-shadow: 0px -1px 5px #DDD;
	.carOwnerItem{
		background-color: white;
		.title{
			padding: 1em 0.5em 0.5em 0.5em; 
			.avatar{
				img{
					.rounded-corners(10em);
					.imgpx(3em,3em);
				}
			}
			border-bottom: 1px solid @borderGrey;
		}
		.info{
			.pd10;
			border-bottom: 1px solid @borderGrey;
		}
		.status{
			.pd10;
		}
	}
}
.textOverflow{
	width: 7em;
	display: inline-block;
	overflow: hidden;/*内容超出后隐藏*/
	text-overflow: ellipsis;/* 超出内容显示为省略号*/
	white-space: nowrap;/*文本不进行换行*/
}
.rentPersonInfo{
	background-color: white;
	border-top: 1rem solid @backGrey;
	margin-bottom: 0.5em;
}
.noBorder{
	border:none;
	outline:none
}
.borderTopBottom{
	border-bottom: 1px solid #e9eaec;
	border-top: 1px solid #e9eaec;
}
.borderRight{
	border-right: 1px solid @borderGrey;
}
</style>
