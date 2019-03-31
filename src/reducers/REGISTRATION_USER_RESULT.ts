import { State } from "../store/state";
import { RegistrationUserResultAction } from "../actions/registrationUser";

export function REGISTRATION_USER_RESULT(
  state: State,
  action: RegistrationUserResultAction
) {
  let { AccessToken, errorStatus, errorText } = action.payload;
  let authStatus = false;
  if (errorStatus) {
    AccessToken = "";
    if (!errorText) {
      errorText = "Ошибка";
    }
  } else {
    if (AccessToken) {
      authStatus = true;
      errorText = "";
    } else {
      AccessToken = "";
      errorText = "Ошибка";
    }
  }
  return {
    ...state,
    User: { ...state.User, authStatus },
    loginForm: { ...state.loginForm, errorMessageRegistration: errorText }
  };
}
