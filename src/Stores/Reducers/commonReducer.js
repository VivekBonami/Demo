/* eslint-disable default-param-last */
import { commonConstants } from "../Constants/commonConstants";
import { autoCompleteConstants } from "../Constants/siteConstants/autocompleteConstants";

const initialState = {
  loader: false,
  error: {},
  autoCompleteData: [],
  autoCompleteFlightFromData: [],
  autoCompleteFlightToData: [],
};

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case commonConstants.SHOW_LOADER:
      return { ...state, loader: true };
    case commonConstants.HIDE_LOADER:
      return { ...state, loader: false };
    case autoCompleteConstants.AUTO_COMPLETE_REQUEST:
      return { ...state, loader: true, autoCompleteData: [] };
    case autoCompleteConstants.AUTO_COMPLETE_RESULT:
      return {
        ...state,
        loader: false,
        error: {},
        autoCompleteData: action.response.data.data,
      };
    case autoCompleteConstants.AUTO_COMPLETE_FAILURE:
      return {
        ...state,
        loader: false,
        error: action.payload.response.error,
        autoCompleteData: [],
      };
    case autoCompleteConstants.AUTO_COMPLETE_FROM_REQUEST:
      return { ...state, loader: true, autoCompleteFlightFromData: [] };
    case autoCompleteConstants.AUTO_COMPLETE_FROM_SUCCESS:
      return {
        ...state,
        loader: false,
        error: {},
        autoCompleteFlightFromData: action.response.data,
      };
    case autoCompleteConstants.AUTO_COMPLETE_TO_REQUEST:
      return { ...state, loader: true, autoCompleteFlightToData: [] };
    case autoCompleteConstants.AUTO_COMPLETE_TO_SUCCESS:
      return {
        ...state,
        loader: false,
        error: {},
        autoCompleteFlightToData: action.response.data,
      };
    default:
      return state;
  }
};
export default commonReducer;