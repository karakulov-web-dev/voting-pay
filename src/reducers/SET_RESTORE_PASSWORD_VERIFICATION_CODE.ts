import { State } from "../store/state";
import { RestorePasswordVerificationAction } from "../actions/restorePassword";

export function setRestorePasswordVerificationCode(
  state: State,
  action: RestorePasswordVerificationAction
) {
  let { status, code } = action.payload;
  if (status) {
    var errorText = "";
  } else {
    code = "";
    errorText = "Неправильный код подтверждения!";
  }
  return {
    ...state,
    User: { ...state.User, restorePasswordVerificationCode: code },
    loginForm: { ...state.loginForm, errorMessageRestorePass: errorText }
  };
}
