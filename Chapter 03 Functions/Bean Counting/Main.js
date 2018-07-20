function countChar(textValue, charValue){
    let charCount = 0;
    for (let index = 0; index < textValue.length; index++) {
        let char = textValue[index];
        if (char === charValue) {
            charCount++;
        }        
    }
    return charCount;
}

function countBs(textValue)
{
    return countChar(textValue, "B");
}

let numberOfBs = countBs("Bepa");
console.log(numberOfBs);