import React from 'react';
import { Row, Col, Form, Icon, Input, Button } from 'antd';

const Login = props => {
  const { getFieldDecorator } = props.form;

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        props.history.push('/dashboard')
      }
    });
  };

  return (
    <Row style={{marginTop: '200px'}}>
      <Col span={8} offset={9}>
        <Form onSubmit={handleSubmit} className="login-form" style={{maxWidth: '300px'}}>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
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
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%'}}>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}
  
export default Form.create({ name: 'normal_login' })(Login);