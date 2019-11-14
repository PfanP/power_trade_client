import produce from 'immer'
import {
  RECORD_LIST_SUCCESS,
  RECORD_LIST_FAILURE,
  RECORD_LOAD_SUCCESS,
  RECORD_LOAD_FAILURE,
  RECORD_UPDATE_SUCCESS,
  RECORD_UPDATE_FAILURE,
  RECORD_DELETE_SUCCESS,
  RECORD_DELETE_FAILURE,
  RECORD_ADD_FAILURE,
  RECORD_CHANGE_TABLE_PAGE_REQUEST,
  RECORD_ADD_SUCCESS,
} from 'constants/record.const'

export const initialState = {
  loading: false,
  recordList: {
    records: [],
    loading: false,
    currentPage: 1,
    perPage: 10,
    totalCount: 0,
  },
  record: {
    loading: false,
    error: null,
    data: {},
  },
  error: null,
}

const recordReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case RECORD_LIST_SUCCESS:
        draft.recordList.records = [...action.payload]
        draft.recordList.totalCount = action.payload.count
        draft.recordList.loading = false
        break
      case RECORD_LIST_FAILURE:
        draft.recordList.loading = false
        draft.recordList.error = action.payload
        draft.recordList.records = []
        break
      case RECORD_LOAD_SUCCESS:
        draft.record.loading = false
        draft.record.data = action.payload
        break
      case RECORD_LOAD_FAILURE:
        draft.record.loading = false
        draft.record.error = action.payload
        break
      case RECORD_UPDATE_SUCCESS:
        draft.record.data = action.payload
        draft.record.loading = false
        break
      case RECORD_UPDATE_FAILURE:
        draft.record.error = action.payload
        draft.record.loading = false
        break
      case RECORD_DELETE_SUCCESS:
        draft.recordList.loading = false
        break
      case RECORD_DELETE_FAILURE:
        draft.recordList.loading = false
        draft.recordList.error = action.payload
        break
      case RECORD_ADD_FAILURE:
        draft.record.error = action.payload
        break
      case RECORD_CHANGE_TABLE_PAGE_REQUEST:
        draft.recordList.currentPage = action.payload
        draft.recordList.loading = true
        break
      default:
        break
    }
  })

export default recordReducer
