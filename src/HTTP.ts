import axios, { AxiosPromise } from "axios";
import { resolve } from "url";

let prodaction;
const apiServer = prodaction ? "https://votingpay.com/" : "http://localhost/";

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
  return http.post<httpCheckAccessTokenResult>("/auth/check-access-token", {
    AccessToken: token
  });
}

export interface HttpRegistrationUserResult {
  AccessToken: string;
  errorStatus: boolean;
  errorText: string;
}
export function httpRegistrationUser(email: string, password: string) {
  return http.post<HttpRegistrationUserResult>("/auth/registration-user", {
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
  return http.post<HttpLoginUserResult>("/auth/login-user", {
    email,
    password
  });
}

export interface HttpRestorePasswordResult {
  restorePasswordSessionId: string;
  errorStatus: boolean;
  errorText: string;
}

export function httpRestorePassword(email: string) {
  return http.post<HttpRestorePasswordResult>("/auth/restore-password", {
    email
  });
}

export interface HttpVerificationCodeResult {
  errorStatus: boolean;
  errorText: string;
  AccessToken?: string;
}

export function restorePasswordVerificationCode(
  code: string,
  sessionId: string,
  newPassword?: string
) {
  return http.post<HttpVerificationCodeResult>(
    "/auth/restore-password-verification-code",
    {
      code,
      sessionId,
      newPassword
    }
  );
}
