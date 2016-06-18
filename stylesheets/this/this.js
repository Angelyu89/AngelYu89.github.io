/**
 * Created by sks on 2016/6/18.
 */

//this关键字

(function(){

    function A(){
        //执行的任然是window对象
        console.log(this);
        this.Hello=function(){

            console.log("Hello");
        }
    }
    
   // var a=new A();执行A没有输出
    A();//执行Hello
    Hello();
}());