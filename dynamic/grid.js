const gridTraveler = (m,n) => {
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    return gridTraveler(m- 1,n) + gridTraveler(m, n-1);
};

console.log(gridTraveler(1,1));
console.log(gridTraveler(2,3));
console.log(gridTraveler(3,2));
console.log(gridTraveler(3,3));


// this produce fast output for number > 15


const gridTraveler1 = (a,b, memo = {}) => {
    const key = a + ',' + b ;

    if (key in memo) return memo[key];
    if (a === 1 && b === 1) return 1;
    if (a === 0 || b === 0) return 0;

    memo[key] = gridTraveler1 (a - 1, b, memo) + gridTraveler1(a, b - 1, memo);
    return memo[key];
};

console.log(gridTraveler1(18,18));
console.log(gridTraveler1(20,24));
console.log(gridTraveler1(4,24));
console.log(gridTraveler1(24,30));