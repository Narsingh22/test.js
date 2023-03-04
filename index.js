let printEvenNums = document.getElementById("print");

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let resultEl = document.getElementById("result");

let milimeter = document.getElementById("milimeter");
let centimeter = document.getElementById("centimeter");
let meter = document.getElementById("meter");
let centimeter2 = document.getElementById("centimeter2");

let givenArrEl = document.getElementById("givenArr");
givenArrEl.textContent = "[34, 438. 53. 35, 348, 25, 57]";
let sortedArrEl = document.getElementById("sortedArr");

let divisibleNum = document.getElementById("divisible-num");
let outputEl = document.getElementById("output");

function evenNums() {
    printEvenNums.textContent = "";
    for (let i = 0; i <= 10; i += 2) {
        printEvenNums.textContent += `${i} `;
    }
}

function multiply() {
    let sum = num1.value * num2.value;
    resultEl.textContent = ` = ${sum}`;
}

milimeter.addEventListener('input', function(){
    let milimeterToCentimeter = milimeter.value / 10;
    centimeter.value = milimeterToCentimeter;
});

centimeter.addEventListener('input', function(){
    let centimeterToMilimeter = centimeter.value * 10;
    milimeter.value = centimeterToMilimeter;
});

centimeter2.addEventListener('input', function(){
    let centimeterToMeter = centimeter2.value / 100;
    meter.value = centimeterToMeter;
});

meter.addEventListener('input', function(){
    let meterToCentimeter = meter.value * 100;
    centimeter2.value = meterToCentimeter;
});

function sort(){
    let arr = [34, 438, 53, 35, 348, 25, 57];
    sortingArrEl.textContent = arr.sort();
}

function divisible(){
    if(divisibleNum.value % 10 === 0){
        outputEl.textContent = true;
    }else{
        outputEl.textContent = false;
    }
}