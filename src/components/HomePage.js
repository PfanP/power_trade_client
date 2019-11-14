import React, { useState } from 'react'
import { Layout, Menu, Icon, Row, Col } from 'antd'
import { Link, Switch } from 'react-router-dom'
import styled from 'styled-components'
import { Route, Redirect } from 'react-router'
/* eslint-disable import/first */

const { Sider, Content } = Layout
import { AdminRoute } from 'components/PrivateRoute'

import { RecordContainer } from 'containers/Record'

import {
  UsersContainer,
  UserAddContainer,
  UserEditContainer,
} from 'containers/Users'

import { ADMIN } from 'constants/auth.const'

const LogoLink = styled(Link)`
  font-size: 24px;
  color: #eeeeee;
  margin: 20px 0;
  display: block;
  text-align: center;
`

const StyledContent = styled(Content)`
  padding: 20px !important;
  background-color: white;
`

export default ({ logout, user, userList }) => {
  const [collapsed, setCollapsed] = useState(false)

  const toggle = () => {
    setCollapsed(!collapsed)
  }

  const { role } = user
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={toggle}
        breakpoint="md"
        collapsedWidth={0}
      >
        <LogoLink to="/">Power Trade</LogoLink>
        <Menu theme="dark" mode="inline">
          {role === ADMIN && (
            <Menu.Item key="user">
              <Link to="/users">
                <Icon type="user" />
                <span>Users</span>
              </Link>
            </Menu.Item>
          )}
          <Menu.Item key="3">
            <Link to="/records">
              <Icon type="table" />
              <span>Record</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="4" onClick={() => logout()}>
            <Icon type="logout" />
            <span>Log Out</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <StyledContent>
          <Row>
            <Col xs={{ offset: 0, span: 24 }} sm={{ offset: 4, span: 16 }}>
              <Switch>
                <AdminRoute
                  exact
                  path="/users"
                  component={UsersContainer}
                  user={user}
                  userList={userList}
                />
                <AdminRoute
                  exact
                  path="/users/add"
                  component={UserAddContainer}
                  user={user}
                />
                <AdminRoute
                  exact
                  path="/users/:id"
                  component={UserEditContainer}
                  user={user}
                />
                <Route
                  exact
                  path="/records"
                  component={RecordContainer}
                  user={user}
                />
                <Route exact path="/" component={() => <Redirect to="/records" />} />
              </Switch>
            </Col>
          </Row>
        </StyledContent>
      </Layout>
    </Layout>
  )
}
