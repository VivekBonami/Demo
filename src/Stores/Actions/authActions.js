/* eslint-disable import/prefer-default-export */
import { authService } from "../../api/authService";
import { authConstants } from "../Constants/authConstants";
import { commonActions } from "./commonActions";

export const authActions = {
  loginRequest,
  forgotPasswordRequest,
  resetPasswordRequest,
  resetServeError,
};

function loginRequest(payload) {
  return (dispatch) => {
    dispatch(request(authConstants.LOGIN_REQUEST));
    commonActions.showLoader();
    authService.loginService(payload).then(
      (response) => {
        if (response.status === 200 && response.data.access_token) {
          localStorage.setItem("accessToken", response.data.access_token);
          window.location = "/landing";
        }
        dispatch(success(authConstants.LOGIN_SUCCESS, response));
        commonActions.hideLoader();
      },
      (error) => {
        dispatch(failure(authConstants.LOGIN_FAILURE, error));
        commonActions.hideLoader();
      }
    );
  };
}

function forgotPasswordRequest(payload) {
  return (dispatch) => {
    dispatch(request(authConstants.FORGOT_PASSWORD_REQUEST));
    commonActions.showLoader();
    authService.forgotPasswordService(payload).then(
      (response) => {
        dispatch(success(authConstants.FORGOT_PASSWORD_SUCCESS, response));
        commonActions.hideLoader();
      },
      (error) => {
        dispatch(failure(authConstants.FORGOT_PASSWORD_FAILURE, error));
        commonActions.hideLoader();
      }
    );
  };
}

function resetPasswordRequest(payload) {
  return (dispatch) => {
    dispatch(request(authConstants.RESET_PASSWORD_REQUEST));
    commonActions.showLoader();
    authService.resetPasswordService(payload).then(
      (response) => {
        dispatch(success(authConstants.RESET_PASSWORD_SUCCESS, response));
        commonActions.hideLoader();
      },
      (error) => {
        dispatch(failure(authConstants.RESET_PASSWORD_FAILURE, error));
        commonActions.hideLoader();
      }
    );
  };
}

function resetServeError() {
  return (dispatch) => {
    dispatch(request(authConstants.RESET_SERVER_ERROR));
  };
}

function request(action, payload) {
  return { type: action, payload };
}

function success(action, response) {
  return { type: action, response };
}

function failure(action, error) {
  return { type: action, error };
}