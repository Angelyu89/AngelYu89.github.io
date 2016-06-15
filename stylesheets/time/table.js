/**
 * Created by sks on 2016/6/15.
 */

(function(){
    var currentTable;
    var reverse=true;

    var students=[
        {name:"ZhangSan",score:80},
        {name:"Ucai",score:90},
        {name:"LiSi",score:70},
        {name:"Fcai",score:30},
        {name:"CiSi",score:60}
    ];

    //排序
    function srotFunction(a,b){
        if(reverse){
            return a.score>b.score;
        }else{
            return a.score<b.score;
        }

    }

    function linkSortBySoreClickedHeadler(){
        //TODO implement this function
        //排序翻转
        students.sort(srotFunction);
        reverse=!reverse;

        addTableToBody();
    }


//添加标题
function createTableHeader(){
    //创建表头
    var tr=document.createElement("tr");
    var th=document.createElement("th");
    th.innerHTML="姓名";
    tr.appendChild(th);

    th=document.createElement("th");
    var a=document.createElement("a");
    a.href="#";
    a.innerHTML="分数";
    //创建函数（列表头）
    a.onclick=linkSortBySoreClickedHeadler;
    th.appendChild(a);
    tr.appendChild(th);
    return tr;
}
function createTableRow(student){
    var tr=document.createElement("tr");
    var td=document.createElement("td");

    td.innerHTML=student.name;
    tr.appendChild(td);

    td=document.createElement("td");
    td.innerHTML=student.score;
    tr.appendChild(td);

    return tr;
}




//添加table
function createTable(){
    /*
     * @type{HTML TableElement}
     *
     * */
    var table=document.createElement("table");
    table.border=1;
    table.appendChild(createTableHeader());

    students.forEach(function(item){
        table.appendChild(createTableRow(item));
    })
    return table;
}

    function addTableToBody() {
        if (currentTable) {
            document.body.removeChild(currentTable);
        }
        currentTable = createTable();
        document.body.appendChild(currentTable);
    }

function init(){
    addTableToBody();
}
    init();
}());