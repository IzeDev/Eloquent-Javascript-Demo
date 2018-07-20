function every(collection, predicate) {
    let doReturnTrue = true;

    for (let index = 0; index < collection.length; index++) {
       if (predicate(collection[index])) {
           continue;
       }
       else {
           doReturnTrue = false;
           break;
       }         
    }

    return doReturnTrue;
}

function some(collection, predicate) {
    for (let index = 0; index < collection.length; index++) {
        if (predicate(collection[index])) {
            return true;
        }        
    }
    return false;
}

let myArray = [100, 100, 100];
let answer1 = every(myArray, function(x) { return x < 100 });
let answer2 = some(myArray, function(x) { return x < 100 });
console.log(answer1);
console.log(answer2);