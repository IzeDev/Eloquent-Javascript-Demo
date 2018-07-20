function reduce(array, combine, start) {
    let current = start;
    
    for (let index = 0; index < array.length; index++) {
        current = combine(current, array[index])
    }

    return current;
}

function concat(x, y) {
    if (Array.isArray(x) == false || Array.isArray(y) == false) {
        return [];
    }

    let newArray = [];
    let lastIndex = 0;

    for (let index = 0; index < x.length; index++) {
        newArray[index] = x[index];
        lastIndex = index;
    }

    lastIndex++;

    for (let index = 0; index < y.length; index++) {
        newArray[index + lastIndex] = y[index]; 
    }

    return newArray;
}

let array = [];
let array1 = [1, 2, 3];
let array2 = [1, 2, 3];
let array3 = [1, 2, 3];

array.push(array1);
array.push(array2);
array.push(array3);

let myNewArray = [];
myNewArray = reduce(array, concat, myNewArray);
console.log("Hejsan");


