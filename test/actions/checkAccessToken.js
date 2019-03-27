"use strict";
exports.__esModule = true;
var Auth_1 = require("../../src/actions/Auth");
describe("actions/Auth", function () {
    describe("checkAccessToken(accessToken: string)", function () {
        it("should dispatch ActionChangeAuthStatus", function (done) {
            var thunk = Auth_1.checkAccessToken("noValidToken", function (token) {
                return new Promise(function (resolve, reject) {
                    resolve(false);
                });
            });
            function dispatch(result) {
                if (typeof result === "undefined") {
                    done(new Error("action undefined"));
                }
                else if (result.type !== "CHANGE_AUTH_STATUS") {
                    done(new Error("action type not correct"));
                }
                else if (typeof result.payload === "undefined") {
                    done(new Error("action payload undefined"));
                }
                else {
                    done();
                }
            }
            function getState() {
                var s = {};
                return s;
            }
            thunk(dispatch, getState);
        });
    });
});
