import React from 'react'
import { Form, Icon, Input, Button, Row, Col } from 'antd'
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

const LoginButton = styled(Button)`
  background: #4caf50 !important;
  border: 0 !important;
  width: 100%;
`

const RegisterTab = styled.p`
  text-align: center;
`

const RegisterLink = styled.a`
  color: #4caf50;
  text-decoration: none;
`
class LoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onSubmit({ ...values })
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <StyledRow type="flex" justify="center" align="middle">
        <StyledCol sm={12} xl={6}>
          <StyledForm onSubmit={this.handleSubmit}>
            <Form.Item>
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Please input your email!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Email Address"
                  type="email"
                  size="large"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                  size="large"
                />
              )}
            </Form.Item>
            <Form.Item>
              <LoginButton type="primary" htmlType="submit" size="large">
                LOGIN
              </LoginButton>
              <RegisterTab style={{ textAlign: 'center' }}>
                Not registered?{' '}
                <RegisterLink href="/register">Create an account</RegisterLink>
              </RegisterTab>
            </Form.Item>
          </StyledForm>
        </StyledCol>
      </StyledRow>
    )
  }
}

const LoginComponent = Form.create({ name: 'login' })(LoginForm)

export default LoginComponent
