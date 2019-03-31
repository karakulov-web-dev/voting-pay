"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
function LOGIN_USER_RESULT(state, action) {
    var _a = action.payload, AccessToken = _a.AccessToken, errorStatus = _a.errorStatus, errorText = _a.errorText;
    var authStatus = false;
    if (errorStatus) {
        AccessToken = "";
        if (!errorText) {
            errorText = "Ошибка";
        }
    }
    else {
        if (AccessToken) {
            authStatus = true;
            errorText = "";
        }
        else {
            AccessToken = "";
            errorText = "Ошибка";
        }
    }
    return __assign({}, state, { User: __assign({}, state.User, { authStatus: authStatus }), loginForm: __assign({}, state.loginForm, { errorMessageLogin: errorText }) });
}
exports.LOGIN_USER_RESULT = LOGIN_USER_RESULT;
