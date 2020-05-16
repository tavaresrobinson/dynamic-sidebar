import React, {FC} from 'react';
import {Input, Form, Button, Typography} from 'antd';
import styles from 'components/ForgotPassword/ForgotPassword.module.scss';
import {useTranslation} from 'react-i18next';
import {Store} from 'rc-field-form/lib/interface';

const {Title, Text} = Typography;

interface IProps {
    isDesktop:boolean
}

const ForgotPassword:FC<IProps> = ({isDesktop}) => {
  const {t} = useTranslation(['translation', 'errors']);
  const onFinish = (values: Store) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div className={styles.forget}>
      <Title level={1}>
        {t('RESET_PASSWORD')}
      </Title>
      <Text>
        {t('PLEASE_ENTER_EMAIL_TO_SEND_YOU_LINK_TO_CHANGE_PASSWORD')}
      </Text>
      <Form
        layout={'vertical'}
        name="forget_pass_form"
        onFinish={onFinish}
        size={isDesktop? 'middle':'large'}
      >
        <Form.Item
          name="email"
          required={false}
          label={t('EMAIL')}
          rules={[{required: true, message: <> {t('errors:FIELD_REQ')} </>,
            type: 'email'}]}>
          <Input
            placeholder= {t('EMAIL')} />
        </Form.Item>
        <Form.Item>
          <Button type="primary"
            htmlType="submit"
            className={styles.forget__btn}>
            {t('SUBMIT')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default (ForgotPassword);
