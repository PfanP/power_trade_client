import React from 'react'
import { Form, Input, Button, Row, Col } from 'antd'
import styled from 'styled-components'

const StyledRow = styled(Row)`
  min-height: 100vh;
  background: #76b852;
`

const StyledCol = styled(Col)`
  border: 1px solid #ebedf0;
  border-radius: 2px;
  background: #ffffff;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
`

const StyledForm = styled(Form)`
  padding: 50px 50px 10px 50px !important;
`

const RegisterButton = styled(Button)`
  background: #4caf50 !important;
  border: 0 !important;
  width: 100%;
`

const RegisterLink = styled.a`
  color: #4caf50;
  text-decoration: none;
`

const LoginTag = styled.p`
  text-align: center;
`

const RegisterForm = ({ onSubmit, form }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    form.validateFields((err, values) => {
      if (!err) {
        onSubmit(values)
      }
    })
  }
  const { getFieldDecorator } = form
  const formItemLayout = {
    labelCol: {
      sm: { span: 24 },
      md: { span: 8 },
    },
    wrapperCol: {
      sm: { span: 24 },
      md: { span: 16 },
    },
  }
  return (
    <StyledRow type="flex" justify="center" align="middle">
      <StyledCol lg={12} xl={8}>
        <StyledForm {...formItemLayout} onSubmit={handleSubmit}>
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
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(<Input type="password" placeholder="Password" size="large" />)}
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 0 }}>
            <RegisterButton type="primary" htmlType="submit" size="large">
              Register
            </RegisterButton>
            <LoginTag>
              Already registered? <RegisterLink href="/login">Login</RegisterLink>
            </LoginTag>
          </Form.Item>
        </StyledForm>
      </StyledCol>
    </StyledRow>
  )
}

const RegisterComponent = Form.create({ name: 'register' })(RegisterForm)

export default RegisterComponent
