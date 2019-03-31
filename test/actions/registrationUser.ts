import {
  registrationUserFlex,
  RegistrationUserResultAction,
  RegistrationUserCheck
} from "../../src/actions/registrationUser";

describe("actions/registrationUser", function() {
  describe("registrationUser(email: string,password: string)", function() {
    it("should dispatch RegistrationUserResultAction", function(done) {
      async function registrationUserCheck(email: string, password: string) {
        return {
          AccessToken: "1",
          errorStatus: false,
          errorText: ""
        };
      }

      let thunk = registrationUserFlex(
        "email@test",
        "passTest",
        registrationUserCheck
      );

      let getState: any = () => {};
      let dispatch: any = (result: RegistrationUserResultAction) => {
        let status = true;
        if (result.type !== "REGISTRATION_USER_RESULT") {
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
          done(new Error("RegistrationUserResultAction invalid"));
        }
      };
      thunk(dispatch, getState);
    });
    it("RegistrationUserResultAction payload AccessTokenmust be equivalent registrationUserCheck result(AccessToken)", function(done) {
      let registrationUserCheckResult = {
        AccessToken: "1",
        errorStatus: false,
        errorText: ""
      };
      async function registrationUserCheck(email: string, password: string) {
        return registrationUserCheckResult;
      }
      let thunk = registrationUserFlex(
        "email@test",
        "passTest",
        registrationUserCheck
      );
      let getState: any = () => {};
      let dispatch: any = (result: RegistrationUserResultAction) => {
        let status = true;
        if (
          result.payload.AccessToken !== registrationUserCheckResult.AccessToken
        ) {
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
