import {
  RECORD_LIST_REQUEST,
  RECORD_LIST_SUCCESS,
  RECORD_LIST_FAILURE,
  RECORD_LOAD_REQUEST,
  RECORD_LOAD_SUCCESS,
  RECORD_LOAD_FAILURE,
  RECORD_UPDATE_REQUEST,
  RECORD_UPDATE_SUCCESS,
  RECORD_UPDATE_FAILURE,
  RECORD_DELETE_REQUEST,
  RECORD_DELETE_SUCCESS,
  RECORD_DELETE_FAILURE,
  RECORD_ADD_REQUEST,
  RECORD_ADD_SUCCESS,
  RECORD_ADD_FAILURE,
  RECORD_CHANGE_TABLE_PAGE_REQUEST,
  RECORD_CHANGE_TABLE_PAGE_SUCCESS,
  RECORD_CHANGE_TABLE_PAGE_FAILURE,
} from 'constants/record.const'

export const recordListRequest = (payload) => ({
  type: RECORD_LIST_REQUEST,
  payload,
})

export const recordListSuccess = (payload) => ({
  type: RECORD_LIST_SUCCESS,
  payload,
})

export const recordListFailure = (payload) => ({
  type: RECORD_LIST_FAILURE,
  payload,
})

export const recordLoadRequest = (payload) => ({
  type: RECORD_LOAD_REQUEST,
  payload,
})

export const recordLoadSuccess = (payload) => ({
  type: RECORD_LOAD_SUCCESS,
  payload,
})

export const recordLoadFailure = (payload) => ({
  type: RECORD_LOAD_FAILURE,
  payload,
})

export const recordUpdateRequest = (payload) => ({
  type: RECORD_UPDATE_REQUEST,
  payload,
})

export const recordUpdateSuccess = (payload) => ({
  type: RECORD_UPDATE_SUCCESS,
  payload,
})

export const recordUpdateFailure = (payload) => ({
  type: RECORD_UPDATE_FAILURE,
  payload,
})

export const recordDeleteRequest = (payload) => ({
  type: RECORD_DELETE_REQUEST,
  payload,
})

export const recordDeleteSuccess = (payload) => ({
  type: RECORD_DELETE_SUCCESS,
  payload,
})

export const recordDeleteFailure = (payload) => ({
  type: RECORD_DELETE_FAILURE,
  payload,
})

export const recordAddRequest = (payload) => ({
  type: RECORD_ADD_REQUEST,
  payload,
})

export const recordAddSuccess = (payload) => ({
  type: RECORD_ADD_SUCCESS,
  payload,
})

export const recordAddFailure = (payload) => ({
  type: RECORD_ADD_FAILURE,
  payload,
})

export const recordChangeTablePageRequest = (payload) => ({
  type: RECORD_CHANGE_TABLE_PAGE_REQUEST,
  payload,
})

export const recordChangeTablePageSuccess = (payload) => ({
  type: RECORD_CHANGE_TABLE_PAGE_SUCCESS,
})

export const recordChangeTablePageFailure = (payload) => ({
  type: RECORD_CHANGE_TABLE_PAGE_FAILURE,
  payload,
})
