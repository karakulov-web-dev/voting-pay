import { State } from "../store/state";
import { LoginUserResultAction } from "../actions/checkLogin";

export function LOGIN_USER_RESULT(state: State, action: LoginUserResultAction) {
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
    loginForm: { ...state.loginForm, errorMessageLogin: errorText }
  };
}
