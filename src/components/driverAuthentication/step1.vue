<template>
	<div class="step1">
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
				<div @click="isShowTimeSelect=true">
					<v-up-to-today class="bigInput inlineBlock dateSelect" @dateSelected="updateDate($event)" :is_show="isShowTimeSelect" >
						<span v-if="date">{{date}}</span>
						<span v-else class="fontGrey">请选择你初次领取驾驶证的日期</span>
					</v-up-to-today>
				</div>
			</div>
			<div class="mgt5">
				<div class="lineHeight2 fontGrey font0_9">驾驶证照片</div>
				<div class="relative">
					<div class="placeholder"></div>
					<div class="imgInputBg">
						<img :src="imgPath+'deleteLater.png'">
					</div>
					<div class="imgInputPreview" @click="openUploadReminder">
						<img :src="images">
					</div>
				</div>
				<div class="needHelp">需要帮助 ></div>
			</div>
			<div class="yellowBackBtn fontBold textCenter nextStep" @click="toStep2">
				<span>下一步</span>
			</div>
		</div>
		<div class="ivu-modal-mask" @click="uploadReminderShow=false" v-if="uploadReminderShow"></div>
		<div class="uploadReminder" v-if="uploadReminderShow">
			<div class="imgContainer">
				<img :src="imgPath+'drivingLicense.png'">
			</div>
			<div class="info">
				<p>· 请按照示例图提交驾驶证（黑本）</p>
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
export default {
	name: 'step1',
	data () {
		return {
		  	imgPath:"../../../static/",
		  	images:[],
		  	uploadReminderShow:false,
		  	date:"",
		  	isShowTimeSelect:false,
		}
	},
	components: {
    	'v-up-to-today': upToToday,
	},
	methods:{
		updateDate(items){
			this.date=items.text;
			this.isShowTimeSelect=false;
		},
		toStep2(){
			this.$router.push({path:"/driver_authentication/step2"});
		},
		openUploadReminder(){
			this.uploadReminderShow=true;
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
.dateSelect{
	line-height: 2em;
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
