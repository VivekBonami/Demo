/* eslint-disable import/prefer-default-export */
import { serialize } from "../Util/util";
import http from "./http";

function loginService(payload) {
  return http.post(
    `${process.env.REACT_APP_BASE_URL_USER}/api/v1/login`,
    payload
  );
}

function forgotPasswordService(payload) {
  const qs = serialize(payload);
  return http.get(
    `${process.env.REACT_APP_BASE_URL_USER}/api/v1/user/forgot-password?${qs}`,
    {
      params: { use_users_base_url: true },
    }
  );
}

function resetPasswordService(payload) {
  return http.post(
    `${process.env.REACT_APP_BASE_URL_USER}/api/v1/user/password-reset`,
    payload
  );
}

export const authService = {
  loginService,
  forgotPasswordService,
  resetPasswordService,
};