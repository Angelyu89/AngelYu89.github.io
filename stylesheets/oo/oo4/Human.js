/**
 * Created by sks on 2016/6/17.
 */


window.ucai=window.ucai||{};//命名空间

(function () {

    function Human(name) {
        this._name=name;//这里的this相当于第一种面向对象中的self,是当前的对象，_name是对象的一个成员
    }
    Human.prototype.sayHello=function () {        //类中的原型prototype模板(创建构造函数)
        console.log(this._name+" say hello");
    };



    //运用get方法
    Object.defineProperty(Human.prototype,"name",{
        get:function () {
            return this._name;
        }
    });
    ucai.Human=Human;//把Human函数给ucai.Human
})();