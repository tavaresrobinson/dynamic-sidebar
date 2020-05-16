import React, {
  FC,
  lazy,
  useLayoutEffect,
  useState,
  useEffect,
} from 'react';
import { Layout as AntLayout, Menu, Avatar } from 'antd';
import useGlobal from 'store';
import styles from './Layout.module.scss';
import { useMedia } from 'hooks/useMedia';
import { useTranslation } from 'react-i18next';
import { LogoutIcon, ProfileIcon } from 'assets/icons';
import { ReactComponent as BeaconIcon } from 'assets/svg/Beacon.svg';
import { Link } from 'react-router-dom';
import BreadCrumbComp from '../../components/BreadCrumb';

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';

const Loader = lazy(() => import('components/Loader'));
const Sidebar = lazy(() => import("./Sidebar/Sidebar"));
const Header = lazy(() => import('components/Layout/Header'));
const Footer = lazy(() => import('components/Layout/Footer'));
// const Sider = lazy(()=> import('components/Layout/Sider'));
// const SideDrawer = lazy(()=> import('components/Layout/SideDrawer'));
const { Content } = AntLayout;

interface IProps {
  showSider?: boolean
}


const Layout: FC<IProps> = ({ children, showSider = true }) => {
  const [{ isLoading }] = useGlobal();
  const [showSiderState, setSiderState] = useState<boolean>(showSider);
  const [showDrawerState, setDrawerState] = useState<boolean>(false);
  const isDesktop = useMedia(['(max-width: 998px)'], [false], true);
  const [{ isAuthenticated }, { setIsAuthenticated }] = useGlobal();

  const contentRender = () => (
    <Content className={styles.content}>
      <BeaconIcon className={styles.content__background} />
      <div style={{ padding: 24 }}>
        <BreadCrumbComp />
        {children}
      </div>
    </Content>
  )

  // const [showFullNameState, setFullNameState] = useState<string>('');

  // const siderAnimations = useTransition(showSiderState, null, {
  //   from: {display: 'flex', opacity: 0, overflow: 'hidden', width: 0},
  //   enter: {opacity: 1, width: 200},
  //   leave: {opacity: 0, width: 0},
  // });
  const { t } = useTranslation();


  // const handleDisplayMenu = (drawer?:boolean)=>{
  //   if (!drawer) {
  //     setSiderState((prevState) => !prevState);
  //     return;
  //   }
  //   setDrawerState((prevState) => !prevState);
  // };


  // useEffect(() => {
  //   const store = JSON.parse(localStorage.getItem('login') || '{}');
  //   if (store && store.login) {
  //     // const name = localStorage.getItem('fullname');
  //     // alert(name);
  //     // setFullNameState('Name Name');
  //     setIsAuthenticated(true);
  //     setSiderState((prevState) => true);
  //     setDrawerState((prevState) => true);
  //   } else {
  //     // setFullNameState('No one');
  //     setIsAuthenticated(false);
  //     setSiderState((prevState) => false);
  //     setDrawerState((prevState) => false);
  //   }
  // }, [isAuthenticated]);

  // const handleLogout = () => {
  //   localStorage.removeItem('login');
  //   setIsAuthenticated(false);
  // };
  // const handleMenu = (collapse?:boolean) =>{
  //   return (

  //     <Menu
  //       selectable={false}
  //       theme={!isDesktop || showSiderState? 'dark':'light'}
  //       className={[
  //         styles.menu,
  //         isDesktop && !showSiderState? styles['menu--flex']: '',
  //       ].join(' ')}
  //       mode={!isDesktop || showSiderState? 'inline':'horizontal'}
  //       selectedKeys={['1']}
  //     >
  //       {/* <Menu.Item id={'si'} key
  //       ="1">
  //         <ProfileIcon className={styles.menu__icons} />
  //         <span>{t('SI')}</span>
  //       </Menu.Item> */}
  //       <Menu.SubMenu

  //         popupClassName={styles.menu}
  //         title={
  //           <>
  //             {!collapse && isDesktop ? (
  //               <>
  //                 <Avatar
  //                   className={!showSiderState? styles.avatar:'' }
  //                   icon={<UserOutlined style={{margin: 0}}/>}
  //                   style={{margin: '0 4px'}} />
  //                 <span>
  //               Name
  //                 </span>
  //               </>
  //             ):(
  //                 <>

  //                   <UserOutlined/>

  //                   <span>
  //                     {t('MY_PROFILE')}
  //                   </span>
  //                 </>
  //             )}
  //           </>
  //         }
  //         className={styles.menu__item}>
  //         {isAuthenticated ?
  //         (<Menu.Item
  //           id={'profile'}
  //           key="2"
  //           className={[
  //             styles['menu__item--margin']].join(' ')}>
  //           <Link to={'/profile'}>
  //             <ProfileIcon />
  //             {t('MY_PROFILE')}
  //           </Link>
  //         </Menu.Item>):''}

  //         {!isAuthenticated ? (''
  //           // <Menu.Item
  //           //   id={'login'}
  //           //   key="3"
  //           // >
  //           //   <LogoutIcon />
  //           //   <span>
  //           //     {t('LOGIN')}
  //           //   </span>
  //           // </Menu.Item>
  //         ) : (
  //             <Menu.Item
  //               id={'logout'}
  //               key="3"
  //               onClick={handleLogout}
  //             >
  //               <LogoutIcon />
  //               <span>
  //                 {t('LOGOUT')}
  //               </span>
  //             </Menu.Item>
  //           )}
  //       </Menu.SubMenu>

  //     </Menu>

  //   );
  // };


  useLayoutEffect(() => {
    setSiderState(showSider ? showSider : false);
  }, [isDesktop, showSider]);

  return (
    <>
      {isLoading && <Loader />}
      <AntLayout>
        {/*    {isAuthenticated ? (''):*/}
        {/*      <Sider className={styles.sider} collapsible collapsed={isCollapsedState} onCollapse={onCollapse}>*/}
        {/*        <div className="logo" />*/}
        {/*        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">*/}
        {/*          <Menu.Item key="1">*/}
        {/*            <PieChartOutlined />*/}
        {/*            <span>Option 1</span>*/}
        {/*          </Menu.Item>*/}
        {/*          <Menu.Item key="2">*/}
        {/*            <DesktopOutlined />*/}
        {/*            <span>Option 2</span>*/}
        {/*          </Menu.Item>*/}
        {/*          <SubMenu*/}
        {/*            key="sub1"*/}
        {/*            title={*/}
        {/*              <span>*/}
        {/*                <UserOutlined />*/}
        {/*                <span>User</span>*/}
        {/*              </span>*/}
        {/*            }*/}
        {/*          >*/}
        {/*            <Menu.Item key="3">Tom</Menu.Item>*/}
        {/*            <Menu.Item key="4">Bill</Menu.Item>*/}
        {/*            <Menu.Item key="5">Alex</Menu.Item>*/}
        {/*          </SubMenu>*/}
        {/*          <SubMenu*/}
        {/*            key="sub2"*/}
        {/*            title={*/}
        {/*              <span>*/}
        {/*                <TeamOutlined />*/}
        {/*                <span>Team</span>*/}
        {/*              </span>*/}
        {/*            }*/}
        {/*          >*/}
        {/*            <Menu.Item key="6">Team 1</Menu.Item>*/}
        {/*            <Menu.Item key="8">Team 2</Menu.Item>*/}
        {/*          </SubMenu>*/}
        {/*          <Menu.Item key="9">*/}
        {/*            <FileOutlined />*/}
        {/*          </Menu.Item>*/}
        {/*        </Menu>*/}
        {/*      </Sider>*/}
        {isAuthenticated ? ('') :
          <Sidebar
            isDesktop={isDesktop}
            showSiderState={showSiderState}
          />}
        <AntLayout>
          {isAuthenticated ? ('') :
            <Header
              isDesktop={isDesktop}
              showSiderState={showSiderState}
            >
            </Header>}
          {contentRender()}
          <Footer isDesktop={isDesktop} />
        </AntLayout>
      </AntLayout>
    </>
  );
};

export default Layout;
