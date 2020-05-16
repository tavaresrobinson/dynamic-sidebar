import React, { FC, useState } from 'react';
import { Layout, Menu } from 'antd';
import "./Sidebar.scss";
import { sidebarLinks } from "./constants";
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;
const { Sider } = Layout;

interface IProps {
    isDesktop: boolean
    showSiderState: boolean
}

const Sidebar: FC<IProps> = ({
    isDesktop,
    showSiderState,
}) => {
    const userType = '0'; // 0: admin, 1: user
    return (
        <Sider className="site-layout-background-sider" trigger={null}>
            <Menu
                mode="inline"
                defaultSelectedKeys={['dashboard']}
                defaultOpenKeys={['dashboard']}
                style={{ height: '100%' }}
            >
                {sidebarLinks.map(({ icon, linkTo, title, role, name, child }) => {
                    return (
                        role.includes(parseInt(userType)) ? (
                            child ?
                                <SubMenu
                                    key={name}
                                    title={
                                        <>
                                            {icon}
                                            <span>{title}</span>
                                        </>
                                    }
                                >
                                    {child.map(({ icon, linkTo, title, name }) => (
                                        <Menu.Item key={name}>{
                                            <Link to={linkTo}>
                                                {icon}
                                                <span>{title}</span>
                                            </Link>
                                        }</Menu.Item>
                                    ))}
                                </SubMenu> :
                                linkTo && <Menu.Item
                                    key={name}
                                >
                                    <Link to={linkTo}>
                                        {icon}
                                        <span>{title}</span>
                                    </Link>
                                </Menu.Item>
                        ) : ''
                    )

                })}
            </Menu>
        </Sider>
    );
};

export default Sidebar;