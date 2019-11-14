import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { Redirect } from 'react-router'

import { LoginComponent } from 'components/Auth'
import { loginRequest } from 'actions/auth.action'
import { makeSelectSignedInUser } from 'selectors/auth.selector'
class LoginContainer extends React.Component {
  render() {
    const { user } = this.props
    if (user) return <Redirect to="/" />
    return <LoginComponent onSubmit={this.props.loginRequest} />
  }
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectSignedInUser(),
})

const mapDispatchToProps = (dispatch) => ({
  loginRequest: (payload) => dispatch(loginRequest(payload)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(LoginContainer)
