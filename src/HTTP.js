"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var axios_1 = __importDefault(require("axios"));
var apiServer = "http://localhost/";
var http = axios_1["default"].create({
    baseURL: apiServer
});
function httpCheckAccessToken(token) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve({
                errorStatus: false,
                errorText: "",
                AccessTokenStatus: false
            });
        }, 1000);
    });
}
exports.httpCheckAccessToken = httpCheckAccessToken;
