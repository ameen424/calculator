"use strict";
function var1(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
const num1 = 10;
const num2 = 24.4;
const printResult = true;
const resultPhrase = 'Result is : ';
var1(num1, num2, printResult, resultPhrase);
