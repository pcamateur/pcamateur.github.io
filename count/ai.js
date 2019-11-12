var oCunts = document.getElementById("countai");
var oSpanss = document.getElementsByTagName("span");

var startTimes = new Date('2004/11/14 21:30:00');

var timess = null;

clearInterval(timess);
timess = setInterval(countTimess, 1000);

function countTimess() {
    var nowTimess = new Date();
    var lastTimess = parseInt((nowTimess - startTimes) / 1000);

    if (lastTimess >= 0) {
        var daysa = parseInt(lastTimess / 60 / 60 / 24);
        var hoursa = parseInt(lastTimess / 60 / 60 % 24);
        var minsa = parseInt(lastTimess / 60 % 60);
        var secsa = parseInt(lastTimess % 60);
        var weeksa = parseInt(lastTimess / 60 / 60 / 24 / 7);
        var monthesa = parseInt(lastTimess / 60 / 60 / 24 / 30);
        var yearsa = parseInt(lastTimess / 60 / 60 / 24 / 365);

        oSpanss[23].innerHTML = yearsa;
        oSpanss[24].innerHTML = monthesa;
        oSpanss[25].innerHTML = weeksa;
        oSpanss[26].innerHTML = daysa;
        oSpanss[27].innerHTML = hoursa;
        oSpanss[28].innerHTML = minsa;
        oSpanss[29].innerHTML = secsa;

    } else {
        clearInterval(timess);
    }
}