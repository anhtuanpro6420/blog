import React, { FC } from 'react';
import Link from "next/link";
import { Layout, Menu } from 'antd';

const { Header: HeaderAnt } = Layout;

const Header: FC = () => {
    return (
        <HeaderAnt className='header'>
            <div className='logo' />
            <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
                <Menu.Item key='1'>
                    <Link href='/posts'>Blog</Link>
                </Menu.Item>
            </Menu>
        </HeaderAnt>
    );
};

export default Header;
