<template>
	<div class="driverAuthentication">
		<div class="step1" v-show="step1Show">
			<div class="title clearfix pd5">
				<div class="fl wh25p">
					<img :src="imgPath+'deleteLater.png'">
				</div>
				<div class="fl wh75p">
					<div class="font1_1">第一步 填写本人驾驶证</div>
					<div class="smallFont fontBold yellow mgt5 lineHeight1_5">北斗出行将保障您的个人隐私，信息仅用于平台审核，不会泄漏给任何组织或个人</div>
				</div>
			</div>
			<div class="greyLine"></div>
			<div class="form pd5">
				<div>
					<div class="lineHeight2 fontGrey font0_9">真实姓名</div>
					<div><input type="text" name="" placeholder="姓名" class="bigInput"></div>
				</div>
				<div class="mgt5">
					<div class="lineHeight2 fontGrey font0_9">驾驶证号</div>
					<div><input type="text" name="" placeholder="与身份证一致的18位驾驶证号" class="bigInput"></div>
				</div>
				<div class="mgt5">
					<div class="lineHeight2 fontGrey font0_9">驾驶证初次领证日期</div>
					<div><input type="date" name="" placeholder="请选择你初次领取驾驶证的日期" class="bigInput"></div>
				</div>
				<div class="mgt5">
					<div class="lineHeight2 fontGrey font0_9">驾驶证照片</div>
					<div class="relative">
						<div class="placeholder"></div>
						<div class="imgInputBg">
							<img :src="imgPath+'deleteLater.png'">
						</div>
						<div class="imgInputPreview">
							<img :src="images">
						</div>
						<input type="file" name="file" accept="image/*"  class="realImgInput" @change="previewImg($event)">
					</div>
					<div class="needHelp">需要帮助 ></div>
				</div>
				<div class="yellowBackBtn fontBold textCenter nextStep" @click="toStep2">
					<span>下一步</span>
				</div>
			</div>
		</div>
		<div class="step2" v-if="step2Show">
			<div class="title clearfix pd5">
				<div class="fl wh25p">
					<img :src="imgPath+'deleteLater.png'">
				</div>
				<div class="fl wh75p">
					<div class="font1_1">第二步 填写行驶证</div>
					<div class="smallFont fontBold yellow mgt5 lineHeight1_5">本人或其他人行驶证均可</div>
				</div>
			</div>
			<div class="greyLine"></div>
			<div class="form pd5">
				<div>
					<div class="lineHeight2 fontGrey font0_9">车牌号码</div>
					<div><input type="text" name="" placeholder="姓名" class="bigInput"></div>
				</div>
				<div class="mgt5">
					<div class="lineHeight2 fontGrey font0_9">车辆所有人</div>
					<div><input type="text" name="" placeholder="填写车辆所有人姓名" class="bigInput"></div>
				</div>
				<div class="mgt5">
					<div class="lineHeight2 fontGrey font0_9">车辆品牌</div>
					<div><input type="text" name="" placeholder="选择车辆品牌和颜色" class="bigInput"></div>
				</div>
				<div class="mgt5">
					<div class="lineHeight2 fontGrey font0_9">行驶证上的注册日期</div>
					<div><input type="text" name="" placeholder="参照行驶证的“注册日期”" class="bigInput"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'driverAuthentication',
	data () {
		return {
		  	imgPath:"../../static/",
		  	images:[],
		  	step1Show:true,
		  	step2Show:false,
		}
	},
	methods:{
		toStep2(){
			//check
			//ifPassCheck
			this.step1Show=false;
			this.step2Show=true;
		},
		previewImg(e){
			var files = e.target.files || e.dataTransfer.files;
            if (!files.length)return; 
            this.createImage(files);
		},
		createImage(files){
			if(typeof FileReader==='undefined'){
                alert('您的浏览器不支持图片上传，请升级您的浏览器');
                return false;
            }
            var image = new Image();         
            var vm = this;
            var leng=files.length;
            for(var i=0;i<leng;i++){
                var reader = new FileReader();
                reader.readAsDataURL(files[i]); 
                reader.onload =function(e){
                	vm.images=(e.target.result);                                    
                };                 
            }        
		},
	}
}
</script>

<style lang='less' scoped>
@import '../assets/common.less';
.greyLine{
	height: 0.5em;
	background-color: @backGrey;
}

.bigInput{
	width: 100%;
	height: 2.2em;
	border:1px solid @borderGrey;
	padding-left: 0.5em;
	.rounded-corners(5px);
}
.placeholder{
	width: 100%;
	height: 10em;
}
.imgInputBg{
	width: 100%;
	height: 10em;
	top: 0em;
	border:1px solid @borderGrey;
	.rounded-corners(5px);
	display: flex;
    justify-content: center;
    align-items:center;
    position: absolute;
    z-index: 1;
}
.imgInputPreview{
	width: 100%;
	height: 10em;
    position: absolute;
    top: 0em;
    z-index: 2;
    img{
    	width: 100%;
    	height: 100%;
    }
}
.realImgInput{
	position: absolute;
	top: 0em;
	z-index: 3;
	width: 100%;
	height: 10em;
	opacity: 0;
}
.needHelp{
	.textCenter;
	.mgt10;
	.smallFont;
	color:#E37E49;
}
.nextStep{
	position: fixed;
	bottom: 0.5em;
	width: 95%;
	padding:1em;
	.rounded-corners(5px);
}
</style>
