import React, {FC, Fragment} from 'react';
import styles from './Layout.module.scss';
import {Link, useHistory} from 'react-router-dom';
import {ReactComponent as SiteIcon} from 'assets/svg/_SI.svg';
import {Menu, Button, Modal, Avatar} from 'antd';

import {UserOutlined} from '@ant-design/icons';
import {ExclamationCircleOutlined} from '@ant-design/icons';
import {Layout as AntLayout} from 'antd';
import {
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import {LogoutIcon, ProfileIcon} from 'assets/icons';


const {Header: AntHeader} = AntLayout;

interface IProps {
    isDesktop: boolean
    showSiderState: boolean
    // handleDisplayMenu: (drawer:boolean)=> void
    // handleMenu: ()=> JSX.Element
}

const handleLogout1 = () => {
  localStorage.removeItem('login');
  localStorage.removeItem('login');
  alert('logout');
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
  window.location.pathname = '/login';
};

const handleLogout = () => {
  Modal.confirm({
    title: 'Do you Want to delete these items?',
    content: 'Some descriptions',
    onOk() {
      localStorage.removeItem('login');
      localStorage.removeItem('login');
      alert('logout');
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      window.location.pathname = '/login';
    },
    onCancel() {
      console.log('Cancel');
    },
  });
};

const handleClickMenu = () => {};

const {SubMenu} = Menu;

const rightContent = [
  <Menu key="user" mode="horizontal" onClick={handleLogout}>
    <SubMenu
      title={
        <Fragment>
          <span style={{color: '#999', marginRight: 4}}>
            Hi,
          </span>
          <span> username </span>
          {/* <span>{username}</span>*/}
          <Avatar style={{marginLeft: 8}}
            // src={avatar}
          />
        </Fragment>
      }
    >
      <Menu.Item key="SignOut">
        Sign out
      </Menu.Item>
    </SubMenu>
  </Menu>,
];


const Header:FC<IProps> = ({
  isDesktop,
  showSiderState,
  // handleMenu,
  // handleDisplayMenu
}) => {
  // return (
  //   <AntHeader className={styles.header}>
  //     <div>
  //       <Link to={'/home'} className={styles.logo}>
  //         <SiteIcon width={'100%'} height={'100%'}/>
  //       </Link>
  //
  //       <Avatar style={{backgroundColor: '#004028', marginRight: '10px', marginTop: '20px', float: 'right'}} icon={<UserOutlined />} >
  //       </Avatar>
  //
  //       <Button size={'large'} shape= 'circle' onClick={handleLogout} icon={<LogoutIcon />}
  //         style={{borderColor: 'transparent', marginRight: '10px', marginTop: '20px', float: 'right'}} />
  //       {/* <Button size={'large'} shape= 'circle' style={{borderColor: 'transparent', marginRight: '10px'}}> <LogoutIcon /> </Button>*/}
  //       {/* margin-top: 15px; float:right */}
  //     </div>
  //   </AntHeader>
  // );


  return (
    <AntHeader className={styles.header}
      // className={classnames(styles.header, {
      // [styles.fixed]: fixed,
      // [styles.collapsed]: collapsed,
      // })}
      id="layoutHeader"
    >
      <div
        className={styles.button}

        // onClick={onCollapseChange.bind(this, !collapsed)}
      >
        <Link to={'/home'} className={styles.logo}>
          <SiteIcon width={'100%'} height={'100%'}/>
        </Link>

        {/* <LegacyIcon*/}
        {/*  type={classnames({*/}
        {/*    'menu-unfold': collapsed,*/}
        {/*    'menu-fold': !collapsed,*/}
        {/*  })}*/}
        {/* />*/}
      </div>

      <div className={styles.rightContainer}>{rightContent}</div>
    </AntHeader>
  );
};

export default Header;

