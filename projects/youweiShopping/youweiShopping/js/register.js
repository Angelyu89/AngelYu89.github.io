/**
 * Created by sks on 2016/8/4.
 */
(function () {
    var beizhuce = document.querySelector("#beizhuce");
    var chenggongzhuce = document.querySelector("#chenggongzhuce");
    var tianxieshoujihaoma = document.querySelector("#tianxieshoujihaoma");
    var mimabuyiyang = document.querySelector("#mimabuyiyang");
    var mimataiduan = document.querySelector("#mimataiduan");
    var identifyingCodeA=document.querySelector("#identifyingCodeA");
    var passA=document.querySelector("#passA");
    var  yanzhengmabudui=document.querySelector("#yanzhengmabudui");
    var shoujihao = document.querySelector("#identifyingCode");
    var shezhimingma = document.querySelector("#telNum");
    var querenmima = document.querySelector("#pass");
    $("#Login").bind("click", function () {
        var user = getuser();
        console.log(identifyingCodeA.innerHTML);
        if (shoujihao.value.length <= 1) {
            tianxieshoujihaoma.style.display = "block";
            setTimeout(function () {
                tianxieshoujihaoma.style.display = "none";
                shezhimingma.value = "";
                querenmima.value = "";
                shoujihao.value = "";
            }, 2000);
        } else {
            if (shezhimingma.value.length < 6) {
                mimataiduan.style.display = "block";
                setTimeout(function () {
                    mimataiduan.style.display = "none";
                    shezhimingma.value = "";
                    querenmima.value = "";
                    shoujihao.value = "";
                }, 2000)

            }
            else {
                if (shezhimingma.value != querenmima.value) {
                    mimabuyiyang.style.display = "block";
                    setTimeout(function () {
                        mimabuyiyang.style.display = "none";
                        shezhimingma.value = "";
                        querenmima.value = "";
                        shoujihao.value = "";
                    }, 2000)
                }
                else {
                    if(identifyingCodeA.innerHTML.toUpperCase()!=passA.value.toUpperCase()){
                        yanzhengmabudui.style.display = "block";
                        setTimeout(function () {
                            yanzhengmabudui.style.display = "none";
                            shezhimingma.value = "";
                            querenmima.value = "";
                            shoujihao.value = "";
                        }, 2000)
                    }else {
                        $.get("http://datainfo.duapp.com/shopdata/userinfo.php", {
                            status: "register",
                            userID: user.userID,
                            password: user.password
                        }, function (data) {
                            console.log(data);
                            if (data == 0) {
                                beizhuce.style.display = "block";
                                setTimeout(function () {
                                    beizhuce.style.display = "none";
                                    shezhimingma.value = "";
                                    querenmima.value = "";
                                    shoujihao.value = "";
                                }, 2000);

                            }
                            if (data == 1) {
                                chenggongzhuce.style.display = "block";
                                //console.log(user.userID,user.password);
                                window.sessionStorage.setItem("CU",user.userID);
                                setTimeout(function () {
                                    chenggongzhuce.style.display = "none";
                                    shezhimingma.value = "";
                                    querenmima.value = "";
                                    shoujihao.value = "";
                                }, 2000);
                                setTimeout(function () {
                                    window.location.href="../html/Login.html";
                                },2200)

                            }

                        })
                    }


                }

            }

        }


    });
    function getuser() {
     //   console.log(">>>");
        var user = {
            userID: $("#identifyingCode").val(),
            password: $("#telNum").val()
        };
        return user;
    }


})();