let is_prime =(num)=>{
    for(let i=2;i<num;i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
};

num1 =1;
num2 = 100;
console.log(`Twin Prime between ${num1} and ${num2}`);
for(let j=num1;j<num2-1;j++){
    if(is_prime(j)&&is_prime(j+2)){
        console.log(`[${j},${j+2}]`);
    }
}