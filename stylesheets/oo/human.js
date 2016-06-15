/**
 * Created by sks on 2016/6/15.
 */


(function(){

    function Human(name){
        var self={};

        self.name=name;

        self.sayhello=function(){
            console.log(self.name+"say hello");
        };

        //记录重写
        var superSayHello=self.sayhello;
        //函数重写
        self.sayhello=function(){
            //父类的重写函数
            superSayHello();

            console.log("学生"+self.name+"say hello");
        };


        return self;
    }
    window.Human=Human;

}());



