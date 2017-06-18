var fs=require('fs');
var file="car.json";
var result=JSON.parse(fs.readFileSync( file));



var arr=[];
for (var i = 0;i<result.length; i++) {
	arr.push({code:result[i].code,Pcode:result[i].Pcode});
}


var resultArr=[];
var curPcode="";
for (var i =0;i<arr.length;i++) {
	if (curPcode==arr[i].Pcode) {
		resultArr[resultArr.length-1].children.push({
				text:arr[i].code.substr(1,2),
				value:arr[i].code.substr(1,2)
			})
	}else{
		curPcode=arr[i].Pcode;
		resultArr.push({
			text:arr[i].code.substr(0,1),
			value:arr[i].Pcode,
			children:[{
				text:arr[i].code.substr(1,2),
				value:arr[i].code.substr(1,2)
			}]
		})
	}
}
fs.writeFile("result.json", JSON.stringify(resultArr))