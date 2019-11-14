import produce from 'immer'
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT_REQUEST,
} from 'constants/auth.const'

export const initialState = {
  loading: false,
  currentUser: null,
  error: null,
}

const authReducer = (state = initialState, action = {type: ''}) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        draft.loading = true
        break
      case LOGIN_SUCCESS:
        draft.currentUser = action.payload
        draft.loading = false
        break
      case LOGIN_FAILURE:
        draft.loading = false
        draft.error = action.payload
        break
      case REGISTER_REQUEST:
        draft.loading = true
        break
      case REGISTER_SUCCESS:
        draft.loading = false
        draft.currentUser = action.payload
        break
      case REGISTER_FAILURE:
        draft.loading = false
        draft.error = action.payload
        break
      case LOGOUT_REQUEST:
        draft.currentUser = null
        draft.loading = false
        draft.error = null
        break
      default:
        break
    }
  })

export default authReducer
