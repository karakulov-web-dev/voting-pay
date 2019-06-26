import { ThunkAnyAction } from "../commonTypes/common";
import { HttpRestorePasswordResult } from "../HTTP";
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
