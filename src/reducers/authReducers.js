import { combineReducers } from "redux";
import { User } from "../constants";
const {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
} = User;

const signupState = {
  response: null,
  loading: true,
  error: null,
};

const loginState = {
  response: null,
  loading: true,
  error: null,
};

const signupReducer = (state = signupState, action) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return { ...state, loading: true };

    case USER_SIGNUP_SUCCESS:
      return { ...state, loading: false, response: action.payload, error: null};
    case USER_SIGNUP_FAILURE:
      return { ...state, loading: false, error: action.error, response: null };
    default:
      return state;
  }
};

const loginReducer = (state = loginState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { ...state, loading: true };

    case USER_LOGIN_SUCCESS:
      return { ...state, loading: true };
    case USER_LOGIN_FAILURE:
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default combineReducers({
  signupReducer,
  loginReducer,
});
