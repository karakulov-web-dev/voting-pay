import { LOGIN_USER_RESULT } from "../../src/reducers/LOGIN_USER_RESULT";
import { HttpLoginUserResult } from "../../src/HTTP";
import { State } from "../../src/store/state";
import { assert } from "chai";

describe("reducers/LOGIN_USER_RESULT", function() {
  describe("REGISTRATION_USER_RESULT(State,action)", function() {
    it("should mutates state properly (in case of success)", function() {
      let payload = {} as HttpLoginUserResult;
      payload.AccessToken = "1234";
      payload.errorStatus = false;
      payload.errorText = "";
      let action = { type: "LOGIN_USER_RESULT", payload };
      let initState = {
        User: {
          authStatus: false
        },
        loginForm: {
          errorMessageLogin: ""
        }
      } as State;
      let expectedState = {
        User: {
          authStatus: true
        },
        loginForm: {
          errorMessageLogin: ""
        }
      } as State;
      let newState = LOGIN_USER_RESULT(initState, action as any);
      assert.deepStrictEqual(newState, expectedState);
    });
    it("should mutates state properly (in case of fail)", function() {
      let payload = {} as HttpLoginUserResult;
      payload.AccessToken = "";
      payload.errorStatus = true;
      payload.errorText = "error";
      let action = { type: "LOGIN_USER_RESULT", payload };
      let initState = {
        User: {
          authStatus: false
        },
        loginForm: {
          errorMessageLogin: ""
        }
      } as State;
      let expectedState = {
        User: {
          authStatus: false
        },
        loginForm: {
          errorMessageLogin: "error"
        }
      } as State;
      let newState = LOGIN_USER_RESULT(initState, action as any);
      assert.deepStrictEqual(newState, expectedState);
    });
  });
});
