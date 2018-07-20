function isEven(number){
    number = Number.parseInt(number);
    if (number === 0) {
        return true;
    }
    else if (number === 1){
        return false;
    }
    else{
        var numberModifier = number < 0 ? 2 : -2;
        return isEven(number + numberModifier);
    }

}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1.01));