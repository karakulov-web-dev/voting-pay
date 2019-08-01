"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var axios_1 = __importDefault(require("axios"));
var variable_1 = require("../variable");
var apiServer = variable_1.prodaction ? "https://votingpay.com/" : "http://localhost/";
var http = axios_1["default"].create({
    baseURL: apiServer
});
function httpCheckAccessToken(token) {
    return http.post("/auth/check-access-token", {
        AccessToken: token
    });
}
exports.httpCheckAccessToken = httpCheckAccessToken;
function httpRegistrationUser(email, password) {
    return http.post("/auth/registration-user", {
        email: email,
        password: password
    });
}
exports.httpRegistrationUser = httpRegistrationUser;
function httploginUser(email, password) {
    return http.post("/auth/login-user", {
        email: email,
        password: password
    });
}
exports.httploginUser = httploginUser;
function httpRestorePassword(email) {
    return http.post("/auth/restore-password", {
        email: email
    });
}
exports.httpRestorePassword = httpRestorePassword;
function restorePasswordVerificationCode(code, sessionId, newPassword) {
    return http.post("/auth/restore-password-verification-code", {
        code: code,
        sessionId: sessionId,
        newPassword: newPassword
    });
}
exports.restorePasswordVerificationCode = restorePasswordVerificationCode;
