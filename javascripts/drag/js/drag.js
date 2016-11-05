
(function(){
    var dnd={
        //初始化
        init:function(){
            var me=this;
            me.src=document.querySelector("#demo1-src");
            me.panelList=document.querySelector(".panel-list");

            //为拖拽源监听dragstart,设置关联数据
            me.src.addEventListener("dragstart",me.onDragStart,false);

            //拖拽鼠标移入元素，在拖放目标上设置视觉反馈
            me.panelList.addEventListener("dragenter",me.onDragEnter,false);

            //取消元素dragover默认行为，使其可拖放
            me.panelList.addEventListener("dragover",me.onDragOver,false);

            //拖拽移出元素，清除视觉反馈
            me.panelList.addEventListener("dragleave",me.onDragLeave,false);

            //鼠标释放，在拖放目标上接收数据并处理
            me.panelList.addEventListener("drop",me.onDrop,false);
        },
        onDragStart:function(e){
            e.dataTransfer.setData("text/plain","demo1-src");
        },
        onDragEnter:function(e){
            if(e.target.classList.contains("panel-item")){
                e.target.classList.add("over");
            }
        },
        onDrageLeave:function(e){
            if(e.target.classList.contains("panel-item")){
                e.target.classList.remove("over");
            }
        },
        onDragOver:function(e){
            e.preventDefault();
        },
        onDrop:function(e){
            var id=e.dataTransfer.getData("text/plain");
            var src=document.getElementById(id);
            var target=e.target;
            if(target.classList.contains("panel-item")){
                target.appendChild(src);
                target.classList.remove("over");
            }
        }
    };
    dnd.init();

}());

(function(w){
    var doc=w.document;
    
    var dnd={
        init:function(){
            var me=this;
            var preview=doc.querySelector("#demo2 .preview");
            
            preview.addEventListener("dragover",function(e){
                e.preventDefault();
            },false);
            preview.addEventListener("drop",function(e){
                //操作系统拖放文件到浏览器需要取消默认行为
                e.preventDefault();
                
                [].forEach.call(e.dataTransfer.files,function(file){
                    if(file&&file.type.match("image.*")){
                        var reader=new FileReader();
                        
                        reader.onload=function(e){
                            var img=doc.createElement("img");
                            img.src=e.target.result;
                            var li=doc.createElement("li");
                            li.appendChild(img);
                            preview.appendChild(li);
                        };
                        reader.readAsDataURL(file);
                    }
                });
            },false);
        }
    };
    dnd.init();
}(window));