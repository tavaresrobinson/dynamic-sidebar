import React, {FC} from 'react';
import styles from './Notification.module.scss';
import {Typography, Button, Avatar, Row} from 'antd';
import data from './data';
import { IConfirmationType } from 'interfaces/IConfirmationType';

const {Title, Text} = Typography;
interface IProps {
    type: IConfirmationType
}

const Notification:FC<IProps> = ({type}) => {
  return (
    <>
    <Row justify="center" className={styles.wrapper}>
            <Avatar size={200} className={styles.wrapper__img} 
            icon={data[type].icon} />
            <Title level={3}>
                {data[type].title}
            </Title>
            <Text strong>
                {data[type].text}
            </Text>
            <Button onClick={data[type].handleClick} 
            className={styles.wrapper__btn} 
            type="primary">
                {data[type].btnText}
            </Button>
    </Row>
    </>
  );
};

export default Notification;