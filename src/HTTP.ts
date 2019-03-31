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
    AccessToken: token
  });
}

export interface HttpRegistrationUserResult {
  AccessToken: string;
  errorStatus: boolean;
  errorText: string;
}
export function httpRegistrationUser(email: string, password: string) {
  return http.post<HttpRegistrationUserResult>("/registration-user", {
    email,
    password
  });
}

export interface HttpLoginUserResult {
  AccessToken: string;
  errorStatus: boolean;
  errorText: string;
}

export function httploginUser(email: string, password: string) {
  return http.post<HttpLoginUserResult>("/login-user", {
    email,
    password
  });
}
