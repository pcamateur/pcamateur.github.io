var oCunts = document.getElementById("countb");
var oSpans = document.getElementsByTagName("span");

var startTime = new Date('2018/09/21 21:30:00');

var times = null;

clearInterval(times);
times = setInterval(countTimes, 1000);

function countTimes() {
    var nowTimes = new Date();
    var lastTimes = parseInt((nowTimes - startTime) / 1000);

    if (lastTimes >= 0) {
        var days = parseInt(lastTimes / 60 / 60 / 24);
        var hours = parseInt(lastTimes / 60 / 60 % 24);
        var mins = parseInt(lastTimes / 60 % 60);
        var secs = parseInt(lastTimes % 60);
        var weeks = parseInt(lastTimes / 60 / 60 / 24 / 7);
        var monthes = parseInt(lastTimes / 60 / 60 / 24 / 30);
        var years = parseInt(lastTimes / 60 / 60 / 24 / 365);

        oSpans[16].innerHTML = years;
        oSpans[17].innerHTML = monthes;
        oSpans[18].innerHTML = weeks;
        oSpans[19].innerHTML = days;
        oSpans[20].innerHTML = hours;
        oSpans[21].innerHTML = mins;
        oSpans[22].innerHTML = secs;

    } else {
        clearInterval(times);
    }
}