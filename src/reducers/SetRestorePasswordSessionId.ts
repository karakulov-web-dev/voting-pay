import { State } from "../store/state";
import { restorePasswordAction } from "../actions/restorePassword";

export function SetRestorePasswordSessionId(
  state: State,
  action: restorePasswordAction
) {
  let { restorePasswordSessionId, errorStatus, errorText } = action.payload;
  if (errorStatus) {
    restorePasswordSessionId = "";
    if (!errorText) {
      errorText = "Ошибка";
    }
  } else {
    if (!restorePasswordSessionId) {
      errorText = "";
      restorePasswordSessionId = "";
    }
  }
  return {
    ...state,
    User: { ...state.User, restorePasswordSessionId },
    loginForm: { ...state.loginForm, errorMessageRestorePass: errorText }
  };
}
