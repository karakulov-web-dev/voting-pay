"use strict";
exports.__esModule = true;
var switchAutoTimerId;
var switchAutoEnableTimerId;
exports.switchToSlide = function (direction) {
    if (switchAutoTimerId) {
        clearInterval(switchAutoTimerId);
        switchAutoTimerId = undefined;
    }
    if (switchAutoEnableTimerId) {
        clearTimeout(switchAutoEnableTimerId);
        switchAutoEnableTimerId = undefined;
    }
    return {
        type: "CHANGE_SLIDE",
        payload: direction
    };
};
exports.switchTimeoutHidden = function (time) {
    return function (dispatch) {
        setTimeout(function () {
            dispatch({ type: "CHANGE_SLIDE_HIDDEN" });
        }, time);
    };
};
exports.switchAuto = function () {
    return function (dispatch) {
        if (switchAutoTimerId !== undefined) {
            return;
        }
        switchAutoTimerId = setInterval(function () {
            dispatch({ type: "CHANGE_SLIDE", payload: "next" });
        }, 3000);
    };
};
exports.switchAutoEnable = function () {
    return function (dispatch) {
        if (switchAutoEnableTimerId !== undefined) {
            return;
        }
        switchAutoEnableTimerId = setTimeout(function () {
            dispatch(exports.switchAuto());
        }, 2000);
        // 2s + 3s (for slide change) ==> 5s delay
    };
};
