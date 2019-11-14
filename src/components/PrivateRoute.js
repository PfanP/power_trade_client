import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { ADMIN } from 'constants/auth.const'

export const PrivateRoute = ({
  component: Component,
  user: User,
  userList,
  logout,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      User ? (
        <Component {...props} logout={logout} user={User} userList={userList} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      )
    }
  />
)

export const AdminRoute = ({ component: Component, user: User, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      User && User.role === ADMIN ? (
        <Component {...props} user={User} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
)
