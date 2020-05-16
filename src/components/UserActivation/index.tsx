import React, {FC, useState, useLayoutEffect} from 'react';
import {Input, Checkbox, Form, Button, Popover, Select, Typography, Modal} from 'antd';
import {CheckOutlined, CloseOutlined, ExclamationCircleOutlined} from '@ant-design/icons';
import styles from './UserActivation.module.scss';
import {Store} from 'rc-field-form/lib/interface';
import {useTranslation} from 'react-i18next';
import axiosInstance from 'api';
import { Redirect } from 'react-router-dom';

const {Title, Text} = Typography;
const {Option} = Select;
const patternAZ = /[A-Z]/;
const patternaz = /[a-z]/;
const pattern09 = /[0-9]/;
const patternSC = /[!#@$%^&*)(+=._-]/;

interface IProps {
  isDesktop: boolean
}

const UserActivation: FC<IProps> = ({isDesktop}) => {
  const {t} = useTranslation(['translation', 'errors', 'terms']);

  const [isPopConditionValue, setPopConditionValue] = useState(false);
  const [password, setPassword] = useState<string>('');
  const [modal, contextHolder] = Modal.useModal();
  const content = (
    <>
      <Text>{!(password?.length < 8) ?
        <CheckOutlined className={styles.icon__GreenColor} /> :
        <CloseOutlined className={styles.icon__grayColor} />}
      {t('BE_AT_LEAST_8')}</Text> <br />
      <Text>{(patternAZ.test(password)) ?
        <CheckOutlined className={styles.icon__GreenColor} /> :
        <CloseOutlined className={styles.icon__grayColor} />}
      {t('ONE_UPPERCASE')}</Text> <br />

      <Text>{(patternaz.test(password)) ?
        <CheckOutlined className={styles.icon__GreenColor} /> :
        <CloseOutlined className={styles.icon__grayColor} />}
      {t('ONE_LOWERCASE')}</Text> <br />


      <Text>{(pattern09.test(password)) ?
        <CheckOutlined className={styles.icon__GreenColor} /> :
        <CloseOutlined className={styles.icon__grayColor} />}
      {t('ONE_NUMBER')} </Text> <br />

      <Text>{(patternSC.test(password)) ?
        <CheckOutlined className={styles.icon__GreenColor} /> :
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
  );

  const config = {
    title: <> {t('TERMS_AND_POLICY')} </>,
    icon: <ExclamationCircleOutlined />,
    content: (
      <> {t('terms:TERMS_AND_POLICY')}   </>
    ),

  };


  const onFinish = (values: Store) => {
    const url = window.location.href.replace(/\/$/, '');
    /* remove optional end / */
    const lastSeg = url.substr(url.lastIndexOf('/') + 1);

    setPassword('');
    const userData = {
      password: values.password1,
      password2: values.password2,
      phone_number: values.prefix + values.phone_number,
      public_key: values.public_key,
      token: lastSeg,
    };


    axiosInstance.post('users/activate/', userData).then((response) => {
      const msg = {
        title: response.data,
        content: <> {t('YOU_CAN_LOGIN_NOW')}   </>,
        okText: <> {t('LOGIN')}   </>,
        onOk() {
          window.location.pathname = '/login';
        },
      };

      if (response.status !== 200) {
        Modal.success(msg);
      } else {
        Modal.warning(msg);
      }
    }).catch((error) => {
      Modal.error({
        title: 'Error',
        content: <> {t('errors:GENERAL_ERROR')} </>,
      });
    });
  };

  const onFinishFailed = (error: any) => {
    Modal.error({
      title: 'wow',
      content: <> {t('errors:GENERAL_ERROR')} </>,
    });
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
      <div className={styles.activate}>
        <Title level={1}>
          {t('ACTIVATE_ACCOUNT')}
        </Title>
        <Text>
          {t('FILL_INFO_ACTIVATE_ACCOUNT')}
        </Text>
        <Form
          hideRequiredMark={true}
          name="normal_sign"
          initialValues={{prefix: '+966'}}
          layout={'vertical'}
          onFinish={onFinish}
          size={isDesktop ? 'middle' : 'large'}
        >
          <Form.Item style={{marginTop: '20px'}}
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
                onFocus={() => isDesktop && popOverPop()}
                onBlur={() => isDesktop && popOverHide()}
                onChange={({target}) =>
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

          <Form.Item
            label={t('PHONE_NUMBER')}
            name="phone_number"
            required={false}
            rules={[
              {
                required: true,
                message: <> {t('errors:FIELD_REQ')} </>,
              },
              {
                len: 9,
                message: <> {t('errors:NOT_VALID_PHONE')} </>,
              },
            ]}
          // extra={ isDesktop? <> </> : <> <Text> {t('PASSWORD_REQUIREMENTS')} </Text>
          //    <Text className={styles.mobile_font} >{content}
          //   </Text> </>}
          >
            <Input addonBefore={prefixSelector} placeholder="550000000" maxLength={9} />
          </Form.Item>

          <Form.Item name="public_key" label={t('PUBLIC_KEY')} >
            <Input.TextArea placeholder="Please add your public key." rows={4} />
          </Form.Item>

          <Form.Item name="agreement"
            valuePropName={'checked'}
            rules={[{
              required: true,
              message: <> {t('errors:CHECK_TERMS_AND_POLICY')} </>,
            },
            ]} >
            <Checkbox>
              {t('BY_CREATING_AN_ACCOUNT_YOU_AGREE_TO_OUR')} &nbsp;
              <Button type={'link'} className={styles.activate__btn_link}
                onClick={() => {
                  modal.info(config);
                }} >{t('TERMS_AND_POLICY')}
              </Button>
            </Checkbox>

          </Form.Item>


          <> {contextHolder} </>

          <Form.Item>
            <Button type="primary" htmlType="submit"
              className={styles.activate__btn}>
              {t('SUBMIT')}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};
export default UserActivation;
