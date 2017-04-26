
  function preImage(el) {
        var pv = document.getElementById("imgArea");
        var fr = new FileReader();
        fr.onload = function(evt){
            var pvImg = new Image();
            pvImg.style.width = pv.offsetWidth + 'px';
            pvImg.style.height = pv.offsetHeight + 'px';
            pvImg.src = evt.target.result;
//            pv.parentNode.removeChild();
            if(pv.childNodes && pv.childNodes.length >0){
                pv.removeChild(pv.childNodes[0]);
            }
            pv.appendChild(pvImg);
        };
        fr.readAsDataURL(el.files[0]);
    }
  

  function preImage2(el) {
        var pv = document.getElementById("imgArea1");
        var fr = new FileReader();
        fr.onload = function(evt){
            var pvImg = new Image();
            pvImg.style.width = pv.offsetWidth + 'px';
            pvImg.style.height = pv.offsetHeight + 'px';
            pvImg.src = evt.target.result;
//            pv.parentNode.removeChild();
            if(pv.childNodes && pv.childNodes.length >0){
                pv.removeChild(pv.childNodes[0]);
            }
            pv.appendChild(pvImg);
        };
        fr.readAsDataURL(el.files[0]);
    }