/**
 * Created by sks on 2016/6/24.
 */

(function(){
    var str="[10:2A:B3:4D:38:31]"
     var a="10:2A:B3:4D:38:31".split(":");
    console.log(a);
    
    var b=" CurMonthConnectTime:86277";
    console.log(b.substr(0,20));
    
    
    var str="Hello World";
    console.log(str.replace(/o/g,"a"));
    
    var email="ss@ucai.cn";
    var p=/.*@.*\..*/;
    console.log(p.test(email));
   
    var str="Hello world Google Apple";
    var p=/.{5}\s/g;
    
    while(true){
        var result=p.exec(str);
        if(result){
            console.log(result);
        }else{
            break;
        }
    }

    var re = /\w+\s/g;
    var str = "fee fi fo fum";
    var myArray = str.match(re);
    console.log(myArray);


}());