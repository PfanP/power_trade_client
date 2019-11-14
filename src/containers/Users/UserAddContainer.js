import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'

import { UserAddComponent } from 'components/User'
import { userAddRequest } from 'actions/user.action'
import { makeSelectSignedInUser } from 'selectors/auth.selector'

const UserAddContainer = ({ userAddRequest, authUser }) => {
  return <UserAddComponent onSubmit={userAddRequest} authUser={authUser} />
}

const mapStateToProps = createStructuredSelector({
  authUser: makeSelectSignedInUser(),
})

const mapDispatchToProps = {
  userAddRequest,
}
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)
export default compose(withConnect)(UserAddContainer)
