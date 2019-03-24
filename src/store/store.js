"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var redux_1 = require("redux");
var redux_thunk_1 = __importDefault(require("redux-thunk"));
var rootReducer_1 = require("../reducers/rootReducer");
var state_1 = require("./state");
var store = redux_1.createStore(rootReducer_1.rootReducer, state_1.state, redux_1.applyMiddleware(redux_thunk_1["default"]));
exports.store = store;
