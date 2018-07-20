function reverseArray(array) {
    let reversedArray = [];
    for (let index = array.length-1; index >= 0; index--) {
        reversedArray.push(array[index]);        
    }
    return reversedArray;
}

var arrayToBeReversedInPlace = [1, 2, 3];
function reverseArrayInPlace(){
    let reversedArray = [];
    for (let index = arrayToBeReversedInPlace.length-1; index >= 0; index--) {
        reversedArray.push(arrayToBeReversedInPlace[index]);        
    }
    for (let index = 0; index < reversedArray.length; index++) {
        arrayToBeReversedInPlace[index] = reversedArray[index];
    }
}

let arrayToBeReversed = [1, 2, 3];
let revesedArray = reverseArray(arrayToBeReversed);
reverseArrayInPlace();

console.log(arrayToBeReversed);
console.log(revesedArray);
console.log(arrayToBeReversedInPlace);