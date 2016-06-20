/**
 * Created by sks on 2016/6/18.
 */

//prototype关键字（使您有能力向对象添加属性和方法。）

window.ucia=window.ucai||{};

(function(){
    function Student(name){
        //将Humande 值给了Student
        ucai.Human.call(this,name)
        
            var superSayHello=this.sayHello;
        
            this.sayHello=function(){
                console.log(this.name+"说你好");
            };
            this.sayHi=function(){
                this.sayHello();
            }
    }

    //将ucai.Human的值给了Studnet
    Student.prototype=new ucai.Human();
    ucai.Student=Student;
    
}());