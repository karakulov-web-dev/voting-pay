import {
  loginUserFlex,
  LoginUserResultAction
} from "../../src/actions/checkLogin";

describe("actions/checkLogin", function() {
  describe("checkLogin(email: string,password: string)", function() {
    it("should dispatch LoginUserResultAction", function(done) {
      async function loginUserCheck(email: string, password: string) {
        return {
          AccessToken: "token1",
          errorStatus: false,
          errorText: ""
        };
      }

      let thunk = loginUserFlex("email@test", "passTest", loginUserCheck);

      let getState: any = () => {};
      let dispatch: any = (result: LoginUserResultAction) => {
        let status = true;
        if (result.type !== "LOGIN_USER_RESULT") {
          status = false;
        }
        if (typeof result.payload.AccessToken === "undefined") {
          status = false;
        }
        if (typeof result.payload.errorStatus === "undefined") {
          status = false;
        }
        if (typeof result.payload.errorText === "undefined") {
          status = false;
        }
        if (status) {
          done();
        } else {
          done(new Error("LoginUserResultAction invalid"));
        }
      };
      thunk(dispatch, getState);
    });
    it("LoginUserResultAction payload AccessToken must be equivalent loginUserCheck result(AccessToken)", function(done) {
      let loginUserCheckResult = {
        AccessToken: "1",
        errorStatus: false,
        errorText: ""
      };
      async function loginUserCheck(email: string, password: string) {
        return loginUserCheckResult;
      }
      let thunk = loginUserFlex("email@test", "passTest", loginUserCheck);
      let getState: any = () => {};
      let dispatch: any = (result: LoginUserResultAction) => {
        let status = true;
        if (result.payload.AccessToken !== loginUserCheckResult.AccessToken) {
          status = false;
        }
        if (status) {
          done();
        } else {
          done(new Error("not equivalent"));
        }
      };
      thunk(dispatch, getState);
    });
  });
});
