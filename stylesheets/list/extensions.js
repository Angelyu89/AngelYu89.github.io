/**
 * Created by sks on 2016/6/21.
 */
/**
 * Created by sks on 2016/6/21.
 */

(function(){
    Object.defineProperties(HTMLElement.prototype, {

        useCustomContextMenu: {

            get: function () {

                return this._useCustomContextMenu;
            },
            set: function (value) {
                this._useCustomContextMenu = value;

                if (this._useCustomContextMenu){
                    this.oncontextmenu = function (event) {

                        //preventDefault阻止默认
                        event.preventDefault();

                    if(this.customContextMenu){
                        this.customContextMenu.showMenu(event.clientX,event.clientY);}

                    }.bind(this);
                } else{

                    //移除监听器
                    this.oncontextmenu = null;
                }
            }
        },
        customContextMenu:{
            get:function(){
                return this._customContextMenu;
            },
            set:function(value){
                if(this._customContextMenu){
                    document.body.removeChild(this._customContextMenu);
                }

                this._customContextMenu=value;
                if(this._customContextMenu){
                    document.body.appendChild(this._customContextMenu.node);
                    this._customContextMenu.hide();
                }
            }
        }
    });
}());