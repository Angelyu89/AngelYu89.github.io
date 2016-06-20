/**
 * Created by sks on 2016/6/18.
 */

window.ucai=window.ucai||{};

(function(){
    function Human(name){
    this._name=name;

        Object.defineProperty(this,"name",{
            get:function(){
                return this._name;
            }
        });

        this.sayHello=function(){
            console.log(this.name+"say hello");
        }

    }
    ucai.Human=Human;

}());