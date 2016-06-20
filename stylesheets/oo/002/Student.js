/**
 * Created by sks on 2016/6/18.
 */

window.ucai=window.ucai||{};

(function(){
    function Student(name){
        return{

            //继承Human(name)
            __proto__:ucai.Human(name),

            sayHi:function(){
                console.log(this.name+"say hi");
            },
            sayHello:function(){

                //原型this 被替换成sayHelle的this
                this.__proto__.sayHello.call(this);
                console.log(this.name+"说你好");
            }
        };
    }
    ucai.Student=Student;
}());