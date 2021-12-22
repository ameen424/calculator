let name1 = [11, 4, 54, 48, 24];
let name2 = sortArrays(name1);
// name1.sort(abc);

// console.log(name1);
// function abc(a, b) {
//   return a - b;
// }
/*

=0  nothing will bbe change
<0  a will be return
>0  b will be return

*/
function sortArrays(arr) {
  for (let i = 0; i < name1.length - 1; i++) {
    if (name1[i] > name1[i + 1]) {
      let temp = name1[i];
      name1[i] = name1[i + 1];
      name1[i + 1] = temp;
      i = -1;
    }
  }
  return arr;
}
console.log(name2);
