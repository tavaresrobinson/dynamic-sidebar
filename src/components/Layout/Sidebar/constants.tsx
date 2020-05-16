import React from "react";

import { DashboardOutlined, TeamOutlined, SettingOutlined, SearchOutlined, BarChartOutlined, UserOutlined, UserAddOutlined } from '@ant-design/icons';

const iconStyle = { fontSize: "1.4rem", color: "#fff", margin: "0px" };

export const sidebarLinks = [
  {
    icon: <DashboardOutlined style={iconStyle} />,
    name: "dashboard",
    linkTo: "/dashboard",
    title: "Dashboard",
    role: [0, 1]
  },
  {
    icon: <TeamOutlined style={iconStyle} />,
    name: "enrichment",
    linkTo: null,
    title: "Enrichment",
    child: [
        {
            icon: <UserOutlined style={iconStyle} />,
            name: "menu1",
            linkTo: "/menu1",
            title: "Menu 1"
        },
        {
            icon: <UserAddOutlined style={iconStyle} />,
            name: "menu2",
            linkTo: "/menu2",
            title: "Menu 2"
        }
    ],
    role: [0, 1]

  },
  {
    icon: <SearchOutlined style={iconStyle} />,
    name: "observation",
    linkTo: "/observation",
    title: "Observation",
    role: [0, 1]
  },
  {
    icon: <BarChartOutlined style={iconStyle} />,
    name: "reporting",
    linkTo: "/reporting",
    title: "Reporting",
    role: [0, 1]
  },
  {
    icon: <SettingOutlined style={iconStyle} />,
    name: "settings",
    linkTo: "/settings",
    title: "Settings",
    role: [0, 1] // 0: admin, 1: user
  }
];
