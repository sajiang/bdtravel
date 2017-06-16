<template>
	<div class="driveOwner">
		<div class="slogan">
			<p>“成为北斗车主，</p>
			<p>&nbsp让您的车闲置不下来！”</p>
		</div>
		<div class="register yellowBackBtn fontBold textCenter" @click="cellphoneModel = true">
			<span>点击注册成为车主，帮您获取更多订单！</span>
		</div>
	    <Modal v-model="cellphoneModel"  class-name="vertical-center-modal">
	        <div class="mgt20">
	        	<div class="pd10 borderTopBottom">
	        		<span class="mgr10">手机号码</span>
	        		<input type="text" name="" class="noBorder" placeholder="中国大陆手机号码"  v-model="cellphoneNumber">
	        	</div>
	        	<div class="pd10 borderTopBottom mgt10 relative">
	        		<span class="mgr10">动态密码</span>
	        		<input type="text" name="" class="noBorder" placeholder="请输入动态密码" v-model="code">
	        		<span class="sendDynamicPassword yellow">发送动态密码</span>
	        	</div>
	        </div>
	        <div slot="footer">
	            <div class=" yellowBackBtn fontBold textCenter pd5" @click="nextStep">
					<span>下一步</span>
				</div>
	        </div>
	    </Modal>
	    <Modal v-model="warning" title="提示" :closable="false" class-name="vertical-center-modal">
	        <p>请输入正确的手机号！</p>
	        <div slot="footer">
	            <span class="yellow" @click="warning = false">确定</span>
	        </div>
	    </Modal>
	    <Modal v-model="successModel" :closable="false" class-name="vertical-center-modal">
	    	<div class="textCenter">
	    		<img :src="imgPath+'complete.png'" class="bigIcon" >
	    	</div>
	        <p class="mgt5">尊敬的<span class="yellow">{{this.cellphoneNumber}}</span>车主：</p>
	        <p class="indent2">您好！</p>
	        <p class="indent2">
	        	北斗出行客服会在30分钟内联系您，请保持手机畅通，注意接听！有问题可咨询：400-888-12345！
	        </p>
	        <div slot="footer">
	            <span class="yellow" @click="successModel = false">确定</span>
	        </div>
	    </Modal>
	</div>
</template>

<script>
import Modal from 'iview/src/components/modal';

export default {
	name: 'driveOwner',
	data () {
		return {
		  	imgPath:"../../static/",
		  	cellphoneModel: false,
		  	cellphoneNumber:"",
		  	code:"",
		  	warning:false,
		  	successModel:false
		}
	},
	components:{
		"Modal":Modal,
	},
    methods: {
        nextStep () {
        	let pattern=/^1\d{10}$/;

        	if(pattern.test(this.cellphoneNumber)){
        		//next
        		this.cellphoneModel = false;
        		this.successModel=true;
        	}else{
        		//alert
        		this.warning=true;
        	}
            
        }
    },

}
</script>

<style lang='less' scoped>
@import '../../assets/common.less';
.driveOwner{
	width: 100%;
	background-image: url("../../../static/driverBG.png");
	background-repeat: no-repeat;
	background-size: 100% 100%;
	position: absolute;
	width: 100%;
	top: 6em;
	bottom: 0;
}
.slogan{
	color: white;
	font-size: 1.2em;
	position: absolute;
	bottom: 20%;
	p{
		margin: 0.5em 1em;
	}
}
.register{
	width: 95%;
	position: absolute;
	bottom: 0;
	margin:0.5em;
	padding: 0.8em 0em;
	font-size: 1.1em;
}
.borderTopBottom{
	border-bottom: 1px solid #e9eaec;
	border-top: 1px solid #e9eaec;
}
.noBorder{
	border:none;
	outline:none
}

.sendDynamicPassword{
	position: absolute;
	right: 0px;
}
.indent2{
	text-indent: 2em;
}
</style>
