"use strict";
exports.__esModule = true;
function checkAccessToken(accessToken, accessTokenChecker) {
    return function (dispatch, getState) {
        dispatch(changeAuthStatus(false));
    };
}
exports.checkAccessToken = checkAccessToken;
function changeAuthStatus(status) {
    return { type: "CHANGE_AUTH_STATUS", payload: status };
}
