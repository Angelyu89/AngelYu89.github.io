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
                    }
                } else{

                    //移除监听器
                    this.oncontextmenu = null;
                }
            }
        }
    });
}());