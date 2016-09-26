/**
 * Created by sks on 2016/8/8.
 */
(function () {
    this.quit=document.querySelector("#quit");
    this.quit.addEventListener("click",function () {
        window.sessionStorage.setItem("CU","");
        window.location.href="../html/Login.html";
    })
})();