<template>
	<div class="step2">
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
		<div class="form pd5 mgb30">
			<div>
				<div class="lineHeight2 fontGrey font0_9">车牌号码</div>
				<div class="bigInput" >
					<span @click="showLicenseAddress" class="licenseAddressS">
						<v-license-address @licenseAddressSelected="updateLicenseAddress" :is_show="isShowLicenseAddress" >{{licenseAddress}}ｖ</v-license-address>
					</span>
					
					<input class="licenseNum" type="text" name="" placeholder="车牌号码" >
				</div>
			</div>
			<div class="mgt5">
				<div class="lineHeight2 fontGrey font0_9">车辆所有人</div>
				<div><input type="text" name="" placeholder="填写车辆所有人姓名" class="bigInput"></div>
			</div>
			<div class="mgt5">
				<div class="lineHeight2 fontGrey font0_9">车辆品牌</div>
				<div><input type="text" name="" placeholder="选择车辆品牌" class="bigInput"></div>
			</div>
			<div class="mgt5">
				<div class="lineHeight2 fontGrey font0_9">车辆颜色</div>
				<div @click="showColorSelect" class="bigInput">
					<v-color-select class="colorSelect"  @colorSelected="updateColor($event)" :is_show="isShowColorSelect">
					<span v-if="carColor">
						{{carColor}}
					</span>
					<span v-else class="fontGrey">
						选择车辆颜色
					</span>
					</v-color-select>
				</div>
			</div>
			
			<div class="mgt5">
				<div class="lineHeight2 fontGrey font0_9">行驶证上的注册日期</div>
				<div @click="showTimeSelect">
					<v-up-to-today class="bigInput inlineBlock dateSelect" @dateSelected="updateDate($event)" :is_show="isShowTimeSelect" >
						<span v-if="date">{{date}}</span>
						<span v-else class="fontGrey">参照行驶证的“注册日期”</span>
					</v-up-to-today>
				</div>
			</div>
			<div class="mgt5 mgb10">
				<div class="lineHeight2 fontGrey font0_9">行驶证照片</div>
				<div class="relative">
					<div class="placeholder"></div>
					<div class="imgInputBg">
						<img :src="imgPath+'deleteLater.png'">
					</div>
					<div class="imgInputPreview" @click="openUploadReminder">
						<img :src="images">
					</div>
				</div>
				<div class="needHelp" >需要帮助 ></div>
			</div>
			<div class="yellowBackBtn fontBold textCenter sureBtn" @click="">
				<span>确定</span>
			</div>
		</div>
		<div class="ivu-modal-mask" v-if="maskShow"></div>
		<div class="registDatePanel" v-if="isShowTimeSelect">
			<div class="imgContainer">
				<img :src="imgPath+'vehicleLicense.png'">
			</div>
			<div class="placeholder"></div>
		</div>
		<div class="uploadReminder" v-if="uploadReminderShow">
			<div class="imgContainer">
				<img :src="imgPath+'vehicleLicense.png'">
			</div>
			<div class="info">
				<p>· 请按照示例图提交行驶证</p>
				<p class="mgt5">· 照片要四角对齐，如有模糊、太暗、有遮挡，则不予认证</p>
			</div>
			<div class="uploadPic mgt10 yellowBackBtn fontBold textCenter">
				<span>上传照片</span>
			</div>
			<input type="file" name="file" accept="image/*"  class="realImgInput" @change="previewImg($event)">
		</div>

	</div>
</template>

<script>
import upToToday from '@/components/common/upToToday'
import licenseAddress from '@/components/common/licenseAddress'
import colorSelect from '@/components/common/colorSelect'
export default {
	name: 'step2',
	data () {
		return {
		  	imgPath:"../../../static/",
		  	images:[],
		  	date:"",
		  	licenseAddress:"京A",
		  	carColor:"",
		  	maskShow:false,
		  	isShowTimeSelect:false,
		  	isShowLicenseAddress:false,
		  	isShowColorSelect:false,
		  	uploadReminderShow:false,
		}
	},
	components: {
    	'v-up-to-today': upToToday,
    	'v-license-address': licenseAddress,
    	'v-color-select': colorSelect,
	},
	methods:{
		showTimeSelect(){
			this.maskShow=true;
			this.isShowTimeSelect=true;
		},
		showLicenseAddress(){
			this.maskShow=true;
			this.isShowLicenseAddress=true;
		},
		showColorSelect(){
			this.maskShow=true;
			this.isShowColorSelect=true;
		},
		openUploadReminder(){
			this.maskShow=true;
			this.uploadReminderShow=true;
		},
		updateDate(items){
			this.date=items.text;
			this.isShowTimeSelect=false;
			this.maskShow=false;
		},
		updateLicenseAddress(items){
			this.licenseAddress=items[0].text+items[1].text;
			this.isShowLicenseAddress=false;
			this.maskShow=false;
		},
		updateColor(items){
			this.carColor=items[0].value;
			this.maskShow=false;
			this.isShowColorSelect=false;
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
                	vm.uploadReminderShow=false;
                	vm.maskShow=false;
                };                 
            }        
		},
	}
}
</script>

<style lang='less' scoped>
@import '../../assets/common.less';
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

.needHelp{
	.textCenter;
	.mgt10;
	.smallFont;
	color:#E37E49;
}
.dateSelect{
	line-height: 2em;
}
.licenseAddressS{
	line-height: 2em;
	display: inline-block;
	padding-right: 0.7em;
	border-right: 1px solid @borderGrey;
}
.licenseNum{
	border:none;
	outline: none;
	height: 2em;
}
.colorSelect{
	line-height: 2em;
}
.sureBtn{
	position: fixed;
	bottom: 0.5em;
	width: 95%;
	padding:1em;
	z-index: 2;
	.rounded-corners(5px);
}
.registDatePanel{
	width: 100%;
	background-color: white;
	position: fixed;
	bottom: 0;
	z-index: 1001;
	.imgContainer{
		padding: 1em;
		img{
			width: 100%;
		}
	}
	.placeholder{
		height: 15em;
	}
}
.placeholder{
	height:10em;
}
.uploadReminder{
	width: 100%;
	background-color: white;
	position: fixed;
	bottom: 0;
	z-index: 1001;
	padding: 0.5em;

	.imgContainer{
		img{
			width: 100%;
		}
	}
	.info{
		color: @fontGrey;
		padding: 0.5em 1.5em;
		line-height: 1.2em;
		text-indent: -0.5em;
	}
	.uploadPic{
		padding: 1em;
	}
	.realImgInput{
		position: fixed;
		bottom: 0em;
		z-index: 1002;
		width: 100%;
		height: 4em;
		opacity: 0;
	}
}
</style>
