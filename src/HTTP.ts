import axios, { AxiosPromise } from "axios";
import { resolve } from "url";

const apiServer = "http://localhost/";

const http = axios.create({
  baseURL: apiServer
});

export interface httpCheckAccessTokenResult {
  errorStatus: boolean;
  errorText: string;
  AccessTokenStatus: boolean;
}
export type CheckAccessTokenPromise = AxiosPromise<httpCheckAccessTokenResult>;

export function httpCheckAccessToken(token: string) {
  return http.post<httpCheckAccessTokenResult>("/check-access-token", {
    payload: {
      AccessToken: token
    }
  });
}
