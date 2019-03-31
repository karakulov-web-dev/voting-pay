import { checkAccessToken } from "../../src/actions/Auth";
import { State } from "../../src/store/state";

describe("actions/Auth", function() {
  describe("checkAccessToken(accessToken: string)", function() {
    it("should dispatch ActionChangeAuthStatus", function(done) {
      let thunk = checkAccessToken("noValidToken", function(token) {
        return new Promise((resolve, reject) => {
          resolve(false);
        });
      });
      function dispatch(result: any) {
        if (typeof result === "undefined") {
          done(new Error("action undefined"));
        } else if (result.type !== "CHANGE_AUTH_STATUS") {
          done(new Error("action type not correct"));
        } else if (typeof result.payload === "undefined") {
          done(new Error("action payload undefined"));
        } else {
          done();
        }
      }
      function getState(): State {
        let s = {} as State;
        return s;
      }
      thunk(dispatch, getState);
    });
  });
});
