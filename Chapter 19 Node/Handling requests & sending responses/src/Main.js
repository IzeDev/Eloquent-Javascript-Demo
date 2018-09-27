var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// import * as http from "http";
// import * as fileSystem from "fs";
let http = require("http");
let fileSystem = require("fs");
let myFriends = ["Adam", "Isa", "Mirre"];
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let server = http.createServer(function (request, response) {
            return __awaiter(this, void 0, void 0, function* () {
                let requestedContentType = request.headers.accept || "text/plain";
                if (requestedContentType == "application/json" || requestedContentType == "text/plain") {
                    response.writeHead(200, { "content-type": "application/json" });
                    response.write(JSON.stringify({ friends: myFriends }));
                }
                else if (requestedContentType == "text/html") {
                    response.writeHead(200, { "content-type": "text/html" });
                    let html = getHtmlFromFile();
                    html.then((x) => response.write(x));
                }
                else if (RegExp("xml", "i").test(requestedContentType) == true) {
                    response.writeHead(200, { "content-type": "application/xml" });
                    let xml = "<xml><friends>";
                    myFriends.forEach(i => xml += "<friend>" + i + "</friend>");
                    xml += "</friends></xml>";
                    response.write(xml);
                }
                else {
                    response.writeHead(400, "Bad request");
                    response.write("Unknown accept-header.");
                }
                response.end();
            });
        });
        server.listen(8000);
    });
}
function getHtmlFromFile() {
    return __awaiter(this, void 0, void 0, function* () {
        let filePath = __dirname.replace("\\src", "") + "\\content\\main.html";
        return new Promise(resolve => fileSystem.readFile(filePath, "utf-8", function (error, text) {
            if (error) {
                throw error;
            }
            else {
                return text;
            }
        }));
    });
}
main();
