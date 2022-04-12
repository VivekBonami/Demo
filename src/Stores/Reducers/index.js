import { combineReducers } from "redux";
import authReducer from "./authReducer";
import commonReducer from "./commonReducer";

const reducers = (state, action) => {
  switch (action.type) {
    default: {
      const combinedReducer = combineReducers({ authReducer, commonReducer });
      return combinedReducer(state, action);
    }
  }
};
export default reducers;
