// "x" blir här "start" medan "y" blir "end".
function compose(f, g) {
    return function(x, y) {
      return g(f(x, y));
    }
  };

function createNumberRange(start, end) {
    let numbers = [];

    for (let number = start; number <= end; number++) {
        numbers.push(number);
    }

    return numbers;
}

function summarizeNumbers(numbers) {
    let number = 0;

    numbers.forEach(element => {
        number += element;
    });

    return number;
}

let summarizeRange = compose(createNumberRange, summarizeNumbers);
console.log(summarizeRange(1, 10));