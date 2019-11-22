var oCount2 = document.getElementById("count2");
var oSpans2 = document.getElementsByTagName("span");

var endTime2 = new Date('2020/09/21 00:00:00');

var timer2 = null;

clearInterval(timer2);
timer2 = setInterval(countTime2, 1000);

function countTime2() {
    var nowTime2 = new Date();
    var lastTime2 = parseInt((endTime2 - nowTime2) / 1000);

    if (lastTime2 >= 0) {
        var day2 = parseInt(lastTime2 / 60 / 60 / 24);
        var hour2 = parseInt(lastTime2 / 60 / 60 % 24);
        var min2 = parseInt(lastTime2 / 60 % 60);
        var sec2 = parseInt(lastTime2 % 60);

        oSpans2[8].innerHTML = day2;
        oSpans2[9].innerHTML = hour2;
        oSpans2[10].innerHTML = min2;
        oSpans2[11].innerHTML = sec2;
    } else {
        clearInterval(timer2);
    }
}
