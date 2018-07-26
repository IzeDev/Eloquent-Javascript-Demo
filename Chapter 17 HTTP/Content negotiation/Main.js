function sendGetRequest(contentType) {
    let request = new XMLHttpRequest();
    request.open("GET", "https://eloquentjavascript.net/authors", true);
    request.setRequestHeader("content-type", contentType);
    request.addEventListener("load", function() {
        console.log(request.responseText);
    });
    request.send(null);
}

function clickEvent(event) {
    switch(event.target.id) {
        case "text/plain-button":
            sendGetRequest("text/plain");
            break;
        case "text/html-button":
            sendGetRequest("text/html");
            break;
        case "application/json-button":
            sendGetRequest("application/json");            
            break;
        case "unicorns-button":
            sendGetRequest("unicorns"); 
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