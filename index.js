let printEl = document.getElementById("print");
function evenNums() {
    for (let i = 0; i <= 10; i += 2) {
        printEl.textContent += (i) + " ";
    }
}

let inputEl1 = document.getElementById("input1");
let inputEl2 = document.getElementById("input2");
let resultEl = document.getElementById("result");

function sum() {
    let sum = inputEl1.value * inputEl2.value;
    resultEl.textContent = " " + "=" + sum;
}

let milimeter = document.getElementById("milimeter");
let centimeter = document.getElementById("centimeter");
let meter = document.getElementById("meter");
let cm = document.getElementById("cm");

milimeter.addEventListener('input', function(){
    let mm_cm = milimeter.value * 10;
    centimeter.value = mm_cm;
});

centimeter.addEventListener('input', function(){
    let cm_mm = centimeter.value / 10;
    milimeter.value = cm_mm;
});

cm.addEventListener('input', function(){
    let m_cm = cm.value * 100;
    meter.value = m_cm;
});

meter.addEventListener('input', function(){
    let m_cm = meter.value / 100;
    cm.value = m_cm;
});

let givenArrEl = document.getElementById("givenArr");
givenArrEl.textContent = "[34, 438. 53. 35, 348, 25, 57]";
let sortingArrEl = document.getElementById("sortingArr");

function sort(){
    let arr = [34, 438, 53, 35, 348, 25, 57];
    sortingArrEl.textContent = arr.sort();

}

let inputEl = document.getElementById("input-el");
let output = document.getElementById("return");

function divisible(){
    if(inputEl.value / 10){
        console.log(true);
    }else{
        console.log(false);
    }
}
inputEl.value = "";