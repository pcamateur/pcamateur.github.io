function getId() {
    var id = document.getElementById('input-number').value;
    return id;
}

function security_Check(id) {
    var tempId = id;
    var alertsm = document.getElementById('alerts-m');
    if(!(/(^\d{17}$)/.test(tempId))) {
        alertsm.innerHTML = 'The type is not supported!'                 
    } else if(!(datas.hasOwnProperty(tempId.slice(0, 6)))) {
        alertsm.innerHTML = 'The Area is Error!';
    } else if(tempId.slice(6, 10) < 1900 || tempId.slice(6, 10) > 2022) {
        alertsm.innerHTML = "The Year is Invalid!";
    } else if(tempId.slice(10, 12) > 12 || (tempId.slice(10, 11) == 0 && tempId.slice(11, 12) == 0)) {
        alertsm.innerHTML = "The Mouth is Invalid!";
    } else if(tempId.slice(12, 14) > 31 || (tempId.slice(12, 13) == 0 && tempId.slice(13, 14) == 0)) {
        alertsm.innerHTML = "The Days is Invalid!";
    } else if((tempId.slice(10, 11) == 0 && tempId.slice(11, 12) == 4) && tempId.slice(12, 14) > 30) {
        alertsm.innerHTML = "April only has 30 days!";
    } else if((tempId.slice(10, 11) == 0 && tempId.slice(11, 12) == 6) && tempId.slice(12, 14) > 30) {
        alertsm.innerHTML = "June only has 30 days!";
    } else if((tempId.slice(10, 11) == 0 && tempId.slice(11, 12) == 9) && tempId.slice(12, 14) > 30) {
        alertsm.innerHTML = "September only has 30 days!";
    } else if((tempId.slice(10, 11) == 0 && tempId.slice(11, 12) == 11) && tempId.slice(12, 14) > 30) {
        alertsm.innerHTML = "Novenber only has 30 days!";
    } else if((tempId.slice(10, 11) == 0 && tempId.slice(11, 12) == 2) && tempId.slice(12, 14) > 29 && (parseInt(tempId.slice(6, 10)) % 400 == 0 || (parseInt(tempId.slice(6, 10)) % 4 === 0 && parseInt(tempId.slice(6, 10)) % 100 !== 0))) {
        alertsm.innerHTML = "February is only 29 days in leap years";
    } else if((tempId.slice(10, 11) == 0 && tempId.slice(11, 12) == 2) && tempId.slice(12, 14) > 28 && (parseInt(tempId.slice(6, 10)) % 400 !== 0 || (parseInt(tempId.slice(6, 10)) % 4 !== 0 && parseInt(tempId.slice(6, 10)) % 100 === 0))) {
        alertsm.innerHTML = "February is only 28 days!";
    } else {
        var value = tempId;
    }

    return value;
} 


function test_show() {
    document.getElementById('alerts-m').innerHTML = '';
    document.getElementById('showings').innerHTML = "";
    // document.getElementById('showings').innerHTML = security_Check(getId());

    if(document.getElementById('showings').innerHTML = security_Check(getId()) == undefined) {
        document.getElementById('showings').innerHTML = "Error!";    
    } else {
        document.getElementById('showings').innerHTML = security_Check(getId())
    }
}

function clean_form() {
    document.getElementById("input-number").value = '';
    document.getElementById('alerts-m').innerHTML = '';
    document.getElementById('showings').innerHTML = "";

}