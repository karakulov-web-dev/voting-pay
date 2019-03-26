"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var https_1 = __importDefault(require("https"));
var fs_1 = __importDefault(require("fs"));
var app = express_1["default"]();
app.use("/", express_1["default"].static(__dirname + "/public"));
app.get(/./, function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});
var httpServer = http_1["default"].createServer(app);
httpServer.listen(80, function () {
    console.log("HTTP Server running on port 80");
});
var prodaction = false;
if (prodaction) {
    var privateKey = void 0, certificate = void 0, ca = void 0;
    privateKey = fs_1["default"].readFileSync("/etc/letsencrypt/live/votingpay.com/privkey.pem", "utf8");
    certificate = fs_1["default"].readFileSync("/etc/letsencrypt/live/votingpay.com/cert.pem", "utf8");
    ca = fs_1["default"].readFileSync("/etc/letsencrypt/live/votingpay.com/chain.pem", "utf8");
    var credentials = {
        key: privateKey,
        cert: certificate,
        ca: ca
    };
    var httpsServer = https_1["default"].createServer(credentials, app);
    httpsServer.listen(443, function () {
        console.log("HTTPS Server running on port 443");
    });
}
