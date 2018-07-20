let textParagraph = null;

function addSquareToScreen(xCoordinate = 0, yCoordinate = 0) {
    if (textParagraph === null) {
        textParagraph = document.createElement("p");
        textParagraph.textContent = "Buy our awesome soap!";
        textParagraph.style.position = "relative";
        document.body.appendChild(textParagraph);
    }
    textParagraph.style.marginTop = yCoordinate + "px";
    textParagraph.style.marginLeft = xCoordinate + "px";
}

function mouseMoveEvent(event) {
    addSquareToScreen(event.pageX, event.pageY);    
}

function main() {
    addEventListener("mousemove", mouseMoveEvent);
}

