/**
 * Created by sks on 2016/6/15.
 */

(function(){
    function Human(name){
        var self={};
        self.name=name;
        self.sayhello=function(){
            console.log(self.name+" say hello");
        };
        
        //记录父级
        var superSayHello=self.sayhello;
        
        //函数重写
        self.sayhello=function(){
            
            //执行父类函数
            superSayHello();
            //执行重写
            console.log("学生"+self.name+" say hello");
        };
        return self;
    }
    window.Human=Human;
}());



