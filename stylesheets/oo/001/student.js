/**
 * Created by sks on 2016/6/15.
 */
//继承

(function(){
    //Student是定义的类（类第一个字母大小，函数第一个字母小写）
    function Student(name){
        
        var self=Human(name);
        
        self.learn=function(){
            console.log(self.name+"学习");
        }
        return self;
    }
    window.Student=Student;
}());