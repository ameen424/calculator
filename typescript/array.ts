let sam:any[] = ['prince','jack','ameen'];


for(let j of sam){
    console.log(j.toUpperCase());
}


let act :any[]
act = ['mack',24,4,565,'qualified'];

act.push('btech');
act.pop()

act.unshift("final year");

console.log(act);


// Sorting
let num:number[] =[12,24,1,3,5,45,47,9,7];
num.sort((a, b) => a - b);
console.log(num);
console.log(num.length)
