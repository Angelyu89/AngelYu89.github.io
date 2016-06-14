
//字符串API的使用

//字符串的链接(任何值与相加都是字符串)
window.onload=function(){
	document.getElementById("btn").onclick=function(){
	var str="Hello";
	 str+="World";
	 document.write(str);
	}
	//字符串相加
	document.getElementById("btn2").onclick=function(){
	var a =10;
	 var b=20;
	document.write(a+""+b);
}	
	//字符串的截取(从第2位开始，2个长度)
	document.getElementById("btn3").onclick=function(){
		var str="Hello World";
        document.write(str.substr(2,2));
	}
	//字符串的截取(起始位置,结束位置)
	document.getElementById("btn4").onclick=function(){
		var str="Hello World";
        document.write(str.substring(2,6));
	}
	//搜索字符串(从前向后搜索)
	document.getElementById("btn5").onclick=function(){
		var str = "Hello World";
       	document.write(str.indexOf("o"));
	}
	//搜索字符串（要找的值，从后向前搜索（从第10位开始向前找））
	document.getElementById("btn6").onclick=function(){
		var str = "Hello World";
    	document.write(str.lastIndexOf("r", 10));
	}
	//获取特定位置字符
	document.getElementById("btn7").onclick=function(){
		var str = "Hello World";
        document.write(str.charAt(0));
	}
	//获取特定位置字符编码
	document.getElementById("btn8").onclick=function(){
		var str = "Hello World";
        document.write(str.charCodeAt(1));
	}
	//大写变小写
	document.getElementById("btn9").onclick=function(){
		document.write(String.fromCharCode("H".charCodeAt(0) + 32));
	}
	//封装好的大转小
	document.getElementById("btn10").onclick=function(){
		var str = "Hello World";
        document.write("A".toLowerCase());
	}
	//替换(不改变原有值)
	document.getElementById("btn11").onclick=function(){
		var str = "Hello World";
        var str1 = str.replace("o", "2");
        document.write(str1);
        // document.write(str1);
	}
	
	//判断成绩是否及格
	document.getElementById("btn12").onclick=function(){
		var score = 80;
        if(score>100){
        document.write("无效的分数")
        }
        else if (score == 90) {
        document.write("满分")
        } else if (score > 90) {
        document.write("优秀")
        } else if (score > 80) {
        document.write("良好")
        } else if (score > 60) {
        document.write("及格")
        } else if(score > 60)
        {
        document.write("及格")
        }else{
        document.write("无效的分数")
        }
	  }

	//向下求整
	document.getElementById("btn13").onclick=function(){
		var score=-20;
	
	switch(Math.floor(score/10)){
	    case 10:
	        document.write("满分")
	        break;
	    case 9:
	        document.write("优秀")
	        break;
	    case 8:
	        document.write("良好")
	        break;
	    case 7:
	    case 6:
	        document.write("及格")
	        break;
	    case 5:
	    case 4:
	    case 3:
	    case 2:
	    case 1:
	        document.write("不及格")
	        break;
	    default:
	        document.write("无效分数")
	        break;
		}
	}

	//数组

	document.getElementById("btn14").onclick=function(){
		//定义数组
		var arr=[1,2,"Hello"];
		//输出
		document.write(arr);
	}

	
	document.getElementById("btn14").onclick=function(){
		//定义数组
		var arr=[1,2,"Hello"];
		//输出
		document.write(arr);
	}
	
	//添加元素(在尾部)
	document.getElementById("btn15").onclick=function(){
		var arr=[1,2,"Hello"];
        arr.push("world");
        document.write(arr);
	}
	
	//修改数组元素splice(即可添加，也可替换/删除)
	document.getElementById("btn16").onclick=function(){
		var arr=[1,2,"Hello",3,4,5];
		//[1,是添加删除的位置，0，表示不删除，ucai,添加的新项目]
		//arr.splice(1,0,"ucai");
		
		//[2，从第二位置开始，1，删除一个，ucai,添加一个新元素  ucai来替代被删除的元素：]
		//arr.splice(2,1,"ucai");
		
		//[2，从第二个位置开始，3，删除三个，ucai,添加一个新元素  ucai来替代被删除的元素：]
		//arr.splice(2,3,"ucai");
		
		//删除第3位开始的所有值
		//arr.splice(3,arr.length);
		
		//删除第3位开始的1个值
		arr.splice(3,1);
				
        document.write(arr);
	}
	
	//数组的链接
	document.getElementById("btn17").onclick=function(){
		var a = [1,2,3];
        document.write(a.concat(4,5));
	}
	
	//将数组转成字符串join
	document.getElementById("btn18").onclick=function(){
		var arr=[1,2,3,"ni","hao"];
		console.log(arr.join(""));
	}
	
	//遍历数组
	document.getElementById("btn19").onclick=function(){
		var arr=[1,2,3,"ni","hao"];
		arr.forEach(function(){
        console.log(arguments);
       })
	}
	
	//删除末尾元素
	document.getElementById("btn20").onclick=function(){
		var arr=[1,2,3,"ni","hao"]
		arr.pop();
        console.log(arr);
	}
	
	//删除第一个元素shift
	document.getElementById("btn21").onclick=function(){
	    var arr=[1,2,3,"ni","hao"]
	    arr.shift();
	    console.log(arr);
	    
	}
	
	//排序sort
	document.getElementById("btn22").onclick=function(){
		var arr=[1,2,3,"ni","hao"]
		arr.sort(function(a,b){
			return a>b;
			
		})
		console.log(arr);
	}
	
	//对象进行排序
	document.getElementById("btn23").onclick=function(){
		var arr=[{name:"li",age:10},{name:"zhang",age:20},{name:"zhao",age:30}]
		arr.sort=(function(a,b){
			return a.age<b.age;		
		})
		console.log(arr);		
	}
	
	//访问
	document.getElementById("btn24").onclick=function(){
		var arr=[1,2,3,4,-10];
        for(var i=0;i<arr.length;i++){
         console.log(arr[i])
        }
	}
	
	
	
}

		










/*-------------------控制流程-----------------------------*/
//判断成绩是否及格

/*var score = 80;
if(score>100){
    consloe.log("无效的分数")
}
else if (score == 90) {
    console.log("满分")
} else if (score > 90) {
    console.log("优秀")
} else if (score > 80) {
    console.log("良好")
} else if (score > 60) {
    console.log("及格")
} else if(score > 60)
{
    console.log("及格")
}else{
    console.log("无效的分数")
}*/

//%取模
/*switch(score/10){

}*/

//向下求整
/*var score=-20;

switch(Math.floor(score/10)){
    case 10:
        console.log("满分")
        break;
    case 9:
        console.log("优秀")
        break;
    case 8:
        console.log("良好")
        break;
    case 7:
    case 6:
        console.log("及格")
        break;
    case 5:
    case 4:
    case 3:
    case 2:
    case 1:
        console.log("不及格")
        break;
    default:
        console.log("无效分数")
        break;
}
*/












