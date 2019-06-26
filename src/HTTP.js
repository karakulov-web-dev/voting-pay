"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var axios_1 = __importDefault(require("axios"));
var variable_1 = require("../variable");
var apiServer = variable_1.prodaction
    ? "https://votingpay.com/"
    : "http://localhost:8081/";
var http = axios_1["default"].create({
    baseURL: apiServer
});
function httpCheckAccessToken(token) {
    return http.post("/check-access-token", {
        AccessToken: token
    });
}
exports.httpCheckAccessToken = httpCheckAccessToken;
function httpRegistrationUser(email, password) {
    return http.post("/registration-user", {
        email: email,
        password: password
    });
}
exports.httpRegistrationUser = httpRegistrationUser;
function httploginUser(email, password) {
    return http.post("/login-user", {
        email: email,
        password: password
    });
}
exports.httploginUser = httploginUser;
