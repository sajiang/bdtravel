
<template>
	<span class="positonSelect">
		<slot>
			选择地点
		</slot>
		<div class="selectPanel" v-show="message">
			<div class="filter">
				<span @click="showCitySelect">{{selectedCityName?selectedCityName:"选择城市"}}ｖ</span>
				<input @focus="" class="mgl10" placeholder="您要去哪儿" type="" name="">
				<span class="fr fontGrey" @click.stop="cancel">取消</span>
			</div>
			<div class="body">
				<div class="citySelect" v-if="isCitySelectShow">
					<div v-for="(character,index) in cityInfo" :id="'anchor-'+index">
						<h2>
							{{character.title}}
						</h2>
						<ul v-for="city in character.children">
							<li class="cityItem" @click="citySelected(city)">{{city}}</li>
						</ul>
					</div>
					<div class="nav">
						<div v-for="(character,index) in cityInfo" @click="goAnchor('#anchor-'+index)">
							{{character.title}}
						</div>
					</div>
				</div>
				<div class="placeSelect" v-if="isPositionSelectShow">
					
				</div>
			</div>
			
			
		</div>
		
	</span>
</template>

<script>

export default {
	name: 'positonSelect',
	props:['message'],
	data () {
		return {
		  	imgPath:"../../static/",
		  	isCitySelectShow:false,
		  	isPositionSelectShow:false,
		  	selectedCityName:"",
		  	cityInfo:[{"title":"★","children":["北京市","上海市","深圳市","广州市","武汉市"]},{"title":"A","children":["鞍山市","安庆市","安阳市","阿拉善盟","安顺市","阿里地区","安康市","阿克苏地区","阿勒泰地区","阿拉尔市"]},{"title":"B","children":["北京市","保定市","包头市","本溪市","蚌埠市","北海市","滨州市","宝鸡市","亳州市","巴彦淖尔市","白山市","白城市","百色市","白沙黎族自治县","巴中市","毕节地区","保山市","白银市","巴音郭楞州","博尔塔拉州"]},{"title":"C","children":["成都市","重庆市","长沙市","长春市","常州市","沧州市","承德市","常德市","郴州市","长治市","滁州市","池州市","赤峰市","巢湖市","朝阳市","潮州市","崇左市","澄迈县","楚雄州","昌都地区","昌吉州"]},{"title":"D","children":["大连市","东莞市","大庆市","东营市","德州市","大同市","大理州","丹东市","德阳市","大兴安岭地区","儋州市","东方市","定安县","达州市","德宏州","迪庆州","定西市"]},{"title":"E","children":["鄂尔多斯市","鄂州市","恩施州"]},{"title":"F","children":["福州市","佛山市","抚顺市","阜新市","阜阳市","抚州市","防城港市"]},{"title":"G","children":["广州市","贵阳市","赣州市","桂林市","贵港市","广元市","广安市","甘孜州","甘南州","固原市","果洛州"]},{"title":"H","children":["杭州市","合肥市","哈尔滨市","呼和浩特市","邯郸市","葫芦岛市","衡水市","海口市","湖州市","淮安市","衡阳市","汉中市","菏泽市","惠州市","黄山市","淮南市","淮北市","呼伦贝尔市","兴安盟","鹤岗市","黑河市","黄石市","黄冈市","怀化市","鹤壁市","河源市","贺州市","河池市","红河州","海东地区","海北州","黄南州","海南州","海西州","哈密地区","和田地区"]},{"title":"I","children":["伊犁州"]},{"title":"J","children":["济南市","锦州市","晋中市","吉林市","济宁市","金华市","嘉兴市","九江市","荆州市","景德镇市","江门市","揭阳市","焦作市","晋城市","鸡西市","佳木斯市","吉安市","荆门市","济源市","金昌市","嘉峪关市","酒泉市"]},{"title":"K","children":["昆明市","开封市","喀什地区","克拉玛依市","克孜勒苏柯州"]},{"title":"L","children":["洛阳市","兰州市","廊坊市","临沂市","辽阳市","连云港市","泸州市","莱芜市","聊城市","柳州市","丽江市","丽水市","拉萨市","六安市","临汾市","吕梁市","辽源市","龙岩市","娄底市","漯河市","来宾市","临高县","乐山市","凉山州","六盘水市","临沧市","林芝地区","陇南市","临夏州"]},{"title":"M","children":["绵阳市","马鞍山市","牡丹江市","茂名市","梅州市","眉山市"]},{"title":"N","children":["南京市","宁波市","南宁市","南昌市","南充市","南通市","南阳市","宁德市","南平市","内江市","阿坝州","怒江州","那曲地区"]},{"title":"P","children":["平顶山市","攀枝花市","莆田市","盘锦市","濮阳市","萍乡市","普洱市","平凉市"]},{"title":"Q","children":["青岛市","泉州市","秦皇岛市","齐齐哈尔市","曲靖市","衢州市","清远市","七台河市","潜江市","钦州市","琼海市","黔西南州","黔东南州","黔南州","庆阳市"]},{"title":"R","children":["日照市"]},{"title":"S","children":["深圳市","上海市","沈阳市","石家庄市","苏州市","三亚市","绍兴市","绥化市","四平市","宿迁市","汕头市","商丘市","石河子市","宿州市","朔州市","松原市","双鸭山市","上饶市","三明市","十堰市","随州市","神农架林区","邵阳市","三门峡市","韶关市","汕尾市","遂宁市","山南地区","日喀则地区","商洛市","石嘴山市"]},{"title":"T","children":["天津市","太原市","唐山市","铁岭市","台州市","泰州市","泰安市","天水市","铜陵市","通辽市","通化市","天门市","屯昌县","铜仁地区","铜川市","吐鲁番地区","塔城地区"]},{"title":"U","children":["乌鲁木齐市"]},{"title":"W","children":["武汉市","威海市","无锡市","潍坊市","温州市","芜湖市","乌海市","乌兰察布市","梧州市","五指山市","文昌市","万宁市","文山州","渭南市","武威市","吴忠市"]},{"title":"X","children":["西安市","西宁市","厦门市","徐州市","湘潭市","邢台市","襄阳市","新乡市","许昌市","咸阳市","新余市","宣城市","忻州市","锡林郭勒盟","孝感市","咸宁市","仙桃市","湘西州","信阳市","西双版纳州"]},{"title":"Y","children":["烟台市","银川市","宜昌市","岳阳市","营口市","扬州市","盐城市","运城市","宜宾市","阳泉市","延吉市","玉林市","延安市","榆林市","伊春市","鹰潭市","宜春市","益阳市","永州市","阳江市","云浮市","雅安市","玉溪市","玉树州"]},{"title":"Z","children":["郑州市","遵义市","株洲市","淄博市","张家口市","珠海市","镇江市","周口市","中山市","漳州市","舟山市","湛江市","肇庆市","枣庄市","张家界市","驻马店市","自贡市","资阳市","昭通市","张掖市","中卫市"]}],

		}
	},
	
	methods:{
		showCitySelect(){
			this.isCitySelectShow=true;
			this.isPositionSelectShow=false;
		},
		goAnchor(selector) {
	        var anchor = this.$el.querySelector(selector);
	        document.getElementsByClassName("selectPanel")[0].scrollTop=anchor.offsetTop;
	    },
	    citySelected(city){
	    	this.selectedCityName=city;
	    	this.isCitySelectShow=false;
	    	this.isPositionSelectShow=true;
	    },
	    cancel(){
	    	this.$emit("cancelSelect");
	    }
	}

}
</script>

<style lang='less' scoped>
@import '../../assets/common.less';
input{
	border:none;
	outline: none;
}
.selectPanel{
	position: fixed;
		background-color: @backGrey;
		width: 100%;
		top: 3em;
		bottom: 0em;
		left: 0em;
		overflow-y: scroll;
	.filter{
		background-color: white;
		position: fixed;
		top:0em;
		left:0em;
		width: 100%;
		padding: 1em;
		height: 3em;
		border-bottom: 1px solid @borderGrey;
	}
	.body{
		
		padding: 1em;
		
		color: black;
		font-weight: normal;
		.citySelect{
			
			background-color: @backGrey;
			
			h2{

			}
			.cityItem{
				padding: 0.7em;
				background-color: white;
				border-bottom: 1px solid @borderGrey;
			}
		}
	}
}
.nav{
	position: fixed;
	right: 0.5em;
	width: 1em;
	top: 5em;
	.textCenter;
}
</style>
