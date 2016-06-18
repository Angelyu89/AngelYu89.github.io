(function () {
    function init() {
        var oEye = document.getElementsByClassName("d_eyeBorder");
        var oBall = document.getElementsByClassName("d_eyeBall");
        var oBorder = document.getElementById("d_border");
        var oBrown = document.getElementById("d_rightBrown");
        for (var i = 0; i < oEye.length; i++) {
            var obj = addApplication(oEye[i], oBall[i], oBorder);
            obj.rotateEyeBall();
        }
    }
    init();
    function addApplication(eye, ball, border, distance) {
        var eyeX = eye.getBoundingClientRect().left + parseInt(getComputedStyle(eye).width) / 2;
        var eyeY = eye.getBoundingClientRect().top + parseInt(getComputedStyle(eye).height) / 2;
        return {
            _ball: ball,
            _border: border,
            _distance: distance,
            get ball() {
                return this._ball;
            },
            get border() {
                return this._border;
            },
            eyeCenterX: eyeX,
            eyeCenterY: eyeY,
            rotateEyeBall: function () {
                var top, left, a, b, c;
                var that = this;
                this.border.addEventListener("mousemove", function (event) {
                    a = event.clientX - that.eyeCenterX;
                    b = event.clientY - that.eyeCenterY;
                    c = Math.sqrt(a * a + b * b);
                    if (c > 20) {
                        top = 25 + b / c * 20;
                        left = 25 + a / c * 20
                    }
                    else {
                        top = 25 + b;
                        left = 25 + a;
                    }
                    that.ball.style.top = top + "px";
                    that.ball.style.left = left + "px";
                });
            }
        }
    }
})();