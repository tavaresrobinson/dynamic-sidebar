import React, {FC, useState, useLayoutEffect} from 'react';
import {Input, Checkbox, Form, Button, Popover, Select, Typography
  , Modal} from 'antd';
import {UserOutlined, MailOutlined,
  CheckOutlined, CloseOutlined} from '@ant-design/icons';
import styles from './SignUp.module.scss';
import {Store} from 'rc-field-form/lib/interface';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import Axios from 'api'

const {Title, Text} = Typography;
const {Option} = Select;
const patternAZ = /[A-Z]/;
const patternaz = /[a-z]/;
const pattern09 = /[0-9]/;
const patternSC = /[!#@$%^&*)(+=._-]/;

interface IProps {
    isDesktop:boolean
}

const SignUp:FC<IProps> = ({isDesktop}) => {
  const {t} = useTranslation(['translation', 'errors' ,'terms']);

  const [isPopConditionValue, setPopConditionValue] = useState(false);
  const [password, setPassword] = useState<string>('');
  const [modal, contextHolder] = Modal.useModal();
  const content = (
    <>
      <Text>{ !(password?.length < 8) ?
      <CheckOutlined className={styles.icon__GreenColor}/> :
      <CloseOutlined className={styles.icon__grayColor} />}
      {t('BE_AT_LEAST_8')}</Text> <br />
      <Text>{ (patternAZ.test(password)) ?
      <CheckOutlined className={styles.icon__GreenColor}/> :
      <CloseOutlined className={styles.icon__grayColor} />}
      {t('ONE_UPPERCASE')}</Text> <br />

      <Text>{ (patternaz.test(password)) ?
      <CheckOutlined className={styles.icon__GreenColor}/> :
      <CloseOutlined className={styles.icon__grayColor} />}
      {t('ONE_LOWERCASE')}</Text> <br />


      <Text>{ (pattern09.test(password)) ?
      <CheckOutlined className={styles.icon__GreenColor}/> :
      <CloseOutlined className={styles.icon__grayColor} />}
      {t('ONE_NUMBER')} </Text> <br />

      <Text>{ (patternSC.test(password)) ?
      <CheckOutlined className={styles.icon__GreenColor}/> :
      <CloseOutlined className={styles.icon__grayColor} />}
      {t('ONE_SPECIALISE')}</Text>

    </>
  );

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
    <Select defaultValue="+966">
      <Option value="+966">+966</Option>
      <Option value="+976">+976</Option>
    </Select>
  </Form.Item>
  )

const config ={
  title: <> {t('TERMS_AND_POLICY')} </>,
  icon: <> </>,
  content: (
    <> {t('terms:TERMS_AND_POLICY')}   </>
  )
}


  const onFinish = (values:Store) => {
    setPassword('');
    values.phone_number= values.prefix + values.phone_number
    Axios.post('accounts/signup/',values)
  };

  const popOverPop = () => {
    !isPopConditionValue ? setPopConditionValue(true) :
        setPopConditionValue(false);
  };
  const popOverHide = () => {
    isPopConditionValue ? setPopConditionValue(false) :
        setPopConditionValue(false);
  };

  useLayoutEffect(() => {
    setPopConditionValue(false);
  }, [isDesktop]);

  return (
    <>
      <Title
        level={2}
        className={styles.register__title}>
        {t('SIGN_UP')}
      </Title>
      <Form
        hideRequiredMark={true}
        name="normal_sign"
        initialValues={{prefix: '+966'}}
        layout={'vertical'}
        onFinish={onFinish}
        size={isDesktop? 'middle':'large'}
      >
        <Form.Item
          label={t('FIRST_NAME')}
          name="first_name"
          required={false}
          rules={[{required: true, message: <> {t('errors:FIELD_REQ')} </>},
            {max: 50, message: <> {t('errors:CHAR_LESS_THAN_50')} </>}]}
        >
          <Input maxLength={50}
            prefix={<UserOutlined />}
            placeholder= {t('FIRST_NAME')} />
        </Form.Item>

        <Form.Item
          label={t('LAST_NAME')}
          name="last_name"
          required={false}
          rules={[{required: true, message: <> {t('errors:FIELD_REQ')} </>},
            {max: 50, message: <> {t('errors:CHAR_LESS_THAN_50')} </>}]}
        >
          <Input maxLength={50}
            prefix={<UserOutlined />}
            placeholder={t('LAST_NAME')} />
        </Form.Item>

        <Form.Item
          label={t('EMAIL')}
          name="email"
          required={false}
          rules={[
            {
              type: 'email',
              message: <> {t('errors:NOT_VALID_EMAIL')} </>,
            },
            {
              required: true,
              message: <> {t('errors:FIELD_REQ')} </>,
            },
            {max: 50, message: <> {t('errors:CHAR_LESS_THAN_50')} </>},
          ]}
        >
          <Input maxLength={50}
            prefix={<MailOutlined />}
            placeholder= {t('EMAIL')} />
        </Form.Item>

        <Form.Item
          label={t('PHONE_NUMBER')}
          name="phone_number"
          required={false}
          rules={[
            {
              required: true,
              message: <> {t('errors:FIELD_REQ')} </>
            },
            {
              len: 9, 
              message: <> {t('errors:NOT_VALID_PHONE')} </>
            },
          ]}
          extra={ isDesktop? <> </> : <> <Text> {t('PASSWORD_REQUIREMENTS')} </Text>
          <br/> <Text className={styles.mobile_font} >{content}</Text> </>}
        >
          <Input addonBefore={prefixSelector} placeholder="550000000" maxLength={9}/>
        </Form.Item>

        <Form.Item
          label={t('PASSWORD')}
        >
          <Form.Item
            noStyle
            required={false}
            name={'password1'}
            rules={[
              {
                required: true,
                message: <> {t('errors:FIELD_REQ')} </>,
              },
              {
                min: 8,
                message: ' ',
              },
              {
                pattern: /[A-Z]/,
                message: '  ',
              },
              {
                pattern: /[a-z]/,
                message: ' ',
              },
              {
                pattern: /[0-9]/,
                message: ' ',
              },
              {
                pattern: /[!#@$%^&*)(+=._-]/,
                message: ' ',
              },
              {max: 50, message: <> {t('errors:CHAR_LESS_THAN_50')} </>},
            ]}
            hasFeedback
          >
            <Input.Password
              placeholder={'password'}
              maxLength={50}
              onFocus={() => isDesktop && popOverPop() }
              onBlur={()=> isDesktop && popOverHide() }
              onChange ={({target}) =>
                setPassword(target.value)}
            />
          </Form.Item>
          <Popover
            placement="top"
            title={t('PASSWORD_REQUIREMENTS')}
            content={content}
            trigger="click" visible={isPopConditionValue} />
        </Form.Item>

        <Form.Item
          label={t('CONFIRM_PASSWORD')}
          name="password2"
          required={false}
          dependencies={['password1']}
          hasFeedback
          rules={[
            {
              required: true,
              message: <> {t('errors:FIELD_REQ')} </>,
            },
            ({getFieldValue}) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password1') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                    new Error(
                        t('errors:PASSWORD_DONT_MATCH')),
                );
              },
            }),
          ]}
        >
          <Input.Password placeholder={t('CONFIRM_PASSWORD')} />
        </Form.Item>

        <Form.Item name="agreement"
          valuePropName={'checked'}
          rules={[{
            required: true,
            message: <> {t('errors:CHECK_TERMS_AND_POLICY')} </>},
          ]} >
          <Checkbox>
            {t('BY_CREATING_AN_ACCOUNT_YOU_AGREE_TO_OUR')}
            <Button type={'link'} onClick={() => {
                modal.info(config);
            }} >{t('TERMS_AND_POLICY')} </Button>
          </Checkbox>
        </Form.Item>
        <> {contextHolder} </>

        <Form.Item>
          <Button type="primary" htmlType="submit"
            className={styles.register__btn}>
            {t('SIGN_UP')}
          </Button>
        </Form.Item>
      </Form>

      <Text className={styles.login}> {t('ALREADY_HAVE_ACCOUNT')}?
        <Link to={'/login'}>
          {t('LOGIN')}!
        </Link>
      </Text>
    </>
  );
};
export default SignUp;
