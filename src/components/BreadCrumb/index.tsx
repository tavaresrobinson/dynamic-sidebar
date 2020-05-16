import React, { FC } from 'react';
import { Breadcrumb } from 'antd';
import styles from './BreadCrumb.module.scss';

interface IProps {
}
const BreadCrumbComp: FC<IProps> = ({
}) => {
    return (
        <>
            <Breadcrumb className={styles.breadcrumb}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="">Application Center</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="">Application List</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>An Application</Breadcrumb.Item>
            </Breadcrumb>
        </>
    );
};

export default BreadCrumbComp;
