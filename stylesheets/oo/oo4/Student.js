/**
 * Created by sks on 2016/6/17.
 */


window.ucai=window.ucai||{};////命名空间

(function () {

    function Student(name) {
        ucai.Human.call(this,name);//Human替换了当前的（this name）
    }
    
    //继承自Human
    Student.prototype=new ucai.Human();//创建新对象模型

    Student.prototype.learn=function () {   //新对象模型中的learn方法
        console.log(this.name+"学习");
    };

//重置
    Student.prototype.sayHello=function () {
        
        ucai.Human.prototype.sayHello.call(this);//执行父类的函数,把当前的变量值给父级Human
        console.log(this.name+" 说你好");//当前的值  说你好
    };


    window.ucai.Student=Student;
})();