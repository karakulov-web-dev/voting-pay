"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var ReducersList_1 = require("../../src/reducers/ReducersList");
var rootReducer_1 = require("../../src/reducers/rootReducer");
describe("reducers", function () {
    describe("registerReducer(string,BaseReducer)", function () {
        it("should create function in a ReducersList", function () {
            var funcName = "test";
            function testReducer() { }
            ReducersList_1.registerReducer(funcName, testReducer);
            chai_1.assert.exists(ReducersList_1.ReducersList[funcName], "function was not created");
        });
    });
    describe("rootReducer(State,AnyAction): State", function () {
        it("should call a reducer from the list of ReducersList", function () {
            var funcName = String(Math.random());
            var wasCalled = false;
            function testReducer(state, action) {
                wasCalled = true;
                return state;
            }
            var state = {};
            ReducersList_1.registerReducer(funcName, testReducer);
            rootReducer_1.rootReducer(state, {
                type: funcName,
                payload: ""
            });
            chai_1.assert.isTrue(wasCalled, "function not called");
        });
    });
});
