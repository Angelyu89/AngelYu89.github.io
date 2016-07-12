/**
 * Created by sks on 2016/7/12.
 */
(function(){
    var cols=[];
    var COL_COUNT=6;
    var COL_WIDTH=200;
    var container;
    var imageUrls=[];
    var imageIndex=0;

    function initImageUrls(){
        for(var i=0;i<30;i++){
            imageUrls.push("img/01.png","img/2.jpg","img/002.jpg","img/02.png","img/03.png","img/04.png","img/005.jpg","img/05.png",
                "img/006.jpg","img/06.png","img/007.jpg","img/07.png","img/010.jpg","img/11.png","img/016.jpg","img/017.jpg","img/018.jpg",
                "img/020.jpg","img/022.jpg","img/111.jpeg"
            );
        }
    }
    function addCols(){
        for(var i=0;i<COL_COUNT;i++){
            var div=document.createElement("div");
            div.style.width=COL_WIDTH+"px";
            div.style.float="left";
            div.style.padding="20px";
            container.appendChild(div);
            cols.push(div);
        }
    }
    function findElements(){
        container=document.getElementById("container");
        container.style.width="1500px";
    }

    function getMinHeightCol(){
        var min=cols[0];

        for(var i=1;i<cols.length;i++){
            if(cols[i].clientHeight<min.clientHeight){
                min=cols[i];
            }
        }
        return min;
    }
    function addImage(){
        var img=document.createElement("img");
        img.onload=function(){
            getMinHeightCol().appendChild(img);
            img.style.padding="20px";
            imageIndex++;
            if(imageIndex<imageUrls.length){
                addImage();
            }
        };
        img.width=COL_WIDTH;
        img.src=imageUrls[imageIndex];
    }

    function addImages(){
        imageIndex=0;
        addImage();
    }

    function init(){
        initImageUrls();
        findElements();
        addCols();
        addImages();
    }
    init();
}());