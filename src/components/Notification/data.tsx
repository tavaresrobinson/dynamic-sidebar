import React from 'react';
import { EmailConfIcon } from "assets/icons";
import { IConfirmation } from 'interfaces/IConfirmation';
import { UserOutlined } from '@ant-design/icons';

const data: IConfirmation = {
    resend: {
        title: "resend title",
        text: "resend text",
        btnText: "resend btn",
        icon: <EmailConfIcon />,
        handleClick: () => { },
    },
    confirmed: {
        title: "confirmed title",
        text: "confirmed text",
        btnText: "confirmed btn",
        icon: <UserOutlined />,
        handleClick: () => { },
    },
    recovered: {
        title: "recovered title",
        text: "recovered text",
        btnText: "recovered btn",
        icon: <UserOutlined />,
        handleClick: () => { },
    },
    expired: {
        title: "expired title",
        text: "expired text",
        btnText: "expired btn",
        icon: <UserOutlined />,
        handleClick: () => { },
    },
    applied: {
        title: "applied title",
        text: "applied text",
        btnText: "applied btn",
        icon: <UserOutlined />,
        handleClick: () => { },
    }
}

export default data;