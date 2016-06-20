/**
 * Created by sks on 2016/6/17.
 */


window.ucai=window.ucai||{};//命名空间
(function () {

    /* //  new 关键字实现原理示意
     function NewObject(Class) {
     var self = {};
     for (var k in Class.prototype) {
     self[k] = Class.prototype[k];
     }

     var args = [];
     for (var i = 1; i < arguments.length; i++) {
     args.push(arguments[i]);
     }

     Class.apply(self, args);
     return self;
     }
     */




function App() {

    //只调用Human函数的代码
    var h=new ucai.Human("张三");//ucai是新的对象
    h.sayHello();



    /*继承和重置用的代码*/
    var s=new ucai.Student("哈哈");
    s.sayHello();/*这句话输出两句，一句输出父级结果，一句输出当前结果 因为Human、Student文件里都有sayHello方法*/
    s.learn();//输出learn函数
}
new App();//这里调用App时加new是为了用this

}());

