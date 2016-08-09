/**
 * Created by sks on 2016/8/2.
 */

//音乐
(function () {
    function Main() {
        // var musbtn = document.getElementById("musbtn");
        var musbtn = document.getElementsByClassName("music_btn")[0];
        var audio = document.getElementById("audio");
        var i = 0;
        console.log(audio);
        musbtn.onclick = function () {
            if (i == 0) {
                audio.pause();
                musbtn.style.background = "url(img/musicBtnOff.png)";
                musbtn.style.backgroundSize = "100% 100%";
                musbtn.style.animation = "none";
                i = 1;

            } else {
                audio.play();
                musbtn.style.background = "url(img/musicBtn.png)";
                musbtn.style.backgroundSize = "100% 100%";
                musbtn.style.animation = "rotate1 3s linear infinite";
                i = 0;
            }
        }

    }

    new Main();

})();