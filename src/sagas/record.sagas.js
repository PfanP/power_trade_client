import { call, put, takeLatest } from 'redux-saga/effects'
import {
  RECORD_LIST_REQUEST,
  RECORD_DELETE_REQUEST,
  RECORD_ADD_REQUEST,
} from 'constants/record.const'
import { MESSAGE_ERROR, MESSAGE_SUCCESS } from 'constants/global.const'

import {
  recordListRequest as recordListRequestAction,
  recordListSuccess,
  recordListFailure,
  recordDeleteSuccess,
  recordDeleteFailure,
  recordAddFailure,
  recordAddSuccess,
} from 'actions/record.action'
import { setMessage } from 'actions/global.action'
import {
  recordListAPI,
  recordDeleteAPI,
  setAuthTokenToHeader,
  getErrMessage,
  recordAddAPI,
} from 'utils/API'
function* recordListRequest({ payload }) {
  try {
    yield setAuthTokenToHeader()
    const data = yield call(recordListAPI, {
      page: payload.currentPage,
      perPage: payload.perPage,
      playerID: payload.playerID
    })
    yield put(recordListSuccess(data.data))
  } catch (err) {
    yield put(recordListFailure(err))
  }
}

function* recordDeleteRequest({ payload }) {
  try {
    yield setAuthTokenToHeader()
    yield call(recordDeleteAPI, payload.id)
    yield put(recordDeleteSuccess())
    yield put(
      setMessage({
        type: MESSAGE_SUCCESS,
        title: 'Record Delete',
        message: 'Record successfully deleted',
        visible: true,
      })
    )
  } catch (err) {
    yield put(recordDeleteFailure(err))
    yield put(
      setMessage({
        type: MESSAGE_ERROR,
        title: 'Record Delete',
        message: getErrMessage(err),
        visible: true,
      })
    )
  }
  yield put(
    recordListRequestAction({
      currentPage: payload.currentPage,
      perPage: payload.perPage
    })
  )
}

function* recordAddRequest({ payload }) {
  try {
    yield setAuthTokenToHeader()
    const data = yield call(recordAddAPI, payload)
    yield put(recordAddSuccess(data.data))
    yield put(
      setMessage({
        type: MESSAGE_SUCCESS,
        title: 'Add Record',
        message: 'Record successfully created',
        visible: true,
      })
    )
  } catch (err) {
    yield put(recordAddFailure(err))
    yield put(
      setMessage({
        type: MESSAGE_ERROR,
        title: 'Add Record Error',
        message: getErrMessage(err),
        visible: true,
      })
    )
  }
}

export default [
  takeLatest(RECORD_LIST_REQUEST, recordListRequest),
  takeLatest(RECORD_DELETE_REQUEST, recordDeleteRequest),
  takeLatest(RECORD_ADD_REQUEST, recordAddRequest),
]
