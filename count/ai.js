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

        oSpans[23].innerHTML = years;
        oSpans[24].innerHTML = monthes;
        oSpans[25].innerHTML = weeks;
        oSpans[26].innerHTML = days;
        oSpans[27].innerHTML = hours;
        oSpans[28].innerHTML = mins;
        oSpans[29].innerHTML = secs;

    } else {
        clearInterval(times);
    }
}