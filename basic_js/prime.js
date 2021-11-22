const is_prime = (num) => {
    for (let i = 2 ; i<num/2+1 ;i++){
        if( num %i ==0){
            return false;
        }
    }
    return true;
};
let primes = []
const calc = () =>{
let x = parseInt(document.getElementById("input1").value);
let b = parseInt(document.getElementById("input2").value);
for (let i = x; i < b; i++) {
    if (is_prime(i)) {
        console.log(i);
        primes.push(i)
         }
}
document.getElementById("output").innerHTML = primes.toString();
};