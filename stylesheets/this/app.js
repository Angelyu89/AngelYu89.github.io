/**
 * Created by sks on 2016/6/18.
 */

//this默认为window

/*(function (){

    function A(){
        this.startTime=function(){
            var count=0;
            setInterval(function(){

                count++;
            console.log(count);
          //输出wondow 对象
          /!*  console.log(this);*!/
            },1000);
        };
        //此处的this没有被调用
        this.hello=function(){
            console.log("Hello");
        };
    }

    var a =new A();
    a.startTime();
    
}());*/




(function (){

    function A(){

            var count=0;
            this.trmerHandler=function(){
                count++;
                console.log(count);
                console.log(this);
            };
        
        this.startTime=function(){
            //bind(this)绑定函数的目标对象  次数的this是a
            setInterval(this.trmerHandler.bind(this),1000);
        };
        
        this.hello=function(){
            console.log("Hello");
        };

        }


    var a =new A();
    a.startTime();
    a.hello();

}());
