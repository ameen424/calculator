//print the numbers upto the range
var j = 0;
for (; j < 9; j++) {
    console.log(j);
    // more statements
}

//print the even values upto the range
let i=0;
console.log("Even numbers : ")
for (;i<100;i++) {
  if (i%2 == 0 )
    console.log(i);
}
console.log("odd numbers : ")
for (i=0;i<100;i++){
  if(i%2 != 0)
    console.log(i);   
  
}

//print each element in the given list
let list = ['a', 'b', 'c','d','e','jack','mark'];
for (let k= 0; k< list.length; k++) {
  console.log(list[k])
}


// print the elements upto length of array
let arr =[10,11,12,13,14,15]
for (a=0; ; ) {
  if(a >= arr.length)
  break;
  console.log(arr[a]);
  a++;
}
