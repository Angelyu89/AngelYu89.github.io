	//table
	window.onload=function(){
				
			var students=[['张益楠','女','22','山东农业大学'],['吴多','男','22','山东农业大学'],
        	['陈钦亮','男','22','山东农业大学'],	['张浩然','男','21','山东农业大学'],
        	['王洪恩','男','23','山东农业大学'],['张召勇','男','22','山东农业大学'],
        	['张国玉','女','24','北京经济技术研修学院'],['方宏伟','男','22','北京信息科技大学'],
        	['李宝臣','男','23','山东农业大学'],['李志成','男','23','山东农业大学'],
        	['曾棱辉','男','23','山东农业大学'],['刘宁','男','24','山东农业大学'],
        	['朱培瑶','男','23','']];
				
				
				
			var table=document.getElementById('tb');
			
				for(var i=0;i<students.length;i++){
					var studentElement=students[i];					
					var tr=document.createElement('tr');
					
					//弹出下标号
					(function(num){
						tr.onclick=function(){
						alert(num);
					}
					})(i)
					
														
					for(var j=0;j<studentElement.length;j++){
						//生成文本节点并放到td
						var text=document.createTextNode(studentElement[j]);
						var td=document.createElement('td');
						
						td.appendChild(text);
						//将td放到tr
						tr.appendChild(td);
						
					}
					
					table.appendChild(tr);
				}
				
			}
	

//oDive1

	function y(){
	var y=document.getElementById("oDiv1");
	y.style.background="yellow";
	var bt1=document.getElementById("btn1");
	bt1.style.background="orange";
	
}

	function r(){
	document.getElementById("oDiv1").style.background="red";
	/*document.getElementById("oDiv1").style.width="400px";*/
	document.getElementById("btn2").style.background="#FF0000";
}

	function b(){
	document.getElementById("oDiv1").style.background="blue";
	document.getElementById("btn3").style.background="dodgerblue";
}

	function a(){
	document.getElementById("oDiv1").style.background="aqua";
	document.getElementById("btn4").style.background="aliceblue";
}
	
//tb2 单列table
	
//鼠标移入，移除事件	
function toGreen(){
	document.getElementById("oDiv2").style.background="lawngreen";
	document.getElementById("oDiv2").style.height="200px";
	document.getElementById("oDiv2").style.width="200px";
}

function tored(){
	document.getElementById("oDiv2").style.background="red";
	document.getElementById("oDiv2").style.height="200px";
	document.getElementById("oDiv2").style.width="200px";
}

























