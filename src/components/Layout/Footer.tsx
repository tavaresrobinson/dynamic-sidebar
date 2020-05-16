import React, {FC} from 'react';
import styles from './Layout.module.scss';
import {ReactComponent as SiteLogo} from 'assets/svg/SITE_Text.svg';
import {Col, Layout, Row, Button} from 'antd';
import {useTranslation} from 'react-i18next';


const {Footer: AntFooter} = Layout;

interface IProps {
  isDesktop:boolean
}


const Footer:FC<IProps> = ({isDesktop}) => {
  const {t} = useTranslation();
  return (
    <AntFooter className={styles.footer}>
      <Row gutter={20} align={'middle'}>
        <Col className={styles['logo-col']}>
          <SiteLogo className={styles.footer__logo}/>
        </Col>
        <Col flex="auto">
          <Row justify={'center'} gutter={5}>
            <Col className={styles['copyright-col']}>
              {t('COPYRIGHT')}
            </Col>
            {isDesktop && (
              <span className={styles['btn--link']}>
                  |
              </span>
            )}
            <Col>
              <Button type={'link'} className={styles['btn--link']}>
                {t('PRIVACY_POLICY')}
              </Button>
            </Col>
          </Row>
        </Col>
        <Col xs={0} lg={3}/>
      </Row>
    </AntFooter>
  );
};

export default Footer;
