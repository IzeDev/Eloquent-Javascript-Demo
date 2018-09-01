import * as http from "http"
let requst = http.request({
    hostname : "https://eloquentjavascript.net/authors",
    port : 443,
    method : "GET"
}, function (response) {
    response.on("data", function(chunk) {
        process.stdout.write(chunk.toString());
    });
});
requst.end();