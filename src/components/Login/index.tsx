import React, {FC, useState} from 'react';
import {Input, Form, Button, Typography, Alert} from 'antd';
import styles from './Login.module.scss';
import {useTranslation} from 'react-i18next';
import {Store} from 'rc-field-form/lib/interface';
import {Link, useHistory} from 'react-router-dom';
import useGlobal from 'store';
import Axios from 'api';
import axiosInstance from 'api';


interface IProps {
    isDesktop:boolean
}

// if (response.status === 200 && response.data.jwt && response.data.expireAt) {
//   const jwt = response.data.jwt;
//   console.log(response.data);
//   const expireAt = response.data.expireAt;
//
//   localStorage.setItem('access_token', jwt);
//   localStorage.setItem('expire_at', 'expireAt');
// }
const Login:FC<IProps> = ({isDesktop}) => {
  const {t} = useTranslation(['translation', 'errors']);
  const {Title} = Typography;
  const [LoginFailed, setLoginFailed] = useState(false);
  const [LoginFailedMessage, setLoginFailedMessage] = useState('');

  const [{isAuthenticated}, {setIsAuthenticated}] = useGlobal();
  let history = useHistory();


  const onFinish = (values:Store) => {
    const user = {
      email: values.email,
      password: values.password,
    };

    // users/token
    axiosInstance.post('users/token/', user).then((response:Store)=>{
      // alert('Hi');
      console.log(JSON.stringify(response));
      console.log(response.data);
      localStorage.setItem('login', JSON.stringify({
        login: true,
        token_access: response.data.access,
        token_refresh: response.data.refresh,
        t: response.data.ololo,

      }));

      axiosInstance.defaults.headers['Authorization'] = 'Bearer ' + response.data.access;
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
      // localStorage.setItem('full_name', response.data.fullname);
      history.push('/home');
      // const {token, user} = response.data;
      // localStorage.setItem('token', token);
      // // localStorage.setItem('user', JSON.stringify(user));

      setIsAuthenticated(true);
    // }).then((response)=>{
    //   // alert(2);
    //   axiosInstance.get('users/test/').then((response:Store)=>{
    //     // alert('Hi2');
    //     console.log(JSON.stringify(response));
    //     console.log(response.data);
    //   }).catch((error) => {
    //     console.log('error', error);
    //     console.log(JSON.stringify(error));
    //   });
    }).catch((error) => {
      console.log('error', error);
      console.log(JSON.stringify(error));
      setLoginFailed(true);
      setLoginFailedMessage('test');
    });


  };


  const onFinishFailed = () =>{
    setLoginFailed(true);
  };

  return (
    <div className={styles.login}>
      <Title level={1}>
        {t('LOGIN')}
      </Title>

      <Form
        layout={'vertical'}
        name="login_form"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        size={isDesktop? 'middle':'large'}
      >
        <Form.Item
          name="email"
          label={t('EMAIL')}
          required={false}
          rules={[{
            required: true,
            message: <> {t('errors:FIELD_REQ')} </>,
            type: 'email'}]}>
          <Input
            placeholder="Name@company.com" />
        </Form.Item>
        <Form.Item
          required={false}
          name="password"
          label={t('PASSWORD')}
          rules={[{required: true,
            message: <> {t('errors:FIELD_REQ')} </>,
          }]}
        >
          <Input.Password placeholder="********" />
        </Form.Item>
        <Form.Item>
          <Link to={'/forgot-password'}>
            {t('FORGOT_PASSWORD')}
          </Link>
        </Form.Item>
        {!LoginFailed ? '' : (<Alert
            // message= {t('errors:INVALID_EMAIL_OR_PASSWORD')}
            message={LoginFailedMessage}
            type="error" showIcon/> ) }
        <p></p>
        <Form.Item>
          <Button type="primary"
            htmlType="submit"
            className={styles.login__btn}>
            {t('LOGIN')}
          </Button>
        </Form.Item>

      </Form>
    </div>
  );
};
export default Login;
