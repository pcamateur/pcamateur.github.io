// const arr1 = new Array();
// const arr2 = new Array();
// let ids = "21010219830825181";
//
// let xsl = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
// for(let i = 0; i < ids.length; i++) {
//     arr1.push(parseInt(ids[i]));
// }
// for(let j = 0; j < xsl.length; j++) {
//     arr2.push(arr1[j] * xsl[j]);
// }
// let temp_value = 0;
// for(let k = 0; k < arr2.length; k++) {
//     temp_value += arr2[k];
// }
//
// temp_value1 = temp_value % 11;
//
// arr3 = [1, 0, "x", 9, 8, 7, 6, 5, 4, 3, 2, 1];
//
// values = arr3[temp_value1];
//
// console.log(ids + values);



// const arrs = new Array();
// for(let a = 1; a <= 10; a++) {
//     arrs.push(a);
// }
// console.log(arrs);
// let tvalue = 0;
// for(let b = 1; b < arrs.length; b += 2) {
//     tvalue = arrs[b - 1] + arrs[b] + tvalue;
// }
// console.log(tvalue);
// let tv2 = 0;
// for(let c = 0; c < arrs.length; c++) {
//     tv2 += arrs[c]
// }
// console.log(tv2);

// const arra = new Array();
// for(let d = 1; d < 17; d++) {
//     arra.push(d);
// }
//
// console.log(arra);
// console.log(arra.slice(-1));


// const arra = [[2, 19], [3, 16], [3, 17], [3, 18], [3, 19]];
// const arrb = [3, 18];
//
// for(let i = 0; i < arra.length; i++) {
//     if(arrb < arra[i]) {
//         console.log(arra.indexOf(arra[i]));
//     }
// }

// function constellationProccess(datas) {
//     const constellation_list = [
//         'Capricorn',
//         'Aquarius',
//         'Pisces',
//         'Aries',
//         'Taurus',
//         'Gemini',
//         'Cancer',
//         'Leo',
//         'Virgo',
//         'Libra',
//         'Scorpio',
//         'Sagittarius'
//     ]
//
//     const constellation_days = [
//         [1, 20],
//         [2, 19],
//         [3, 21],
//         [4, 21],
//         [5, 21],
//         [6, 22],
//         [7, 23],
//         [8, 23],
//         [9, 23],
//         [10, 23],
//         [11, 23],
//         [12, 23]
//     ]
//
//     let months = parseInt(datas.slice(10, 12));
//     let days = parseInt(datas.slice(12, 14));
//
//     let birthday = [months, days];
//
//     for(let i = 0; i < constellation_days.length; i++) {
//         if(birthday < constellation_days[i]) {
//             var temps1 = constellation_days.indexOf(constellation_days[i]);
//         }
//     }
//
//     return constellation_list[temps1];
// }
//
// console.log(constellationProccess('21010219830825181'));

// function zodiacSignsProccess(datas) {
//     zodiac_signs_list = [
//         'Monkey',
//         'Rooster',
//         'Dog',
//         'Pig',
//         'Rat',
//         'Cattle',
//         'Tiger',
//         'Rabbit',
//         'Dragon',
//         'Snake',
//         'Horse',
//         'Goat'
//     ]
//
//     let years = parseInt(datas.slice(6, 10));
//     let values = years % 12;
//
//     return zodiac_signs_list[values];
//
// }
//
// console.log(zodiacSignsProccess('21010219830825181'));

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

console.log(ages("21010219830925181"));