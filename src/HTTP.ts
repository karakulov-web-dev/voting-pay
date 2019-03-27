import axios from "axios";

const apiServer = "http://localhost/";

const http = axios.create({
  baseURL: apiServer
});

export interface httpCheckAccessTokenResult {
  errorStatus: boolean;
  errorText: string;
  AccessTokenStatus: boolean;
}

export function httpCheckAccessToken(token: string) {
  http.get("");
}
