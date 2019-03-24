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
function NEXT_VAL(state) {
    var finished = false;
    var nextNumber = state.teamFacts.currNumber.map(function (item, index) {
        var nextVal = item + state.teamFacts.incValues[index];
        if (nextVal >= state.teamFacts.finishNumber[index]) {
            finished = true;
        }
        return nextVal;
    });
    if (finished) {
        nextNumber = state.teamFacts.finishNumber;
    }
    return __assign({}, state, { teamFacts: __assign({}, state.teamFacts, { currNumber: nextNumber, finished: finished }) });
}
exports.NEXT_VAL = NEXT_VAL;
