"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
function sendHttpRequest(hostname, path, contentType) {
    var requst = http.request({
        hostname: hostname,
        path: path,
        port: 80,
        method: "GET",
        headers: { Accept: contentType }
    }, function (response) {
        response.on("data", function (chunk) {
            console.log(chunk.toString());
        });
    });
    requst.end();
}
sendHttpRequest("eloquentjavascript.net", "/authors", "text/html");
sendHttpRequest("eloquentjavascript.net", "/authors", "text/plain");
sendHttpRequest("eloquentjavascript.net", "/authors", "application/json");
sendHttpRequest("eloquentjavascript.net", "/authors", "text/xml");
