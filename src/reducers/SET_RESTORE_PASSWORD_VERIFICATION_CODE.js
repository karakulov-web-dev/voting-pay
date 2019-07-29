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
function setRestorePasswordVerificationCode(state, action) {
    var _a = action.payload, status = _a.status, code = _a.code;
    if (status) {
        var errorText = "";
    }
    else {
        code = "";
        errorText = "Неправильный код подтверждения!";
    }
    return __assign({}, state, { User: __assign({}, state.User, { restorePasswordVerificationCode: code }), loginForm: __assign({}, state.loginForm, { errorMessageRestorePass: errorText }) });
}
exports.setRestorePasswordVerificationCode = setRestorePasswordVerificationCode;
