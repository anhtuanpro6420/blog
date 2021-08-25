import React, { FC } from 'react';
import { Layout } from 'antd';
import Header from '../Header';

const { Content } = Layout;

interface Props {
    children: JSX.Element;
}

const Wrapper: FC<Props> = ({ children }) => {
    return (
        <Layout>
            <Header />
            <Layout>
                    <Content
                        className='site-layout-background'
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: '90vh',
                        }}
                    >
                        {children}
                    </Content>
            </Layout>
        </Layout>
    );
};

export default Wrapper;
