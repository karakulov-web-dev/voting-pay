"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var app = express_1["default"]();
app.use("/", express_1["default"].static(__dirname + "/public"));
app.listen(80, function () {
    console.log("Example app listening on port 80!");
});
