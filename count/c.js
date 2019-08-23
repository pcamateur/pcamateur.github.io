var oCount = document.getElementById("count");
var oSpans = document.getElementsByTagName("span");

var endTime = new Date('2019/08/25 09:10:33');

var timer = null;

clearInterval(timer);
timer = setInterval(countTime,1000);

function countTime(){
    var nowTime = new Date();
    var lastTime = parseInt((endTime - nowTime)/1000);

    if (lastTime >= 0) {
        var day = parseInt(lastTime / 60 / 60 / 24);
        var hour = parseInt(lastTime / 60 / 60 % 24);
        var min = parseInt(lastTime / 60 % 60);
        var sec = parseInt(lastTime % 60);

        oSpans[0].innerHTML = day;
        oSpans[1].innerHTML = hour;
        oSpans[2].innerHTML = min;
        oSpans[3].innerHTML = sec;
    }

    else {
        clearInterval(timer);
    }
}



