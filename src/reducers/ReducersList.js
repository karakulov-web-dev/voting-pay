"use strict";
exports.__esModule = true;
var RegisterReducerStart_1 = require("./RegisterReducerStart");
var ReducersList = {};
exports.ReducersList = ReducersList;
/**
 * registers a reducer, the reducer will be called whenever an [[AnyAction.type]] equals the reducer key
 * @param key reducer key,
 * @param func reducer function
 */
function registerReducer(key, func) {
    if (typeof ReducersList[key] !== "undefined") {
        throw new Error("ReducerFunction " + key + " already exists");
    }
    ReducersList[key] = func;
}
exports.registerReducer = registerReducer;
RegisterReducerStart_1.RegisterReducerStart();
