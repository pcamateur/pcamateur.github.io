var oCount3 = document.getElementById("count3");
var oSpans3 = document.getElementsByTagName("span");

var endTime3 = new Date('2024/11/14 00:00:00');

var timer3 = null;

clearInterval(timer3);
timer3 = setInterval(countTime3, 1000);

function countTime3() {
    var nowTime3 = new Date();
    var lastTime3 = parseInt((endTime3 - nowTime3) / 1000);

    if (lastTime3 >= 0) {
        var day3 = parseInt(lastTime3 / 60 / 60 / 24);
        var hour3 = parseInt(lastTime3 / 60 / 60 % 24);
        var min3 = parseInt(lastTime3 / 60 % 60);
        var sec3 = parseInt(lastTime3 % 60);

        oSpans3[12].innerHTML = day3;
        oSpans3[13].innerHTML = hour3;
        oSpans3[14].innerHTML = min3;
        oSpans3[15].innerHTML = sec3;
    } else {
        clearInterval(timer3);
    }
}