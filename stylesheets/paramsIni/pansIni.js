/**
 * Created by sks on 2016/6/25.
 */


window.ucai=window.ucai||{};

(function(){

    /*
    * 根据Ini文件内容创建一个Ini对象
    * @param str{String}ini文件内容
    * @constructor
    * */

    function Ini(str){
        //获取所有[app]类型的
        var pNode=/\[(.*)\]/g;

        //获取所有name=ucai_app   k=v
        var pKv=/(.*)=(.*)/g;

        while(true){
            var result=pNode.exec(str);
            if(result){
                var nodeName=result[1];

                //创建一个新的对象
                this[nodeName]={};

                var startIndex=result.index+result[0].length;

                //截取[开始到下一个[之前
                var endIndex=str.indexOf("[",startIndex);
                
                //如果索引不到，则说明此节点是最后一个，所有将结束位置移动到字符串结尾
                if(endIndex==-1){
                    endIndex=str.length;
                }

                var nodeContent=str.substring(startIndex,endIndex);

                while(true){
                    var kvResult=pKv.exec(nodeContent);

                    if(kvResult){
                      // name=ucai_app  k就是name             k赋值      .trim()去掉首尾空格
                        this[nodeName][kvResult[1].trim()]=kvResult[2].trim();
                    }else{
                        break;
                    }
                }

            }else{
                break;
            }
        }
    }
    ucai.Ini=Ini;
}());
