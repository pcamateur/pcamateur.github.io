function t1(dim) {
    return dim * 166
}

function t2(qua, dim) {
    const arr = new Array();

    for (let x = 10; x <= 200; x++) {
        for (let y = x; y <= 200; y++) {
            for (let z = y; z <= 200; z++) {
                let dw = x * y * z * qua / 6000;

                if (dw - dim < 2 && dim - dw < 2) {
                    arr.push(['('+x+'*'+y+'*'+z+')']);
                }
            }
        }
    }

    return arr;
}

let qua = document.getElementById('quantity').value;
let dim = document.getElementById('dimension').value;


function shows() {
    let qua = document.getElementById('quantity').value;
    let dim = document.getElementById('dimension').value;
    return document.getElementById('show-1').innerHTML = t2(qua, t1(dim));
}

function cleans() {
    document.getElementById('quantity').innerHTML = '';
    document.getElementById('quantity').innerHTML = '';
}



// console.log(t2(qua, t1(dim)));