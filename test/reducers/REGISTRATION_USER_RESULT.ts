import { REGISTRATION_USER_RESULT } from "../../src/reducers/REGISTRATION_USER_RESULT";
import { HttpRegistrationUserResult } from "../../src/HTTP";
import { State } from "../../src/store/state";
import { assert } from "chai";

describe("reducers/REGISTRATION_USER_RESULT", function() {
  describe("REGISTRATION_USER_RESULT(State,action)", function() {
    it("should mutates state properly (in case of success)", function() {
      let payload = {} as HttpRegistrationUserResult;
      payload.AccessToken = "1234";
      payload.errorStatus = false;
      payload.errorText = "";
      let action = { type: "REGISTRATION_USER_RESULT", payload };
      let initState = {
        User: {
          authStatus: false
        },
        loginForm: {
          errorMessageRegistration: ""
        }
      } as State;
      let expectedState = {
        User: {
          authStatus: true
        },
        loginForm: {
          errorMessageRegistration: ""
        }
      } as State;
      let newState = REGISTRATION_USER_RESULT(initState, action as any);
      assert.deepStrictEqual(newState, expectedState);
    });
    it("should mutates state properly (in case of fail)", function() {
      let payload = {} as HttpRegistrationUserResult;
      payload.AccessToken = "";
      payload.errorStatus = true;
      payload.errorText = "error";
      let action = { type: "REGISTRATION_USER_RESULT", payload };
      let initState = {
        User: {
          authStatus: false
        },
        loginForm: {
          errorMessageRegistration: ""
        }
      } as State;
      let expectedState = {
        User: {
          authStatus: false
        },
        loginForm: {
          errorMessageRegistration: "error"
        }
      } as State;
      let newState = REGISTRATION_USER_RESULT(initState, action as any);
      assert.deepStrictEqual(newState, expectedState);
    });
  });
});
