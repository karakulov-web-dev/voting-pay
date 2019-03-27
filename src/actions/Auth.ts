import { ThunkAnyAction } from "../commonTypes/common";

interface AccessTokenCheck {
  (accessToken: string): Promise<boolean>;
}

export interface ActionChangeAuthStatus {
  type: string;
  payload: boolean;
}

export function checkAccessToken(
  accessToken: string,
  accessTokenChecker: AccessTokenCheck
): ThunkAnyAction {
  return (dispatch, getState) => {
    dispatch(changeAuthStatus(false));
  };
}

function changeAuthStatus(status: boolean) {
  return { type: "CHANGE_AUTH_STATUS", payload: status };
}
