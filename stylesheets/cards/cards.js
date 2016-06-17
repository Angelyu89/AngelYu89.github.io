/**
 * Created by sks on 2016/6/17.
 */

(function(){
    function Card(front,back){
        var self={};
        self.front=front;
        self.back=back;

        self.getHtml=function(){
            return""+
                "<div class=\"card\">" +
                    " <div class=\"front face\">" +
                    "   <img src=\""+self.front+"\"/> " +
                    "</div>" +
                    " <div class=\"back face\">" +
                    "   <img src=\""+self.back+"\"/> " +
                    "</div>" +
                " </div>"
        }
        return self;
    }
        window.Card=Card;
}());