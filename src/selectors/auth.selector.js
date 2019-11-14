import { createSelector } from 'reselect'
import { initialState } from 'reducers/auth.reducer'

const selectAuth = (state) => state.auth || initialState

const makeSelectSignedInUser = () =>
  createSelector(
    selectAuth,
    (authState) => (authState.currentUser ? authState.currentUser.user : null)
  )

export { makeSelectSignedInUser }
