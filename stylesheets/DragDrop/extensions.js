/**
 * Created by sks on 2016/6/24.
 */

(function(){
    
    Object.defineProperty(HTMLDivElement.prototype,"acceptDrop",{
        get:function(){
        return this._acceptDrop;
    },
    set:function(value){
        this._acceptDrop=value;
        
        if(this._acceptDrop){
            this.ondragover=function(e){
                e.preventDefault();
            };
            this.ondrop=function(e){
                var id=e.dataTransfer.getData("domId");
                this.appendChild(document.getElementById(id));

                //兼容多浏览器
                var node=(document.getElementById(id));
                node.parentNode.removeChild(node);
                this.appendChild(node);
            }
        }else{
            this.ondragover=null;
            this.ondrop=null;
        }
    }
    });
    
}());