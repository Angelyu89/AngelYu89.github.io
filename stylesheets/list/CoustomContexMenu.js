/**
 * Created by sks on 2016/6/21.
 */

window.ucai=window.ucai||{};

(function(){

    function CustomContextMenu(){
        this._node=document.createElement("div");
        this._node.style.position="fixed";
        this._node.style.backgroundColor="#ddd";

        this._ul=document.createElement("ul");
        this._node.appendChild(this._ul);
    }

    Object.defineProperty(CustomContextMenu.prototype,"node",{
        get:function(){
            return this._node;
        }
    });

    CustomContextMenu.prototype.addItem=function(item){
        this._ul.appendChild(item.node);
    };

    CustomContextMenu.prototype.showMenu=function(x,y){
        if(CustomContextMenu._currentMenu){
            
            CustomContextMenu._currentMenu.hide();
        }
     
            CustomContextMenu._currentMenu=this;
            this._node.style.display="block";
            this._node.style.left=x+"px";
            this._node.style.top=y+"px";

            document.onmouseup=function(event){
                if(event.button==0){
                    this.hide();
                }
            }.bind(this);

        };

        CustomContextMenu.prototype.hide=function(){
            this._node.style.display="none";
        };
        ucai.CustomContextMenu=CustomContextMenu;
    

}());