"use strict";
exports.__esModule = true;
var Auth_1 = require("../../src/reducers/Auth");
var chai_1 = require("chai");
describe("reducers/Auth", function () {
    describe("CHANGE_AUTH_STATUS(State,AnyAction)", function () {
        it("should change authStatus", function () {
            var action = { type: "CHANGE_AUTH_STATUS", payload: true };
            var state = {
                User: {
                    authStatus: false
                }
            };
            var newState = Auth_1.CHANGE_AUTH_STATUS(state, action);
            chai_1.assert.notStrictEqual(newState.User.authStatus, state.User.authStatus, "not changed1");
        });
    });
});
