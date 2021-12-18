"use strict";
function add(n1, n2) {
    return n1 + n2;
}
let number1 = 5;
let number2 = 2.8;
let result = add(number1, number2);
console.log(result);
// if condition
function mul(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Incorrect input!');
    }
    return a * b;
}
const num1 = 86;
const num2 = 612;
const mult = mul(num1, num2);
console.log(mult);
