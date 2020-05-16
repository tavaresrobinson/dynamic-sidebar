import React, {FC} from 'react';
import {Row, Typography, Col} from 'antd';
import styles from './FormsLabel.module.scss';

interface IProps {
    title: string
    text: string
    icon: JSX.Element;
}
const {Title, Text} = Typography;

const FormsLabel:FC<IProps> = ({title, text, icon}) => {
  return (
    <>
      <Row align="middle" gutter={0}>
        <Col className={styles.FormsLabel__col}>
          {icon}
          <Title level={3} className={styles.FormsLabel__title}>
            {title}
          </Title>
        </Col>
      </Row>
      <Col className={[styles.FormsLabel__col, styles['FormsLabel__col--no-padding']].join(' ')}
        style={{padding: 0}}>
        <Text>
          {text}
        </Text>
      </Col>
    </>
  );
};

export default FormsLabel;
