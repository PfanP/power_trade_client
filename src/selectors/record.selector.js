import { createSelector } from 'reselect'
import { initialState } from 'reducers/record.reducer'

const selectRecord = (state) => state.record || initialState

const makeSelectRecordList = () =>
  createSelector(
    selectRecord,
    (recordState) => recordState.recordList.records
  )

const makeSelectTotalCount = () =>
  createSelector(
    selectRecord,
    (recordState) => recordState.recordList.totalCount
  )

const makeSelectedRecord = () =>
  createSelector(
    selectRecord,
    (recordState) => recordState.record
  )

const makeSelectPerPage = () =>
  createSelector(
    selectRecord,
    (recordState) => recordState.recordList.perPage
  )

const makeSelectCurrentPage = () =>
  createSelector(
    selectRecord,
    (recordState) => recordState.recordList.currentPage
  )

export {
  makeSelectRecordList,
  makeSelectedRecord,
  makeSelectPerPage,
  makeSelectCurrentPage,
  makeSelectTotalCount,
}
