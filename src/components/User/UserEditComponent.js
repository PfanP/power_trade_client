import React, { Fragment } from 'react'
import { Form, Input, Button, Row, Col, Select, Spin } from 'antd'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const { Option } = Select
const { Password } = Input

const StyledCol = styled(Col)`
  border: 1px solid #ebedf0;
  border-radius: 2px;
  background: #ffffff;
`

const StyledForm = styled(Form)`
  min-width: 100%;
  padding: 50px !important;
  @media (max-width: 576px) {
    padding: 20px !important;
  }
`

const MaxHeightRow = styled(Row)`
  height: 100vh;
`

const RegisterButton = styled(Button)`
  background: #4caf50 !important;
  border: 0 !important;
  margin-right: 10px;
`
const HeaderP = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-top: 50px;
`
const UserEditForm = ({ onSubmit, form, user, authUser, loading }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    form.validateFields((err, values) => {
      if (!err) {
        if (!values.password) delete values.password
        values.id = user.id
        onSubmit(values)
      }
    })
  }
  const { getFieldDecorator } = form
  if (loading) {
    return (
      <MaxHeightRow type="flex" justify="center" align="middle">
        <Spin size="large" />
      </MaxHeightRow>
    )
  }
  return (
    <Fragment>
      <HeaderP>Edit User</HeaderP>
      <Row type="flex">
        <StyledCol xs={{ span: 24 }} sm={20}>
          <StyledForm onSubmit={handleSubmit}>
            <Form.Item label="User Name">
              {getFieldDecorator('name', {
                initialValue: user.name,
                rules: [{ required: true, message: 'Please input your username!' }],
              })(<Input placeholder="User Name" size="large" />)}
            </Form.Item>
            <Form.Item label="E-mail">
              {getFieldDecorator('email', {
                initialValue: user.email,
                rules: [
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ],
              })(<Input placeholder="Email" size="large" />)}
            </Form.Item>
            <Form.Item label="Password">
              {getFieldDecorator('password', {})(<Password size="large" />)}
            </Form.Item>
            <Form.Item label="Role">
              {getFieldDecorator('role', {
                initialValue: user.role,
              })(
                <Select>
                  <Option value="admin">Admin</Option>
                  <Option value="user">User</Option>
                </Select>
              )}
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 0 }}>
              <RegisterButton type="primary" htmlType="submit">
                Update
              </RegisterButton>
              <Button type="default">
                <Link to="/users">Cancel</Link>
              </Button>
            </Form.Item>
          </StyledForm>
        </StyledCol>
      </Row>
    </Fragment>
  )
}

const UserEditComponent = Form.create({ name: 'user_edit' })(UserEditForm)

export default UserEditComponent
