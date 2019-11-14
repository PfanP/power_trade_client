import { createSelector } from 'reselect'
import { initialState } from 'reducers/user.reducer'

const selectUser = (state) => state.user || initialState

const makeUserList = () =>
  createSelector(
    selectUser,
    (userState) => userState.userList.users
  )

const makeSelectedUser = () =>
  createSelector(
    selectUser,
    (userState) => userState.user
  )

const makeSelectPerPage = () =>
  createSelector(
    selectUser,
    (userState) => userState.userList.perPage
  )

const makeSelectCurrentPage = () =>
  createSelector(
    selectUser,
    (userState) => userState.userList.currentPage
  )

const makeSelectLoading = () =>
  createSelector(
    selectUser,
    (userState) => userState.userList.loading
  )
const makeSelectTotalCount = () =>
  createSelector(
    selectUser,
    (userState) => userState.userList.totalCount
  )
export {
  makeUserList,
  makeSelectedUser,
  makeSelectPerPage,
  makeSelectCurrentPage,
  makeSelectLoading,
  makeSelectTotalCount,
}
