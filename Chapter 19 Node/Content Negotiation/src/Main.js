"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var requst = http.request({
    hostname: "https://eloquentjavascript.net/authors",
    port: 443,
    method: "GET"
}, function (response) {
    response.on("data", function (chunk) {
        process.stdout.write(chunk.toString());
    });
});
requst.end();
