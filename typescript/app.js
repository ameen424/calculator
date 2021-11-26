function add(n1, n2) {
    return n1 + n2;
}
var number1 = 5;
var number2 = 2.8;
var result = add(number1, number2);
console.log(result);
// if condition
function mul(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Incorrect input!');
    }
    return a * b;
}
var num1 = 86;
var num2 = 612;
var mult = mul(num1, num2);
console.log(mult);
