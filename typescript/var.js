function var1(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var num1 = 10;
var num2 = 24.4;
var printResult = true;
var resultPhrase = 'Result is : ';
var1(num1, num2, printResult, resultPhrase);
