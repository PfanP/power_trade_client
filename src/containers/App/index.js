import React from 'react'
import { Helmet } from 'react-helmet'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { notification } from 'antd'

import { PrivateRoute, HomePage } from 'components'
import { LogInContainer, RegisterContainer } from 'containers/Auth'
import { makeSelectSignedInUser } from 'selectors/auth.selector'
import { makeUserList } from 'selectors/user.selector'
import { makeSelectAlert } from 'selectors/global.selector'
import { setMessage } from 'actions/global.action'
import { logoutRequest } from 'actions/auth.action'
import {
  MESSAGE_ERROR,
  MESSAGE_SUCCESS,
  MESSAGE_WARNING,
} from 'constants/global.const'

const success = (title, msg) => {
  notification.success({
    message: title,
    description: msg,
  })
}

const error = (title, msg) => {
  notification.error({
    message: title,
    description: msg,
  })
}

const warning = (title, msg) => {
  notification.warning({
    message: title,
    description: msg,
  })
}

const App = ({ user, userList, alert, setMessage, logoutRequest }) => {
  const { title, message, visible, type } = alert
  if (visible) {
    switch (type) {
      case MESSAGE_ERROR:
        error(title, message)
        break
      case MESSAGE_SUCCESS:
        success(title, message)
        break
      case MESSAGE_WARNING:
        warning(title, message)
        break
      default:
        break
    }
    setMessage({ type: '', title: '', message: '', visible: false })
  }
  return (
    <div className="App">
      <Helmet defaultTitle="PingPong - Test Project">
        <meta name="description" content="PingPong project" />
      </Helmet>
      <Switch>
        <Route exact path="/login" component={LogInContainer} />
        <Route exact path="/register" component={RegisterContainer} />
        <PrivateRoute
          path="/"
          component={HomePage}
          user={user}
          userList={userList}
          logout={logoutRequest}
        />
      </Switch>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectSignedInUser(),
  userList: makeUserList(),
  alert: makeSelectAlert(),
})

const mapDispatchToProps = {
  setMessage,
  logoutRequest,
}
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)
export default compose(withConnect)(App)
