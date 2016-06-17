/**
 * Created by sks on 2016/6/17.
 */

(function(){
    var img=[
        Card("img/001.jpg","img/002.jpg"),
        Card("img/003.jpg","img/004.jpg"),
        Card("img/005.jpg","img/006.jpg"),
        Card("img/007.jpg","img/009.jpg"),
        Card("img/010.jpg","img/011.jpg"),
        Card("img/008.jpg","img/012.jpg"),
        Card("img/014.jpg","img/015.jpg"),
        Card("img/016.jpg","img/017.jpg"),
        Card("img/018.jpg","img/019.jpg"),
        Card("img/020.jpg","img/021.jpg")
    ];

    function init(){
        var html="";
        img.forEach(function(item){
            html+=item.getHtml();
        });
        document.body.innerHTML=html;

    }

    init();
}());