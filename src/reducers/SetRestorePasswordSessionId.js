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
function SetRestorePasswordSessionId(state, action) {
    var _a = action.payload, restorePasswordSessionId = _a.restorePasswordSessionId, errorStatus = _a.errorStatus, errorText = _a.errorText;
    if (errorStatus) {
        restorePasswordSessionId = "";
        if (!errorText) {
            errorText = "Ошибка";
        }
    }
    else {
        if (!restorePasswordSessionId) {
            errorText = "";
            restorePasswordSessionId = "";
        }
    }
    return __assign({}, state, { User: __assign({}, state.User, { restorePasswordSessionId: restorePasswordSessionId }), loginForm: __assign({}, state.loginForm, { errorMessageRestorePass: errorText }) });
}
exports.SetRestorePasswordSessionId = SetRestorePasswordSessionId;
