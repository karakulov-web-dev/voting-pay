"use strict";
exports.__esModule = true;
var ReducersList_1 = require("./ReducersList");
var state_1 = require("../store/state");
/**
 * will call the reducer from the list of ReducersList with the key equal to [[AnyAction.type]].
 * transfers parameters to the called reducer without changes
 * @param state
 * @param action
 */
var rootReducer = function rootReducer(state, action) {
    if (typeof state === "undefined") {
        state = state_1.state;
    }
    try {
        if (typeof ReducersList_1.ReducersList[action.type] === "undefined") {
            throw new Error("action " + action.type + " not found");
        }
    }
    catch (e) {
        console.log(e);
        return state;
    }
    state = ReducersList_1.ReducersList[action.type](state, action);
    return state;
};
exports.rootReducer = rootReducer;
