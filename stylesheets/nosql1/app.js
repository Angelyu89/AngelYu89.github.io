/**
 * Created by sks on 2016/7/2.
 */

(function(){
    window.Config={DB_NAME:"MyDB",DB_VERSION:1};

    //数据库的写入
    function Main(){
        this.connectDB(function(){
            this.writeData();
            //this.readData();
            
        }.bind(this));
    }

    Main.prototype.readData=function(){
        var trans=this._db.transaction("app");
        var os=trans.objectStore("app");

        //var req=os.getAll();
        var req=os.get("version");
        req.onsuccess=function(){
            console.log(req.result);
        };
        req.onerror=function(){
            console.error("读取失败");
        };

    };



     Main.prototype.writeData=function(){
        var trans=this._db.transaction("app","readwrite")//即读又写
        var os=trans.objectStore("app");
         
         var req;
         new Promise(function(receive,reject){
             req=os.put("My Application","name");
             req.onerror=reject;
             req.onsuccess=receive;
         }).then(function(event){
             console.log("成功写入应用名字");

             new Promise(function(receive,reject){
                 //req=os.add("1.0","version");
                 req=os.put("1.0","version");
                 req.onsuccess=receive;
                 req.onerror=reject;
             }).then(function(event){
                 console.log("成功写入应用版本");
             }).catch(function(error){
                 console.log(error);
             });
         }).catch(function(error){
             console.log(error);
         });
     };


    //创建数据库
    Main.prototype.connectDB=function(sucCallback){
           //打开数据库
            var req=indexedDB.open(Config.DB_NAME,Config.DB_VERSION);
            //贞听事件
            req.onerror=function(error){
                console.error(error);
            };
            req.onsuccess=function(){
               this._db=req.result;
                sucCallback();
            }.bind(this);
            req.onupgradeneeded=function(event){//绑定升级事件
               // console.log("event");
                //获取数据库对象
                //var db=req.result;

                //通过事件访问
                var db=event.target.result;
                var os=db.createObjectStore("app");//存储应用程序相关数据

                os.createIndex("naem","name");//传入名字  参数
                os.createIndex("version","version");
            };
    };


    new Main();
}());