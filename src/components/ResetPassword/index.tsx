import React, {FC, useState} from 'react';
import {Input, Form, Button, Popover, Typography} from 'antd';
import {CheckOutlined, CloseOutlined} from '@ant-design/icons';
import styles from './ResetPassword.module.scss';
import {Store} from 'rc-field-form/lib/interface';
import {useTranslation} from 'react-i18next';

const {Title, Text} = Typography;
const patternAZ = /[A-Z]/;
const patternaz = /[a-z]/;
const pattern09 = /[0-9]/;
const patternSC = /[!#@$%^&*)(+=._-]/;

interface IProps{
    showOldPassword?: boolean
    isDesktop:boolean
}

const ResetPassword:FC<IProps> = ({showOldPassword=false, isDesktop}) => {
  const {t} = useTranslation(['translation', 'errors']);

  const [isPopConditionValue, setPopConditionValue] = useState(false);
  const [password, setPassword] = useState<string>('');
  const content = (
    <>
      <Text>{ !(password?.length < 8) ?
      <CheckOutlined className={styles.icon__GreenColor}/> :
      <CloseOutlined className={styles.icon__RedColor} />}
      {t('BE_AT_LEAST_8')}</Text> <br />
      <Text>{ (patternAZ.test(password)) ?
      <CheckOutlined className={styles.icon__GreenColor}/> :
      <CloseOutlined className={styles.icon__RedColor} />}
      {t('ONE_UPPERCASE')}</Text> <br />

      <Text>{ (patternaz.test(password)) ?
      <CheckOutlined className={styles.icon__GreenColor}/> :
      <CloseOutlined className={styles.icon__RedColor} />}
      {t('ONE_LOWERCASE')}</Text> <br />


      <Text>{ (pattern09.test(password)) ?
      <CheckOutlined className={styles.icon__GreenColor}/> :
      <CloseOutlined className={styles.icon__RedColor} />}
      {t('ONE_NUMBER')} </Text> <br />

      <Text>{ (patternSC.test(password)) ?
      <CheckOutlined className={styles.icon__GreenColor}/> :
      <CloseOutlined className={styles.icon__RedColor} />}
      {t('ONE_SPECIALISE')}</Text> <br />

    </>
  );

  const onFinish = (values:Store) => {
    setPassword('');
    console.log('Received values of form: ', values);
  };

  const popOverPop = () => {
    !isPopConditionValue ? setPopConditionValue(true) :
        setPopConditionValue(false);
  };
  const popOverHide = () => {
    isPopConditionValue ? setPopConditionValue(false) :
        setPopConditionValue(false);
  };

  return (
    <div className={styles.new_password}>
      <Title level={1} className={styles.title}>
        {t('FORGET_PASSWORD')}
      </Title>
      <Text> {t('PLEASE_ENTER_NEW_PASSWORD')} </Text>
      <Form
        name="old_password"
        layout={'vertical'}
        onFinish={onFinish}
        size={isDesktop? 'middle':'large'}
      >

        { showOldPassword ? (
            <Form.Item
              label={t('OLD_PASSWORD')}
              name="oldPassword"
              required={false}
              rules={[
                {
                  required: true,
                  message: <> {t('errors:FIELD_REQ')} </>,
                },
                {max: 50, message: <> {t('errors:CHAR_LESS_THAN_50')} </>},
              ]}
              hasFeedback
            >
              <Input.Password placeholder={t('OLD_PASSWORD')}
                maxLength={50} />
            </Form.Item>
        ) : (<> </> )}

        <Form.Item
          label={t('NEW_PASSWORD')}
        >
          <Form.Item
            noStyle
            required={false}
            name={'password'}
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
              onFocus={popOverPop}
              onBlur={popOverHide}
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
          label={t('CONFIRM_NEW_PASSWORD')}
          name="confirm"
          required={false}
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: <> {t('errors:FIELD_REQ')} </>,
            },
            ({getFieldValue}) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
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


        <Form.Item>
          <Button type="primary" htmlType="submit"
            className={styles.new_password__btn}>
            {t('SUBMIT')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default ResetPassword;
