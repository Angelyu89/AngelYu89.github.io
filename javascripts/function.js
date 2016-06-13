/**
 * Created by sks on 2016/6/12.
 */
//函数
/*function pintFromTO(from,to){
    for(var i=from;i<to;i++){
        console.log(i);
    }
}
pintFromTO(5,10);*/

//定义参数，获取参数，可变参数
/*function hello(name,age){
    console.log(arguments);
}
hello("ucai",4)*/


//作业
/*int main(int argc,const char*argv[]){

 printf("Hello %s,%d\n","World",100);

 return 0;
 }*/



//替换相对应得值
/*var str="Hello %s %s %d";
function prinft(i,j,k){
    var a=str.indexOf("%s");
    var b=str.substring(0,a+2);
    var c=str.replace(b,i);
    var d=c.indexOf("%s");
    var e=c.substring(d,d+2);
    var f=c.replace(e,j);
    var g=f.indexOf("%d");
    var h=f.substring(g,g+4);
    var l=f.replace(h,k);
    console.log(l);
}
prinft("Hello","World","100")*/


//替换相对应得值
/*@type{String}*/

function prinft(){
    var formatString=arguments[0];
    
    if (!formatString){
        console.error("参数不正确")
        retrun;
    }
    for(var i=1; ;i++){
        
        var index=formatString.indexOf("%");
        if(index==-1){
            break;
        }

        var typeChar=formatString.charAt(index+1);
        //console.log(typeChar);
        
        var replaceVar=arguments[i];
        
        switch(typeChar){
            case"s":
             if(typeof replaceVar!="string"){
                 console.warn("第"+i+"类型不匹配")
             }
             break;
            case"f":
                if(typeof replaceVar!="number"){
                    console.warn("第"+i+"类型不匹配")
                }
            break;
        }

        formatString=formatString.substring(0,index)+replaceVar+formatString.substr(index+2);
        
    } 
    
   document.write(formatString)
}
prinft("Hello %s，%f","world",100);

