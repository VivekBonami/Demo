/* eslint-disable import/prefer-default-export */
import http from "./http";

function getAutoCompleteHotelSearch(payload) {
  return http
    .get(
      `${process.env.REACT_APP_BASE_URL_HOTEL}/v2/autosuggest/v2?keyword=${payload}`
    )
    .then((response) => response);
}
function getAutoCompleteFlightSearch(payload) {
  return http
    .get(
      `${process.env.REACT_APP_BASE_URL_FLIGHT}/flights/autocomplete?term=${payload}&is_popular=false`
    )
    .then((response) => response);
}

export const autoComplete = {
  getAutoCompleteHotelSearch,
  getAutoCompleteFlightSearch,
};