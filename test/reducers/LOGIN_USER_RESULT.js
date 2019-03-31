"use strict";
exports.__esModule = true;
var LOGIN_USER_RESULT_1 = require("../../src/reducers/LOGIN_USER_RESULT");
var chai_1 = require("chai");
describe("reducers/LOGIN_USER_RESULT", function () {
    describe("REGISTRATION_USER_RESULT(State,action)", function () {
        it("should mutates state properly (in case of success)", function () {
            var payload = {};
            payload.AccessToken = "1234";
            payload.errorStatus = false;
            payload.errorText = "";
            var action = { type: "LOGIN_USER_RESULT", payload: payload };
            var initState = {
                User: {
                    authStatus: false
                },
                loginForm: {
                    errorMessageLogin: ""
                }
            };
            var expectedState = {
                User: {
                    authStatus: true
                },
                loginForm: {
                    errorMessageLogin: ""
                }
            };
            var newState = LOGIN_USER_RESULT_1.LOGIN_USER_RESULT(initState, action);
            chai_1.assert.deepStrictEqual(newState, expectedState);
        });
        it("should mutates state properly (in case of fail)", function () {
            var payload = {};
            payload.AccessToken = "";
            payload.errorStatus = true;
            payload.errorText = "error";
            var action = { type: "LOGIN_USER_RESULT", payload: payload };
            var initState = {
                User: {
                    authStatus: false
                },
                loginForm: {
                    errorMessageLogin: ""
                }
            };
            var expectedState = {
                User: {
                    authStatus: false
                },
                loginForm: {
                    errorMessageLogin: "error"
                }
            };
            var newState = LOGIN_USER_RESULT_1.LOGIN_USER_RESULT(initState, action);
            chai_1.assert.deepStrictEqual(newState, expectedState);
        });
    });
});
