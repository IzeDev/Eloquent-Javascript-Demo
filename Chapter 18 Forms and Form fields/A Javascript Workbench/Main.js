
let textArea = null;
let paragraph = null;

function rigEvents() {
    document.querySelector("#inputForm").addEventListener("submit", handleInput);
}

function setGlobalVariabels() {
    paragraph = document.querySelector("#resultParagraph");
    textArea = document.querySelector("#javascriptInputTextarea");
}

function changeParagraphText(text, paragraph) {
    paragraph.textContent = text;
}

function changeParagraphTextColor(color, paragraph) {
    paragraph.style.color = color;
}

function handleInput(event) {
    let textAreaInput = textArea.value;

    if (textAreaInput.length > 0) {
        let x = eval(textAreaInput);
        changeParagraphText(x, paragraph);
        changeParagraphTextColor("black", paragraph);
    }
    else {
        changeParagraphText("Incorrect input!", paragraph);
        changeParagraphTextColor("red", paragraph);
    }

    event.preventDefault();
}

function main() {
    setGlobalVariabels();
    rigEvents();    
}


