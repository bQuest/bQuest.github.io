"use strict"

var rudyTimer = (function () {
    alert('yea');
    let timer = null;// stores ID of interval timer 
    function delayMsg2() {
        if (timer === null) {
            timer = setInterval(rudy, 1000);
        } else {
            clearInterval(timer);
            timer = null;
        }
    }
    function rudy() {// called each time the timer goes off
        document.getElementById("output").innerHTML += " Rudy!";
    }
})();


x = 1;
var a = 5; var b = 10;
var c = function (a, b, c) {
    var x = 10; document.write(x); document.write(a);
    var f = function (a, b, c) {
        b = a;
        document.write(b);
        b = c;
        var x = 5;
    }
    f(a, b, c);
    document.write(b);
}
c(8, 9, 10);
document.write(b);
document.write(x);  

var person = { name: "fred", major: "music", fun: (x, y) => { if (x < y) return x; else return Math.Square(x); } };
