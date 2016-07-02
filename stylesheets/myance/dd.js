/**
 * Created by sks on 2016/7/2.
 */

(function(){
    window.Config={DB_NAME:"MyDB",DB_VERSION:1};

    function Main(){
        this.getElements();
        this.addListeners();


       this.connectDB(function(){
           this.readData();
       }.bind(this));
    }

    //删除数据库
    Main.prototype.getElements=function(){
        this._usersContainer=document.getElementById("userscontainer");
        this._msgDiv=document.getElementById("msg");
        this._form=document.getElementById("form");
        this._btnDeleteDb=document.getElementById("btndeldb");

    };

    //写入数据库
    Main.prototype.addListeners=function(){
        this._btnDeleteDb.onclick=function(){
            var req=indexedDB.deleteDatabase(Config.DB_NAME);
            req.onerror=function(){
                this._msgDiv.innerHTML="删除数据库失败";
            }.bind(this);
            req.onsuccess=function(){
                this._msgDiv.innerHTML="删除数据库成功";
            }.bind(this);
        }.bind(this);

       this._form.onsubmit=function(event){
          // console.log(this._form["name"].value,this._form["age"].value);

           var trans=this._db.transaction("users","readwrite");
           var os=trans.objectStore("users");
           var req=os.put({name:this._form["name"].value,age:this._form["age"].value});
           req.onerror=function(){
               this._msgDiv.innerHTML="保存数据失败";
           }.bind(this);
           req.onsuccess=function(){
               this._msgDiv.innerHTML="保存数据成功";

               this._form["name"].value="";
               this._form["age"].value="";
           }.bind(this);
           event.preventDefault();
       }.bind(this);
    };

    //将数据呈现到控制台
    Main.prototype.readData=function(){
        var trans=this._db.transaction("users");
        var os=trans.objectStore("users");

        var req=os.getAll();
        req.onsuccess=function(event){
            this._usersContainer.innerHTML=this.createTableHTMLByData(event.target.result);
        }.bind(this);
        req.onerror=function(){
            this._msgDiv.innerHTML="获取数据失败";
        }.bind(this);
    };

    //生成html列表
    Main.prototype.createTableHTMLByData=function(data){
        //创建html
        var html="<table border='1' cellspacing='0'><tr><th>用户名</th><th>年龄</th></tr>";

        for(var i=0;i<data.length;i++){
            var item=data[i];
           html+="<tr><td>"+item.name+"</td><td>"+item.age+"</td></tr>";

        }
        html+="</table>";
        return html;
    };



    //写入函数
    Main.prototype.connectDB=function(sucCallback){
        var req=indexedDB.open(Config.DB_NAME,Config.DB_VERSION);
        req.onsuccess=function(){
            this._db=req.result;
            console.log("连接数据库成功");

            if(sucCallback){
                sucCallback();
            }
        }.bind(this);
        req.onerror=function(event){
            console.error(event);
        };
        req.onupgradeneeded=function(event){
            var db=req.result;
           //(创建组建的类,创建自增)
            var os=db.createObjectStore("users",{keyPath:"ID",autoIncrement:true});

            os.createIndex("name","name");
            os.createIndex("age","age");
        }
    };
    new Main();
}());