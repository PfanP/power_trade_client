import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE
} from 'constants/auth.const'

export const loginRequest = (payload) => ({
  type: LOGIN_REQUEST,
  payload,
})

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
})

export const loginFailure = (payload) => ({
  type: LOGIN_FAILURE,
  payload,
})

export const registerRequest = (payload) => ({
  type: REGISTER_REQUEST,
  payload,
})

export const registerSuccess = (payload) => ({
  type: REGISTER_SUCCESS,
  payload,
})

export const registerFailure = (payload) => ({
  type: REGISTER_FAILURE,
  payload,
})

export const logoutRequest = (payload) => ({
  type: LOGOUT_REQUEST,
  payload,
})

export const logoutSuccess = (payload) => ({
  type: LOGOUT_SUCCESS,
  payload,
})

export const logoutFailure = (payload) => ({
  type: LOGOUT_FAILURE,
  payload,
})