import { ThunkAnyAction } from "../commonTypes/common";
import { HttpRestorePasswordResult, HttpVerificationCodeResult } from "../HTTP";
import { AxiosPromise } from "axios";

export function restorePassword(
  req: RestorePasswordReq,
  email: string
): ThunkAnyAction {
  return async dispatch => {
    let result;
    try {
      result = await req(email);
    } catch (e) {
      console.log(e);
    }
    let payload: HttpRestorePasswordResult = {
      restorePasswordSessionId: "",
      errorStatus: true,
      errorText: ""
    };
    if (result) {
      payload = result.data;
    }
    let action: restorePasswordAction = {
      type: "SET_RESTORE_PASSWORD_SESSION_ID",
      payload
    };
    dispatch(action);
  };
}

interface RestorePasswordReq {
  (email: string): AxiosPromise<HttpRestorePasswordResult>;
}

export interface restorePasswordAction {
  type: string;
  payload: HttpRestorePasswordResult;
}

interface VerificationCodeReq {
  (code: string, sessionId: string, newPassword?: string): AxiosPromise<
    HttpVerificationCodeResult
  >;
}

export interface RestorePasswordVerificationAction {
  type: string;
  payload: {
    status: boolean;
    code: string;
  };
}

export function restorePasswordVerification(
  req: VerificationCodeReq,
  code: string,
  sessionId: string,
  newPassword?: string
): ThunkAnyAction {
  return async dispatch => {
    var result = await req(code, sessionId, newPassword);

    if (result.data.AccessToken) {
      localStorage.setItem("AccessToken", result.data.AccessToken);
      dispatch({
        type: "SET_RESTORE_PASSWORD_VERIFICATION_CODE",
        payload: {
          status: true,
          code: ""
        }
      });
      dispatch({
        type: "SET_RESTORE_PASSWORD_SESSION_ID",
        payload: {
          restorePasswordSessionId: "",
          errorStatus: false,
          errorText: ""
        }
      });
      dispatch({
        type: "CHANGE_AUTH_STATUS",
        payload: true
      });
      return;
    }

    let action: RestorePasswordVerificationAction = {
      type: "SET_RESTORE_PASSWORD_VERIFICATION_CODE",
      payload: {
        status: !result.data.errorStatus,
        code: code
      }
    };
    dispatch(action);
  };
}
