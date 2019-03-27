import { CHANGE_AUTH_STATUS } from "../../src/reducers/Auth";
import { State } from "../../src/store/state";
import { assert } from "chai";

describe("reducers/Auth", function() {
  describe("CHANGE_AUTH_STATUS(State,AnyAction)", function() {
    it("should change authStatus", function() {
      let action = { type: "CHANGE_AUTH_STATUS", payload: true };
      let state = {
        User: {
          authStatus: false
        }
      } as State;
      let newState = CHANGE_AUTH_STATUS(state as any, action as any);
      assert.notStrictEqual(
        newState.User.authStatus,
        state.User.authStatus,
        "not changed1"
      );
    });
  });
});
