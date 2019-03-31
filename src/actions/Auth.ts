import { ThunkAnyAction } from "../commonTypes/common";
import { httpCheckAccessToken } from "../HTTP";

interface AccessTokenCheck {
  (accessToken: string): Promise<boolean>;
}

export interface ActionChangeAuthStatus {
  type: string;
  payload: boolean;
}

export async function accessTokenChecker(accessToken: string) {
  let result = await httpCheckAccessToken(accessToken);
  return result.data.AccessTokenStatus;
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

export function changeAuthStatus(status: boolean) {
  return { type: "CHANGE_AUTH_STATUS", payload: status };
}
