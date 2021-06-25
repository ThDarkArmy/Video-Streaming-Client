import { combineReducers } from "redux";
import * as Actions from "../actions/authActions";

const loggedInUser = (state = {}, action) => {
  switch (action.type) {
    case Actions.LOGGED_IN_USER_DETAILS:
      return {};
    default:
      return state;
  }
};

const userDetails = (state = {}, action) => {
  switch (action.type) {
    case Actions.FETCH_USER_DETAILS:
      return {};
    default:
      return state;
  }
};

export default combineReducers({
  loggedInUser,
  userDetails
});
