let names = new Array();
names.push('Jack', 'Laura', 'Paul', 'Megan');
console.log(names)
console.log(names.length)

//it deletes the element and mae empty space
delete names[1];
names.forEach((name) => console.log(name));


console.log(names)
console.log(typeof names)

console.log(Array.isArray(names))

//Add the elements at the end of the array
names.push('Mask');
names.push("John")
//removes the first element from the array 
names.shift();
//Adds the first element to the array 
names.unshift('Master')
//replace the new data with other given element
names.splice(2, 1, 'Atom');
//Removes the last element
names.pop()

console.log(names)


//sorting elements in the given array
let num =[20,5,47,8,1]
num.sort((a, b) => a - b);
console.log(num)

let arr1 = [21, 2100, 2, 35000, 157, 2546,25,35468];
arr1.sort((a,b) => a - b);
console.log(arr1)