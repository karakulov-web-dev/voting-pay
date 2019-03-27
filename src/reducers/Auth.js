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
function CHANGE_AUTH_STATUS(state, action) {
    var User = state.User;
    return __assign({}, state, { User: { authStatus: action.payload } });
}
exports.CHANGE_AUTH_STATUS = CHANGE_AUTH_STATUS;
