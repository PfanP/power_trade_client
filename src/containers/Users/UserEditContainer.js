import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import _ from 'lodash'

import { UserEditComponent } from 'components/User'
import { makeSelectPathName } from 'selectors/router.selector'
import { userLoadRequest, userUpdateRequest } from 'actions/user.action'
import { makeSelectedUser } from 'selectors/user.selector'
import { makeSelectSignedInUser } from 'selectors/auth.selector'

const UserEditContainer = ({
  pathName,
  userLoadRequest,
  userUpdateRequest,
  user,
  authUser,
}) => {
  const userID = _.split(pathName, '/')[2]
  const { data: userData, loading } = user
  useEffect(() => {
    userLoadRequest(userID)
  }, [userLoadRequest, userID])
  return (
    <UserEditComponent
      user={userData}
      authUser={authUser}
      onSubmit={userUpdateRequest}
      loading={loading}
    />
  )
}

const mapStateToProps = createStructuredSelector({
  pathName: makeSelectPathName(),
  user: makeSelectedUser(),
  authUser: makeSelectSignedInUser(),
})

const mapDispatchToProps = {
  userLoadRequest,
  userUpdateRequest,
}
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)
export default compose(withConnect)(UserEditContainer)
