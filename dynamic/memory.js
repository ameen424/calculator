// Fibonacci sequence

const fib = (n) => {
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
};

console.log(fib(6))
console.log(fib(7))
console.log(fib(8))
console.log(fib(10))


// this gives the fast output of numbers greater than 50  

const fib1 = (n , memo = {}) => {
    if (n in memo) return memo[n];
    if(n <= 2) return 1;
    memo[n] = fib1(n-1, memo) + fib1(n -2 , memo); 
    return memo[n];
};


// memo object store the data and helps to give fast response


console.log(fib1(50))
console.log(fib1(58))
console.log(fib1(62))
