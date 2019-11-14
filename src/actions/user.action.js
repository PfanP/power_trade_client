import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAILURE,
  USER_LOAD_REQUEST,
  USER_LOAD_SUCCESS,
  USER_LOAD_FAILURE,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAILURE,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAILURE,
  USER_ADD_REQUEST,
  USER_ADD_SUCCESS,
  USER_ADD_FAILURE,
  USER_CHANGE_TABLE_PAGE_REQUEST,
} from 'constants/user.const'

export const userListRequest = (payload) => ({
  type: USER_LIST_REQUEST,
  payload,
})

export const userListSuccess = (payload) => ({
  type: USER_LIST_SUCCESS,
  payload,
})

export const userListFailure = (payload) => ({
  type: USER_LIST_FAILURE,
  payload,
})

export const userLoadRequest = (payload) => ({
  type: USER_LOAD_REQUEST,
  payload,
})

export const userLoadSuccess = (payload) => ({
  type: USER_LOAD_SUCCESS,
  payload,
})

export const userLoadFailure = (payload) => ({
  type: USER_LOAD_FAILURE,
  payload,
})

export const userUpdateRequest = (payload) => ({
  type: USER_UPDATE_REQUEST,
  payload,
})

export const userUpdateSuccess = (payload) => ({
  type: USER_UPDATE_SUCCESS,
  payload,
})

export const userUpdateFailure = (payload) => ({
  type: USER_UPDATE_FAILURE,
  payload,
})

export const userDeleteRequest = (payload) => ({
  type: USER_DELETE_REQUEST,
  payload,
})

export const userDeleteSuccess = (payload) => ({
  type: USER_DELETE_SUCCESS,
  payload,
})

export const userDeleteFailure = (payload) => ({
  type: USER_DELETE_FAILURE,
  payload,
})

export const userAddRequest = (payload) => ({
  type: USER_ADD_REQUEST,
  payload,
})

export const userAddSuccess = (payload) => ({
  type: USER_ADD_SUCCESS,
  payload,
})

export const userAddFailure = (payload) => ({
  type: USER_ADD_FAILURE,
  payload,
})

export const userChangeTablePageRequest = (payload) => ({
  type: USER_CHANGE_TABLE_PAGE_REQUEST,
  payload,
})
