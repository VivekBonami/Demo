/* eslint-disable import/prefer-default-export */
import { autoComplete } from "../../api/commonService";
import { commonConstants } from "../Constants/commonConstants";
import { autoCompleteConstants } from "../Constants/siteConstants/autocompleteConstants";

export const commonActions = {
  showLoader,
  hideLoader,
  hotelSearchAutoComplete,
  flightFromSearchAutoComplete,
  flightToSearchAutoComplete,
};

function showLoader() {
  return (dispatch) => {
    dispatch(request(commonConstants.SHOW_LOADER));
  };
  function request() {
    return { type: commonConstants.SHOW_LOADER };
  }
}
function hideLoader() {
  return (dispatch) => {
    dispatch(request(commonConstants.HIDE_LOADER));
  };
}

function hotelSearchAutoComplete(payload) {
  return (dispatch) => {
    dispatch(request(autoCompleteConstants.AUTO_COMPLETE_REQUEST));
    autoComplete.getAutoCompleteHotelSearch(payload).then(
      (response) => {
        dispatch(success(autoCompleteConstants.AUTO_COMPLETE_RESULT, response));
      },
      (error) => {
        dispatch(failure(autoCompleteConstants.AUTO_COMPLETE_FAILURE, error));
      }
    );
  };
}

function flightFromSearchAutoComplete(payload) {
  return (dispatch) => {
    dispatch(request(autoCompleteConstants.AUTO_COMPLETE_FROM_REQUEST));
    autoComplete.getAutoCompleteFlightSearch(payload).then(
      (response) => {
        dispatch(
          success(autoCompleteConstants.AUTO_COMPLETE_FROM_SUCCESS, response)
        );
      },
      (error) => {
        dispatch(failure(autoCompleteConstants.AUTO_COMPLETE_FAILURE, error));
      }
    );
  };
}

function flightToSearchAutoComplete(payload) {
  return (dispatch) => {
    dispatch(request(autoCompleteConstants.AUTO_COMPLETE_TO_REQUEST));
    autoComplete.getAutoCompleteFlightSearch(payload).then(
      (response) => {
        dispatch(
          success(autoCompleteConstants.AUTO_COMPLETE_TO_SUCCESS, response)
        );
      },
      (error) => {
        dispatch(failure(autoCompleteConstants.AUTO_COMPLETE_FAILURE, error));
      }
    );
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