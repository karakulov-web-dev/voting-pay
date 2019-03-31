import { ThunkAnyAction } from "../commonTypes/common";
import { httpRegistrationUser, HttpRegistrationUserResult } from "../HTTP";

export const registrationUser = function(email: string, password: string) {
  return registrationUserFlex(email, password, registrationUserReq);
};

export function registrationUserFlex(
  email: string,
  password: string,
  RegistrationUser: RegistrationUserCheck
): ThunkAnyAction {
  return async (dispatch, getState) => {
    let result = await RegistrationUser(email, password);
    let ResultAction: RegistrationUserResultAction = {
      type: "REGISTRATION_USER_RESULT",
      payload: result
    };
    dispatch(ResultAction);
  };
}

async function registrationUserReq(
  email: string,
  password: string
): Promise<HttpRegistrationUserResult> {
  let result;
  try {
    result = await httpRegistrationUser(email, password);
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

export interface RegistrationUserCheck {
  (email: string, password: string): Promise<HttpRegistrationUserResult>;
}

export interface RegistrationUserResultAction {
  type: string;
  payload: HttpRegistrationUserResult;
}
