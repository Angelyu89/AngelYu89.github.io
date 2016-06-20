/**
 * Created by sks on 2016/6/18.
 */

window.ucai=window.ucai||{};

(function(){
   function Human(name){
       return{
           _name:name,
           
           sayHello:function(){
               console.log(this.name+"say hello");
           },
           
           get name(){
               return this._name;
           }
       };
   } 
    window.ucai.Human=Human;
    
}());