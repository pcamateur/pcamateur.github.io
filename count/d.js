var oCount1 = document.getElementById("count1");
var oSpans1 = document.getElementsByTagName("span");

var endTime1 = new Date('2020/07/31 00:00:00');

var timer1 = null;

clearInterval(timer1);
timer1 = setInterval(countTime1, 1000);

function countTime1() {
    var nowTime1 = new Date();
    var lastTime1 = parseInt((endTime1 - nowTime1) / 1000);

    if (lastTime1 >= 0) {
        var day1 = parseInt(lastTime1 / 60 / 60 / 24);
        var hour1 = parseInt(lastTime1 / 60 / 60 % 24);
        var min1 = parseInt(lastTime1 / 60 % 60);
        var sec1 = parseInt(lastTime1 % 60);

        oSpans1[4].innerHTML = day1;
        oSpans1[5].innerHTML = hour1;
        oSpans1[6].innerHTML = min1;
        oSpans1[7].innerHTML = sec1;
    } else {
        clearInterval(timer1);
    }
}