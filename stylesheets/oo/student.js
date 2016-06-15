/**
 * Created by sks on 2016/6/15.
 */
//继承



(function(){
    //Student是定义的类
    function Student(name){
        var self=Human(name);
        self.learn=function(){
            console.log(self.name+"学习");
        }
        return self;
    }
    window.Student=Student;
}());