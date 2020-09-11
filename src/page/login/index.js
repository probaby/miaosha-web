import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import "./login.less"
import {reqLogin} from '../../api'

class Login extends Component {

  formRef = React.createRef();
  login = () => {

    let data = this.formRef.current.getFieldsValue();
    let result =  reqLogin(data)
    console.info(result);
  }

  handleSubmit = () => {

  }

  render() {

    // 得到具强大功能的form对象
    // const { getFieldDecorator } = this.props.form;
    const Item = Form.Item;
    return (
      <div className={"login"} >
        <section className={"login-content"}>
          <h2>用户登陆</h2>
          <div><Form ref={this.formRef} className="login-form">
            <Item
              name='name'
            >

              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />
            </Item>
            <Item
              name='password'
            >

              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />

            </Item>
            <Item>
              <Button type="primary" onClick={this.login} className="login-form-button">
                Log in
                  </Button>
            </Item>
          </Form></div>
        </section>
      </div>
    );
  }
}

export default Login;

