import { call, put, takeLatest } from 'redux-saga/effects'
import {
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  CALORIES_UPDATE_REQUEST,
} from 'constants/auth.const'
import { MESSAGE_ERROR, MESSAGE_SUCCESS } from 'constants/global.const'

import {
  loginSuccess,
  loginFailure,
  registerSuccess,
  registerFailure,
} from 'actions/auth.action'
import { setMessage } from 'actions/global.action'
import {
  loginAPI,
  registerAPI,
  getErrMessage,
  setAuthTokenToHeader,
} from 'utils/API'

function* loginRequest({ payload }) {
  try {
    const data = yield call(loginAPI, {
      email: payload.email,
      password: payload.password,
    })
    yield put(loginSuccess(data.data))
  } catch (err) {
    yield put(loginFailure(err))
    yield put(
      setMessage({
        type: MESSAGE_ERROR,
        title: 'Sign In Error',
        message: getErrMessage(err),
        visible: true,
      })
    )
  }
}

function* registerRequest({ payload }) {
  try {
    const data = yield call(registerAPI, {
      email: payload.email,
      name: payload.name,
      password: payload.password,
    })
    yield put(registerSuccess(data.data))
    yield put(
      setMessage({
        type: MESSAGE_SUCCESS,
        title: 'Sign Up Success',
        message: 'Successfully registered!',
        visible: true,
      })
    )
  } catch (err) {
    yield put(registerFailure(err))
    yield put(
      setMessage({
        type: MESSAGE_ERROR,
        title: 'Sign Up Error',
        message: getErrMessage(err),
        visible: true,
      })
    )
  }
}

export default [
  takeLatest(LOGIN_REQUEST, loginRequest),
  takeLatest(REGISTER_REQUEST, registerRequest),
]
