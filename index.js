"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var variable_1 = require("./variable");
var app = express_1["default"]();
app.use(express_1["default"].json());
app.get(/./, function (req, res, next) {
    if (req.protocol === "http" && variable_1.prodaction) {
        res.redirect("https://" + req.headers.host + req.url);
        return;
    }
    else {
        next();
    }
});
app.use("/", express_1["default"].static(__dirname + "/public"));
app.post("/check-access-token", function (req, res) {
    var status;
    if (req.body.AccessToken === "validToken") {
        status = true;
    }
    else {
        status = false;
    }
    res.send({
        errorStatus: false,
        errorText: "",
        AccessTokenStatus: status
    });
});
app.post("/registration-user", function (req, res) {
    res.send({
        errorStatus: false,
        errorText: "",
        AccessToken: "validToken"
    });
});
app.post("/login-user", function (req, res) {
    var errorStatus = false;
    var errorText = "";
    var AccessToken = "";
    if (req.body.email === "test@votingpay.com" && req.body.password === "1234") {
        errorStatus = false;
        errorText = "";
        AccessToken = "validToken";
    }
    else {
        errorStatus = true;
        errorText = "Не правильный логин или пароль";
        AccessToken = "";
    }
    res.send({
        errorStatus: errorStatus,
        errorText: errorText,
        AccessToken: AccessToken
    });
});
app.post("/restore-password", function (req, res) {
    var errorStatus = false;
    var errorText = "";
    var restorePasswordSessionId = String(Math.random()).slice(2, 10);
    res.send({
        errorStatus: errorStatus,
        errorText: errorText,
        restorePasswordSessionId: restorePasswordSessionId
    });
});
app.post("/restore-password-verification-code", function (req, res) {
    var errorStatus = false;
    var errorText = "";
    res.send({
        errorStatus: errorStatus,
        errorText: errorText,
        AccessToken: "validToken"
    });
});
app.get(/./, function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});
var httpServer = http_1["default"].createServer(app);
httpServer.listen(8081, function () {
    console.log("HTTP Server running on port 8081");
});
