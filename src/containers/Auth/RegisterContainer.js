import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { Redirect } from 'react-router'

import { RegisterComponent } from 'components/Auth'
import { registerRequest } from 'actions/auth.action'
import { makeSelectSignedInUser } from 'selectors/auth.selector'

class RegisterContainer extends React.Component {
  render() {
    const { user, registerRequest } = this.props
    if (user && user.currentUser) return <Redirect to="/" />

    return <RegisterComponent onSubmit={registerRequest} />
  }
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectSignedInUser(),
})

const mapDispatchToProps = (dispatch) => ({
  registerRequest: (payload) => dispatch(registerRequest(payload)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(RegisterContainer)
