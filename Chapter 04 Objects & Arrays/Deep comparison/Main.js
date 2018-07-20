function deepComparison(x, y) {
    if (x === null || y === null) {
        return false;
    }

    let isEqual = false;
    let typeOfX = typeof(x);
    let typeOfY = typeof(y);
    if(typeOfX === typeOfY && typeOfX === "object") {
        for (const p in x) {
            let xProperty = x[p];
            let yProperty = y[p];
            isEqual = deepComparison(xProperty, yProperty);           
        }
    }
    else if (x === y) {
        isEqual = true;
    }
    else {
        isEqual = false;
    }
    return isEqual;
}

console.log(deepComparison(1, "apa"));
let x = { value1 : 1, value2: 2 };
let y = { value1 : 1, value2: 2 };
console.log(deepComparison(x, y));