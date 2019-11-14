import produce from 'immer'
import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAILURE,
  USER_LOAD_REQUEST,
  USER_LOAD_SUCCESS,
  USER_LOAD_FAILURE,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAILURE,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAILURE,
  USER_ADD_FAILURE,
  USER_CHANGE_TABLE_PAGE_REQUEST,
  USER_ADD_SUCCESS,
} from 'constants/user.const'

export const initialState = {
  loading: false,
  userList: {
    users: [],
    loading: true,
    currentPage: 1,
    perPage: 10,
    totalCount: 0,
  },
  user: {
    loading: true,
    error: null,
    data: null,
  },
  error: null,
}

const userReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case USER_LIST_REQUEST:
        draft.userList.loading = true
        break
      case USER_LIST_SUCCESS:
        draft.userList.users = [...action.payload]
        draft.userList.totalCount = action.payload.count
        draft.userList.loading = false
        break
      case USER_LIST_FAILURE:
        draft.userList.loading = false
        draft.userList.error = action.payload
        draft.userList.users = []
        break
      case USER_LOAD_REQUEST:
        draft.user.loading = true
        break
      case USER_LOAD_SUCCESS:
        draft.user.loading = false
        draft.user.data = action.payload
        break
      case USER_LOAD_FAILURE:
        draft.user.loading = false
        draft.user.error = action.payload
        break
      case USER_UPDATE_SUCCESS:
        draft.user.data = action.payload
        draft.user.loading = false
        break
      case USER_UPDATE_FAILURE:
        draft.user.error = action.payload
        draft.user.loading = false
        break
      case USER_DELETE_SUCCESS:
        draft.userList.loading = false
        break
      case USER_DELETE_FAILURE:
        draft.userList.loading = false
        draft.userList.error = action.payload
        break
      case USER_ADD_SUCCESS:
          draft.userList = [...draft.userList, action.payload];
          break;
      case USER_ADD_FAILURE:
        draft.user.error = action.payload
        break
      case USER_CHANGE_TABLE_PAGE_REQUEST:
        draft.userList.loading = true
        draft.userList.currentPage = action.payload
        break
      default:
        break
    }
  })

export default userReducer
