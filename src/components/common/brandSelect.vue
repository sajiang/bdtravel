<template>
	<div class="brandSelect">
		<slot>
			车辆品牌
		</slot>
		<div class="content" v-show="is_show">
			<div class="title">热门车辆品牌</div>
			<div>
				
			</div>
			<div v-for="(letter,index) in brandData" :id="'anchor-'+index">
				<div class="title">{{letter.title}}</div>
				<ul>
					<li @click.stop="brandSelected(brand)" class="item" v-for="brand in letter.children">{{brand}}</li>
				</ul>
			</div>
			<div class="nav">
				<div v-for="(letter,index) in brandData" @click="goAnchor('#anchor-'+index)">
					{{letter.title}}
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'brandSelect',
	data () {
		return {
		  	imgPath:"../../static/",
		  	brandData:[{title:"A",children:["ABT","奥迪","阿尔法罗密欧","阿斯顿.马丁","ALPINA"]},{title:"B",children:["保斐利","保时捷","别克","北京汽车","北汽制造","北汽威旺","北汽幻速","北汽新能源",'奔腾','奔驰','宝马','宝骏','宾利','巴博斯','布加迪','本田','标致','比亚迪','北汽坤宝','宝沃','比速汽车']},{title:"C",children:['昌河','长城','长安','长安欧尚']},{title:"D",children:['DS','东南','东风','东风风度','东风风神','东风风行','大众','大发','道奇','东风风光']},{title:"F",children:['丰田','法拉利','福特','福田','福迪','菲亚特','飞驰商务车','福汽启腾']},{title:"G",children:['GMC','光冈','广汽传祺','广汽吉奥','观致']},{title:"H",children:['哈飞','华普','华泰','华颂','华旗','哈弗','恒天','悍马','海马','红旗','黄海','华泰新能源','汇众','汉腾汽车']},{title:"J",children:['Jeep','九龙','吉利汽车','捷豹','江淮','江铃','金杯','金龙']},{title:"K",children:['KTM','克莱斯勒','凯翼','凯迪拉克','卡威','卡尔森','凯瑞','科尼塞克','康迪']},{title:"L",children:['兰博基尼','力帆','劳斯莱斯','朗世','林肯','猎豹汽车','理念','莲花汽车','路特斯','路虎','铃木','陆地方舟','陆风','雷克萨斯','雷诺','蓝海房车']},{title:"M",children:['MG','MINI','摩根','玛莎拉蒂','迈凯轮','迈巴赫','马自达']},{title:"N",children:["Noble",'纳智捷']},{title:"O",children:['欧宝','欧朗','讴歌']},{title:"P",children:['帕加尼']},{title:"Q",children:['乔治.巴顿','启辰','奇瑞','起亚','前途']},{title:"R",children:['日产','瑞麒','荣威','如虎']},{title:"S",children:['Smart','三菱','上海大通','世爵','双环','双龙','思铭','斯巴鲁','斯柯达','萨博','山姆','SWM斯威汽车']},{title:"T",children:['泰卡特','特斯拉','腾势']},{title:"W",children:['五十铃','威兹曼','威麟','沃尔沃','五菱','潍柴欧瑞','蔚来']},{title:"X",children:['新凯','现代','西雅特','雪佛兰','雪铁龙']},{title:"Y",children:['一汽','依维柯','永源','英致','英菲尼迪','野马汽车']},{title:"Z",children:['中兴','中华','之诺','众泰','知豆','浙江卡尔森','中欧奔驰房车']}],
		}
	},
	props:["is_show"],
	methods:{
		goAnchor(selector) {
	        var anchor = this.$el.querySelector(selector);
	        this.$el.querySelector(".content").scrollTop=anchor.offsetTop;
	    },
	    brandSelected(brand){
	    	this.$emit("brandSelected",brand);
	    },
	    cancel(){
	    	this.$emit("cancelSelect");
	    },
	}
}
</script>

<style lang='less' scoped>
@import '../../assets/common.less';
.content{
	font-weight: normal;
	color:black;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	background-color: white;
	text-align: left;
	bottom: 0em;
	overflow-y: scroll;
}
.title{
	background-color: @backGrey;
	padding: 0.5em 1em;
}
.item{
	padding: 0.5em 1em;
	border-bottom: 1px solid @borderGrey;
}
.nav{
	background-color: white;
	position: fixed;
	right: 0.5em;
	width: 1em;
	top: 5em;
	.textCenter;
}
</style>
