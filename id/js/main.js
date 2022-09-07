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

function idProccess(data) {
    const arr1 = new Array();
    const arr2 = new Array();
    let ids = data;

    let xsl = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];

    for(let i = 0; i < ids.length; i++) {
        arr1.push(parseInt(ids[i]));
    }
    for(let j = 0; j < xsl.length; j++) {
        arr2.push(arr1[j] * xsl[j]);
    }
    let temp_value = 0;
    for(let k = 0; k < arr2.length; k++) {
        temp_value += arr2[k];
    }

    let temp_value1 = temp_value % 11;

    const arr3 = [1, 0, "x", 9, 8, 7, 6, 5, 4, 3, 2, 1];

    let values = arr3[temp_value1];

    return ids + values;
}

function sexProccess(data) {
    let sex_value = data.slice(-1);

    if(sex_value % 2 == 0) {
        return 'Female';
    } else {
        return "Male";
    }
}

function bdProccess(data) {
    let years, month, days;
    years = data.slice(6, 10);
    month = data.slice(10, 12);
    days = data.slice(12, 14);

    return `${years} - ${month} - ${days}`;
}

function localProccess(datas, jf) {
    let query_source = datas.slice(0, 6);
    let pr, ci;

    pr = query_source.slice(0, 2) + "0000";
    let provice = jf[pr];

    ci = query_source.slice(0, 4) + "00";
    let city = jf[ci];

    let district = jf[query_source];

    return provice + city + district;
}

function constellationProccess(datas) {
    const constellation_list = [
        'Capricorn',
        'Aquarius',
        'Pisces',
        'Aries',
        'Taurus',
        'Gemini',
        'Cancer',
        'Leo',
        'Virgo',
        'Libra',
        'Scorpio',
        'Sagittarius'
    ]

    const constellation_days = [
        [1, 20],
        [2, 19],
        [3, 21],
        [4, 21],
        [5, 21],
        [6, 22],
        [7, 23],
        [8, 23],
        [9, 23],
        [10, 23],
        [11, 23],
        [12, 23]
    ]

    let months = parseInt(datas.slice(10, 12));
    let days = parseInt(datas.slice(12, 14));

    let birthday = [months, days];

    for(let i = 0; i < constellation_days.length; i++) {
        if(birthday < constellation_days[i]) {
            var temps1 = constellation_days.indexOf(constellation_days[i]);
        }
    }

    return constellation_list[temps1];
}

function zodiacSignsProccess(datas) {
    zodiac_signs_list = [
        'Monkey',
        'Rooster',
        'Dog',
        'Pig',
        'Rat',
        'Cattle',
        'Tiger',
        'Rabbit',
        'Dragon',
        'Snake',
        'Horse',
        'Goat'
    ]

    let years = parseInt(datas.slice(6, 10));
    let values = years % 12;

    return zodiac_signs_list[values];
}

function ages(datas) {
    let now = new Date();
    let nowYears = now.getFullYear();
    let nowMonth = now.getMonth() + 1;
    let nowDay = now.getDate();

    let bYears = parseInt(datas.slice(6, 10));
    let bMonth = parseInt(datas.slice(10, 12));
    let bDay = parseInt(datas.slice(12, 14));


    if(nowMonth < bMonth) {
        return (parseInt(nowYears) - parseInt(bYears)) - 1;
    } else if(nowMonth == bMonth && nowDay < bDay) {
        return (parseInt(nowYears) - parseInt(bYears)) - 1;
    } else if(nowMonth == bMonth && nowDay >= bDay) {
        return parseInt(nowYears) - parseInt(bYears);
    } else {
        return parseInt(nowYears) - parseInt(bYears);
    }

}

function test_show() {
    document.getElementById('alerts-m').innerHTML = '';
    document.getElementById('showings').innerHTML = "";
    // document.getElementById('showings').innerHTML = security_Check(getId());

    if(idProccess(security_Check(getId())) === undefined) {
        document.getElementById('showings').innerHTML = "Error!";    
    } else {
        document.getElementById('showings').innerHTML = idProccess(security_Check(getId()));
        document.getElementById('show-sex').innerHTML = "Sexual: " + sexProccess(security_Check(getId()));
        document.getElementById('show-birthday').innerHTML = "Birthday: " + bdProccess(security_Check(getId()));
        document.getElementById('show-address').innerHTML = "Address: " + localProccess(security_Check(getId()), datas);
        document.getElementById('show-constellation').innerHTML = "Constellation: " + constellationProccess(security_Check(getId()));
        document.getElementById('show-zodiac').innerHTML = "Zodiac Signs: " + zodiacSignsProccess(security_Check(getId()));
        document.getElementById('show-age').innerHTML = "Age: " + ages(security_Check(getId()));
    }
}

function clean_form() {
    document.getElementById("input-number").value = '';
    document.getElementById('alerts-m').innerHTML = '';
    document.getElementById('showings').innerHTML = "";

}