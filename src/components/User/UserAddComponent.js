import React, { Fragment } from 'react'
import { Form, Input, Button, Row, Col, Select } from 'antd'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ADMIN } from 'constants/auth.const'

const { Option } = Select
const { Password } = Input

const StyledCol = styled(Col)`
  border: 1px solid #ebedf0;
  border-radius: 2px;
  background: #ffffff;
`

const StyledForm = styled(Form)`
  min-width: 100%;
  @media (max-width: 576px) {
    padding: 20px !important;
  }
  padding: 50px !important;
`

const RegisterButton = styled(Button)`
  border: 0 !important;
  margin-right: 10px;
`
const HeaderP = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-top: 50px;
`
const UserAddForm = ({ onSubmit, form, authUser }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    form.validateFields((err, values) => {
      if (!err) {
        onSubmit(values)
      }
    })
  }
  const { getFieldDecorator } = form
  return (
    <Fragment>
      <HeaderP>Add User</HeaderP>
      <Row type="flex">
        <StyledCol xs={{ span: 24 }} sm={20}>
          <StyledForm onSubmit={handleSubmit}>
            <Form.Item label="User Name">
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(<Input placeholder="User Name" size="large" />)}
            </Form.Item>
            <Form.Item label="E-mail">
              {getFieldDecorator('email', {
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
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ],
              })(<Password size="large" />)}
            </Form.Item>
            <Form.Item label="Role">
              {getFieldDecorator('role', {
                initialValue: 'user',
              })(
                <Select size="large">
                  <Option value="admin">Admin</Option>
                  <Option value="user">User</Option>
                </Select>
              )}
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 0 }}>
              <RegisterButton type="primary" htmlType="submit">
                Add
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

const UserAddComponent = Form.create({ name: 'add' })(UserAddForm)

export default UserAddComponent
