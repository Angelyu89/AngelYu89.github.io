/**
 * Created by sks on 2016/6/25.
 */

window.ucai=window.ucai||{};

(function(){

    function Song(file){
        this._file=file;
        this._li=document.createElement("li");
        this._a=document.createElement("a");
        this._a.href="#";
        this._a.innerHTML=file.name;

        this._li.appendChild(this._a);

        this.addListeners();
    }

    Song.prototype.addListeners=function(){
        (function(self){
            self._a.onclick=function(){
                if(self.onselect){
                    self.onselect(self._file);
                }
            }
        })(this);
    };
    
    Object.defineProperty(Song.prototype,"node",{
        get:function(){
            return this._li;
        }
    });
    
    Object.defineProperty(Song.prototype,"onselect",{
        get:function(){
            return this._onselect;
        },
        set:function(value){
            this._onselect=value;
        }
    });

    ucai.Song=Song;
}());