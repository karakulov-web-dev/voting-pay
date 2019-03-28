import { ThunkAnyAction } from "../commonTypes/common";
import { httpCheckAccessToken, httpCheckAccessTokenResult } from "../HTTP";
import { resolve } from "url";

interface AccessTokenCheck {
  (accessToken: string): Promise<boolean>;
}

export interface ActionChangeAuthStatus {
  type: string;
  payload: boolean;
}

export async function accessTokenChecker(accessToken: string) {
  let result = await httpCheckAccessToken(accessToken);
  return result.AccessTokenStatus;
}

export function checkAccessToken(
  accessToken: string,
  accessTokenChecker: AccessTokenCheck
): ThunkAnyAction {
  return (dispatch, getState) => {
    (async () => {
      let result = await accessTokenChecker(accessToken);
      if (result) {
        dispatch(changeAuthStatus(true));
      } else {
        dispatch(changeAuthStatus(false));
      }
    })();
  };
}

function changeAuthStatus(status: boolean) {
  return { type: "CHANGE_AUTH_STATUS", payload: status };
}
