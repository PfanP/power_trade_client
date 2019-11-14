import { call, put, takeLatest } from 'redux-saga/effects'
import {
  USER_LIST_REQUEST,
  USER_LOAD_REQUEST,
  USER_UPDATE_REQUEST,
  USER_DELETE_REQUEST,
  USER_ADD_REQUEST,
} from 'constants/user.const'
import { MESSAGE_ERROR, MESSAGE_SUCCESS } from 'constants/global.const'

import {
  userListRequest as userListRequestAction,
  userListSuccess,
  userListFailure,
  userLoadSuccess,
  userLoadFailure,
  userDeleteSuccess,
  userDeleteFailure,
  userUpdateSuccess,
  userUpdateFailure,
  userAddFailure,
  userAddSuccess,
} from 'actions/user.action'
import { setMessage } from 'actions/global.action'
import {
  userListAPI,
  userLoadAPI,
  userDeleteAPI,
  setAuthTokenToHeader,
  userUpdateAPI,
  getErrMessage,
  userAddAPI,
} from 'utils/API'
function* userListRequest({ payload }) {
  try {
    yield setAuthTokenToHeader()
    const data = yield call(userListAPI, {
      page: payload.currentPage,
      perPage: payload.perPage,
    })
    yield put(userListSuccess(data.data))
  } catch (err) {
      console.log(err)
    yield put(userListFailure(err))
  }
}

function* userDeleteRequest({ payload }) {
  try {
    yield setAuthTokenToHeader()
    yield call(userDeleteAPI, payload.id)
    yield put(userDeleteSuccess())
    yield put(
      setMessage({
        type: MESSAGE_SUCCESS,
        title: 'User Delete',
        message: 'User successfully deleted',
        visible: true,
      })
    )
  } catch (err) {
    yield put(userDeleteFailure(err))
    yield put(
      setMessage({
        type: MESSAGE_ERROR,
        title: 'User Delete',
        message: getErrMessage(err),
        visible: true,
      })
    )
  }
  yield put(
    userListRequestAction({
      currentPage: payload.currentPage,
      perPage: payload.perPage,
    })
  )
}

function* userLoadRequest({ payload }) {
  try {
    yield setAuthTokenToHeader()
    const data = yield call(userLoadAPI, payload)
    yield put(userLoadSuccess(data.data))
  } catch (err) {
    yield put(userLoadFailure(err))
  }
}

function* userUpdateRequest({ payload }) {
  try {
    yield setAuthTokenToHeader()
    const data = yield call(userUpdateAPI, payload.id, payload)
    yield put(userUpdateSuccess(data.data))
    yield put(
      setMessage({
        type: MESSAGE_SUCCESS,
        title: 'User Update',
        message: 'User successfully updated',
        visible: true,
      })
    )
  } catch (err) {
    yield put(userUpdateFailure(err))
    yield put(
      setMessage({
        type: MESSAGE_ERROR,
        title: 'User Update Error',
        message: getErrMessage(err),
        visible: true,
      })
    )
  }
}

function* userAddRequest({ payload }) {
  try {
    yield setAuthTokenToHeader()
    const data = yield call(userAddAPI, payload)
    yield put(userAddSuccess(data.data))
    yield put(
      setMessage({
        type: MESSAGE_SUCCESS,
        title: 'User Create',
        message: 'User successfully created',
        visible: true,
      })
    )
  } catch (err) {
    yield put(userAddFailure(err))
    yield put(
      setMessage({
        type: MESSAGE_ERROR,
        title: 'User Create Error',
        message: getErrMessage(err),
        visible: true,
      })
    )
  }
}

export default [
  takeLatest(USER_LIST_REQUEST, userListRequest),
  takeLatest(USER_LOAD_REQUEST, userLoadRequest),
  takeLatest(USER_DELETE_REQUEST, userDeleteRequest),
  takeLatest(USER_UPDATE_REQUEST, userUpdateRequest),
  takeLatest(USER_ADD_REQUEST, userAddRequest),
]
