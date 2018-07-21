function clickEvent(event) {
    debugger;
    switch(event.target.id) {
        case "text/plain-button":
            alert("You clicked A");
            break;
        case "text/html-button":
            alert("You clicked B");
            break;
        case "application/json-button":
            alert("You clicked C");
            break;
        case "unicorns-button":
            alert("You clicked D");
            break;
        default:
            break;
    }
}

function main () {
    document.querySelectorAll("button")
        .forEach(function(currentValue) {
            currentValue.addEventListener("click", clickEvent);
        });
}