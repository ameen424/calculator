// Linear Sort

function linsearch(arr,element){
    for(let i = 0; i< arr.length;i++){
        if(arr[i] === element){
            return i;
        }
    }
    return null;
}

let arr = [15,12,10,11,13,56,48]

console.log(linsearch(arr,48))




//Bubble Sort


function bubblesort(arr){
    for (let i=0 ; i< arr.length;i++){
        for(let j=0; j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                let tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
    }
    return arr;
}

console.log(bubblesort([15,2,4,85,69,7,354,24,268,]))
