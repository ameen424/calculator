// Reverse the element represenntation in array

function revArray(array){
    let j = array.length-1;
    let i = 0;
    let temp;
    while (i<j){
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        i++;
        j--;
    }
    return array;
}

console.log(revArray([1,2,3,4,5]))