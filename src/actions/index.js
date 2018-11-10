import * as ActionTypes from "../constants/ActionTypes";

export function setAuth(auth) {
  return {
    type: ActionTypes.SET_AUTH,
    auth
  };
}

export function resetAuth() {
  return {
    type: ActionTypes.RESET_AUTH
  };
}

export function getAuth(username, password) {
  return {
    type: ActionTypes.GET_AUTH,
    username,
    password
  };
}

export function loadingStart() {
  return {
    type: ActionTypes.LOADING_START
  };
}

export function loadingEnd() {
  return {
    type: ActionTypes.LOADING_END
  };
}

export function showErrorMessage(message) {
  return {
    type: ActionTypes.SHOW_ERROR_MESSAGE,
    message
  };
}

export function hideErrorMessage(message) {
  return {
    type: ActionTypes.HIDE_ERROR_MESSAGE
  };
}
