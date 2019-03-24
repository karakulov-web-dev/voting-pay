"use strict";
exports.__esModule = true;
exports.localState = {
    countTimerId: undefined
};
exports.startCount = function (time) {
    return function (dispatch) {
        if (exports.localState.countTimerId !== undefined) {
            return;
        }
        exports.localState.countTimerId = setInterval(function () {
            dispatch({ type: "NEXT_VAL" });
        }, time);
    };
};
exports.stopCount = function () {
    return function (dispatch) {
        if (exports.localState.countTimerId) {
            clearInterval(exports.localState.countTimerId);
            exports.localState.countTimerId = undefined;
        }
    };
};
