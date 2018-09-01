import * as http from "http";
function sendHttpRequest(hostname, path, contentType) {
    let requst = http.request({
        hostname : hostname,
        path : path,
        port : 80,
        method : "GET",
        headers : {Accept : contentType}
    }, function (response) {
        response.on("data", function(chunk) {
            console.log(chunk.toString());
        });
    });
    requst.end();
}

sendHttpRequest("eloquentjavascript.net", "/authors", "text/html");
sendHttpRequest("eloquentjavascript.net", "/authors", "text/plain");
sendHttpRequest("eloquentjavascript.net", "/authors", "application/json");
sendHttpRequest("eloquentjavascript.net", "/authors", "text/xml");