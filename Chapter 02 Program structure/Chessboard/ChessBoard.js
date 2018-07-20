var boardSize = 8;
var output = "";
var expectedRest = 1;

for (let yIndex = 0; yIndex < boardSize; yIndex++) {
    for (let xIndex = 0; xIndex < boardSize; xIndex++) {
        if (xIndex % 2 == expectedRest) {
            output += " ";
        }
        else
        {
            output += "#";
        }
    }
    output += "\n"
    expectedRest = expectedRest == 0 ? 1 : 0;
}

console.log(output);