import { ThunkAnyAction } from "../commonTypes/common";
import { HttpLoginUserResult, httploginUser } from "../HTTP";

export const loginUser = function(email: string, password: string) {
  return loginUserFlex(email, password, loginUserReq);
};

export function loginUserFlex(
  email: string,
  password: string,
  LoginUser: LoginUserCheck
): ThunkAnyAction {
  return async (dispatch, getState) => {
    let result = await LoginUser(email, password);
    let ResultAction: LoginUserResultAction = {
      type: "LOGIN_USER_RESULT",
      payload: result
    };
    dispatch(ResultAction);
  };
}

async function loginUserReq(
  email: string,
  password: string
): Promise<HttpLoginUserResult> {
  let result;
  try {
    result = await httploginUser(email, password);
  } catch (e) {
    result = {
      data: {
        AccessToken: "",
        errorStatus: true,
        errorText: "Ошибка соединения"
      }
    };
    console.error(e);
  }
  if (result.data.errorStatus) {
    return result.data;
  }
  if (!result.data.AccessToken) {
    return result.data;
  }
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("AccessToken", result.data.AccessToken);
  }
  return result.data;
}

export interface LoginUserCheck {
  (email: string, password: string): Promise<HttpLoginUserResult>;
}

export interface LoginUserResultAction {
  type: string;
  payload: HttpLoginUserResult;
}
