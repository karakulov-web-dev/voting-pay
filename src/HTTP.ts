import axios from "axios";
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

export function httpCheckAccessToken(
  token: string
): Promise<httpCheckAccessTokenResult> {
  return new Promise(function(resolve) {
    setTimeout(() => {
      resolve({
        errorStatus: false,
        errorText: "",
        AccessTokenStatus: false
      });
    }, 1000);
  });
}
